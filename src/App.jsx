import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Timer, Users, Star, ArrowRight, CheckCircle, Zap, Target, LineChart, Trophy } from 'lucide-react';
import { Alert, AlertDescription } from "@/components/ui/alert"
import verifindLogo from './assets/logo.png';

const FeatureIcon = ({ children, className = "" }) => (
  <div className={`relative group-hover:scale-110 transition-all duration-300 ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl rotate-6 opacity-20 group-hover:rotate-12 transition-all duration-300"></div>
    <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl -rotate-6 opacity-20 group-hover:-rotate-12 transition-all duration-300"></div>
    <div className="bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-500 p-4 rounded-xl relative flex items-center justify-center w-20 h-20 mx-auto shadow-lg">
      {children}
    </div>
  </div>
);

const App = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://buttondown.com/api/emails/embed-subscribe/verifind', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `email=${encodeURIComponent(email)}`,
      });

      if (response.ok) {
        setShowSuccess(true);
        setEmail("");
      } else {
        throw new Error('Subscription failed');
      }
    } catch (error) {
      // You might want to add error handling here
      console.error('Subscription error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex flex-col items-center justify-center p-4">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mt-2 ml-4">
            <img src={verifindLogo} alt="Verifind Logo" className="h-[80px] w-auto -ml-[72px] mt-[6px]" />
            <h1 className="text-5xl font-bold text-gray-900 -ml-[12px] mt-[6px]">Verifind</h1>
          </div>
          <div className="flex items-center justify-center gap-2 mb-4 ml-6">
            <div className="h-1 w-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
            <div className="h-1 w-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
            <div className="h-1 w-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
          </div>
        </div>
        
        {/* Main Content Card */}
        <Card className="w-full max-w-7xl p-8 md:p-12 bg-white/80 backdrop-blur-xl shadow-2xl border-t border-white/50 rounded-xl">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Zap className="w-5 h-5 text-blue-600" />
              <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                Coming Soon
              </span>
            </div>
            
            <div className="max-w-2xl mx-auto mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Redefine Hiring with Verifind's AI-Powered SaaS
              </h2>
              <p className="text-lg text-gray-600">
                Our AI-driven talent acquisition software helps you discover candidates based on proven skills, not just resumes.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
              <div className="group p-8 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                <FeatureIcon>
                  <div className="relative">
                    <Zap className="w-8 h-8 text-white absolute -left-4 -top-4 opacity-40" />
                    <Timer className="w-10 h-10 text-white relative z-10" />
                    <LineChart className="w-6 h-6 text-white absolute -right-3 -bottom-3 opacity-60" />
                  </div>
                </FeatureIcon>
                <h3 className="text-xl font-semibold mb-3 mt-6">Faster Hiring</h3>
                <p className="text-gray-600">Efficiency Redefined: Streamline your recruitment process by focusing on validated skills and real capabilities, not just credentials.</p>
              </div>
              <div className="group p-8 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                <FeatureIcon>
                  <div className="relative">
                    <Target className="w-8 h-8 text-white absolute -left-4 -top-4 opacity-40" />
                    <Trophy className="w-10 h-10 text-white relative z-10" />
                    <Star className="w-6 h-6 text-white absolute -right-3 -bottom-3 opacity-60" />
                  </div>
                </FeatureIcon>
                <h3 className="text-xl font-semibold mb-3 mt-6">Skill-Based Evaluation</h3>
                <p className="text-gray-600">Depth Over Breadth: Assess candidates based on their actual skills through rigorous AI-evaluations, ensuring they truly fit the role's demands.</p>
              </div>
              <div className="group p-8 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                <FeatureIcon>
                  <div className="relative">
                    <Users className="w-8 h-8 text-white absolute -left-4 -top-4 opacity-40" />
                    <Target className="w-10 h-10 text-white relative z-10" />
                    <Star className="w-6 h-6 text-white absolute -right-3 -bottom-3 opacity-60" />
                  </div>
                </FeatureIcon>
                <h3 className="text-xl font-semibold mb-3 mt-6">Better Matches</h3>
                <p className="text-gray-600">Smart Matching: Utilize our advanced AI algorithms to find candidates who align perfectly with your company's culture and role requirements.</p>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-12 bg-gradient-to-r from-gray-50 to-blue-50 p-8 rounded-2xl">
              <h4 className="text-xl font-semibold mb-2">Join Early Access</h4>
              <p className="text-gray-600 mb-6">Be among the first to revolutionize your hiring process. Enter your email to stay updated.</p>
              
              {showSuccess ? (
                <Alert className="bg-green-50 border-green-200 text-green-800 mb-4">
                  <AlertDescription>
                    Thanks for subscribing! We'll be in touch soon.
                  </AlertDescription>
                </Alert>
              ) : (
                <form 
                  action="https://buttondown.com/api/emails/embed-subscribe/verifind"
                  method="post"
                  target="popupwindow"
                  onSubmit={handleSubscribe}
                  className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
                >
                  <input 
                    type="email" 
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email" 
                    className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    required
                  />
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      "Submitting..."
                    ) : (
                      <>
                        Notify Me
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </Card>

        {/* Footer */}
        <div className="mt-12 text-center text-gray-500">
          <p className="flex items-center justify-center gap-2">
            <CheckCircle className="w-4 h-4 text-blue-600" />
            Coming in 2025
          </p>
          <p className="mt-2">© Verifind. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default App;