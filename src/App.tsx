import React from 'react';
import { Layout, Rocket, Shield, Zap } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans" dir="rtl">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Rocket className="text-blue-600 w-8 h-8" />
          <span className="text-xl font-bold tracking-tight">Smart Content Hub</span>
        </div>
        <div className="flex gap-4">
          <button className="px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors">تسجيل الدخول</button>
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-md">ابدأ مجاناً</button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl font-extrabold mb-6 leading-tight">
          أدر محتواك بذكاء مع <span className="text-blue-600">Smart Content Hub</span>
        </h1>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          المنصة المتكاملة لتنظيم، تحليل، ونشر المحتوى الرقمي باستخدام تقنيات الذكاء الاصطناعي.
        </p>
        <div className="flex justify-center gap-4">
          <button className="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-lg">ابدأ تجربتك المجانية</button>
          <button className="px-8 py-4 bg-white text-gray-700 text-lg font-semibold rounded-xl border border-gray-300 hover:bg-gray-50 transition-all">شاهد العرض التوضيحي</button>
        </div>
      </header>

      {/* Features Section */}
      <section className="bg-white py-20 border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-md transition-shadow">
            <Zap className="text-yellow-500 w-12 h-12 mb-6" />
            <h3 className="text-2xl font-bold mb-4">أتمتة ذكية</h3>
            <p className="text-gray-600">جدولة ونشر المحتوى تلقائياً عبر جميع منصات التواصل الاجتماعي بضغطة زر واحدة.</p>
          </div>
          <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-md transition-shadow">
            <Layout className="text-green-500 w-12 h-12 mb-6" />
            <h3 className="text-2xl font-bold mb-4">تنظيم احترافي</h3>
            <p className="text-gray-600">مساحة عمل منظمة لإدارة مشاريعك، ملفاتك، وأفكارك في مكان واحد آمن.</p>
          </div>
          <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-md transition-shadow">
            <Shield className="text-blue-500 w-12 h-12 mb-6" />
            <h3 className="text-2xl font-bold mb-4">أمان فائق</h3>
            <p className="text-gray-600">حماية بياناتك وتشفيرها بأعلى المعايير العالمية لضمان خصوصية أعمالك.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-gray-500 border-t border-gray-200">
        <p>© 2026 Smart Content Hub. جميع الحقوق محفوظة.</p>
      </footer>
    </div>
  );
}

export default App;
