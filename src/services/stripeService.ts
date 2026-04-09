import { loadStripe } from '@stripe/stripe-js';

// يتم جلب مفتاح Stripe القابل للنشر من متغيرات البيئة
const stripePublishableKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;

export const stripePromise = loadStripe(stripePublishableKey || '');

/**
 * إنشاء جلسة دفع (Checkout Session) عبر Stripe
 * @param priceId معرف السعر في Stripe
 * @param userId معرف المستخدم
 */
export const createCheckoutSession = async (priceId: string, userId: string) => {
  try {
    // استدعاء وظيفة لا خادمية (Edge Function) لإنشاء الجلسة
    // يتم تمرير userId لربط الدفع بالمستخدم الصحيح
    const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/create-stripe-checkout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`
      },
      body: JSON.stringify({ priceId, userId }),
    });

    const session = await response.json();

    if (session.error) {
      throw new Error(session.error);
    }

    const stripe = await stripePromise;
    if (stripe) {
      const { error } = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (error) {
        console.error('Stripe redirect error:', error);
      }
    }
  } catch (err) {
    console.error('Error creating checkout session:', err);
  }
};
