import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, Rocket } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const Login = () => {
    return (
        <div className="min-h-screen pt-20 flex items-center justify-center relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-[100px] pointer-events-none"></div>

            <AnimatedSection className="w-full max-w-md mx-4">
                <div className="glass p-8 md:p-10 rounded-3xl border border-white/20 relative z-10">
                    <div className="text-center mb-8">
                        <Link to="/" className="inline-flex items-center gap-2 text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                            <Rocket className="text-cyan-400" /> SmartService
                        </Link>
                        <h2 className="text-2xl font-bold text-white">Welcome Back</h2>
                        <p className="text-gray-400 text-sm">Sign in to manage your bookings</p>
                    </div>

                    <form className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm text-gray-300">Email Address</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                                <input type="email" placeholder="you@example.com" className="w-full bg-black/20 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white focus:border-cyan-500 outline-none transition-colors" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <label className="text-sm text-gray-300">Password</label>
                                <a href="#" className="text-xs text-cyan-400 hover:text-cyan-300">Forgot?</a>
                            </div>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                                <input type="password" placeholder="••••••••" className="w-full bg-black/20 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white focus:border-cyan-500 outline-none transition-colors" />
                            </div>
                        </div>

                        <button className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-bold text-white hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all">
                            Sign In
                        </button>
                    </form>

                    <p className="text-center mt-6 text-sm text-gray-400">
                        Don't have an account? <Link to="/signup" className="text-cyan-400 font-bold hover:underline">Sign Up</Link>
                    </p>
                </div>
            </AnimatedSection>
        </div>
    );
};

export default Login;
