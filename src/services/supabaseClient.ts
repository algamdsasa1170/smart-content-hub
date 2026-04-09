import { createClient } from '@supabase/supabase-js';

// يتم جلب هذه القيم من متغيرات البيئة (Environment Variables)
// في GitHub Actions أو ملف .env محلي
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase URL or Anon Key is missing. Please check your environment variables.');
}

export const supabase = createClient(supabaseUrl || '', supabaseAnonKey || '');

/**
 * وظيفة للتحقق من حالة اشتراك المستخدم
 * @param userId معرف المستخدم
 * @returns مستوى الاشتراك (free, basic, premium)
 */
export const getUserSubscription = async (userId: string) => {
  const { data, error } = await supabase
    .from('profiles')
    .select('subscription_tier')
    .eq('id', userId)
    .single();

  if (error) {
    console.error('Error fetching subscription:', error);
    return 'free';
  }

  return data?.subscription_tier || 'free';
};
