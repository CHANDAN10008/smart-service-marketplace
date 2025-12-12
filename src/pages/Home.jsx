import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { ArrowRight, CheckCircle, Star, Zap, Shield, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';

// Lazy load Spline to improve initial load
// Using a generic 3D scene from Spline community
const SplineScene = () => (
    <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
);

const Home = () => {
    const categories = [
        { name: 'Electrical', icon: '⚡', color: 'bg-yellow-500/10 text-yellow-500' },
        { name: 'Plumbing', icon: '🔧', color: 'bg-blue-500/10 text-blue-500' },
        { name: 'Cleaning', icon: '✨', color: 'bg-green-500/10 text-green-500' },
        { name: 'AC Repair', icon: '❄️', color: 'bg-cyan-500/10 text-cyan-500' },
        { name: 'Carpentry', icon: '🔨', color: 'bg-orange-500/10 text-orange-500' },
        { name: 'Painting', icon: '🎨', color: 'bg-purple-500/10 text-purple-500' },
    ];

    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "Homeowner",
            text: "The electrician arrived within an hour and fixed the issue perfectly. Highly recommended!",
            rating: 5
        },
        {
            name: "Mike Chen",
            role: "Business Owner",
            text: "Used their cleaning service for my office. Professional, fast, and very thorough.",
            rating: 5
        },
        {
            name: "Emily Davis",
            role: "Teacher",
            text: "Found a great plumber instantly. The app is so easy to use and looks amazing.",
            rating: 4
        }
    ];

    return (
        <div className="overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center pt-20">
                <div className="absolute inset-0 z-0">
                    <Suspense fallback={<div className="w-full h-full bg-background animate-pulse"></div>}>
                        <div className="w-full h-full opacity-60">
                            {/* Fallback image if Spline fails or takes time, or just overlay */}
                            {/* Ideally we put Spline here. Note: Spline load can be heavy. */}
                            <iframe src='https://my.spline.design/cyberpunkcity-0e7041793138541e3c2390886c06a3e5/' frameBorder='0' width='100%' height='100%'></iframe>
                        </div>
                    </Suspense>
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent pointer-events-none"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <div className="inline-block px-4 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-semibold mb-6 backdrop-blur-md">
                            ✨ The Future of Home Services
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                            Book Trusted <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 neon-text">
                                Professionals
                            </span>
                            <br /> Near You
                        </h1>
                        <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-lg">
                            Experience the next generation of service booking. AI-matched professionals, instant booking, and premium service quality.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                to="/services"
                                className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                Find a Pro <ArrowRight size={20} />
                            </Link>
                            <Link
                                to="/about"
                                className="px-8 py-4 rounded-full border border-white/20 bg-white/5 text-white font-bold text-lg hover:bg-white/10 backdrop-blur-md transition-all duration-300 flex items-center justify-center"
                            >
                                How it Works
                            </Link>
                        </div>

                        <div className="mt-12 flex items-center gap-6 text-sm text-gray-400">
                            <div className="flex items-center gap-2">
                                <CheckCircle size={16} className="text-cyan-400" /> Verified Pros
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle size={16} className="text-cyan-400" /> Insured Work
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle size={16} className="text-cyan-400" /> 24/7 Support
                            </div>
                        </div>
                    </motion.div>

                    {/* Right side is mostly the 3D scene background visible through layout */}
                </div>
            </section>

            {/* Stats Section */}
            <AnimatedSection className="py-10 border-y border-white/5 bg-white/5 backdrop-blur-sm">
                <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {[
                        { label: 'Active Users', value: '50K+' },
                        { label: 'Service Providers', value: '2,000+' },
                        { label: 'Jobs Completed', value: '150K+' },
                        { label: 'Average Rating', value: '4.9/5' }
                    ].map((stat, idx) => (
                        <div key={idx}>
                            <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                            <div className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </AnimatedSection>

            {/* Categories */}
            <section className="py-20 relative">
                <div className="container mx-auto px-6">
                    <AnimatedSection className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Our <span className="text-cyan-400">Services</span></h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Choose from our wide range of premium services tailored to your needs.
                        </p>
                    </AnimatedSection>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {categories.map((cat, idx) => (
                            <AnimatedSection key={idx} delay={idx * 0.1}>
                                <Link to={`/services?category=${cat.name}`} className={`block p-6 rounded-2xl border border-white/10 hover:border-cyan-500/50 hover:bg-white/5 transition-all duration-300 text-center group h-full`}>
                                    <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center text-3xl mb-4 ${cat.color} group-hover:scale-110 transition-transform duration-300`}>
                                        {cat.icon}
                                    </div>
                                    <h3 className="font-semibold text-white group-hover:text-cyan-400 transition-colors">{cat.name}</h3>
                                </Link>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* How it Works */}
            <section className="py-20 bg-secondary/30">
                <div className="container mx-auto px-6">
                    <AnimatedSection className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">How It <span className="text-purple-500">Works</span></h2>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { icon: <Zap className="w-12 h-12 text-yellow-400" />, title: "1. Choose a Service", desc: "Select from our wide range of trusted services." },
                            { icon: <Clock className="w-12 h-12 text-cyan-400" />, title: "2. Pick a Time", desc: "Select a date and time that works for you." },
                            { icon: <Shield className="w-12 h-12 text-green-400" />, title: "3. Relax", desc: "Our verified professional takes care of everything." }
                        ].map((step, idx) => (
                            <AnimatedSection key={idx} delay={idx * 0.2} className="text-center">
                                <div className="w-24 h-24 mx-auto bg-white/5 rounded-full flex items-center justify-center mb-6 shadow-lg border border-white/10 relative">
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-full"></div>
                                    {step.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                                <p className="text-gray-400">{step.desc}</p>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <AnimatedSection className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">What Users <span className="text-pink-500">Say</span></h2>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((t, idx) => (
                            <AnimatedSection key={idx} delay={idx * 0.1}>
                                <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-pink-500/30 transition-colors relative">
                                    <div className="flex gap-1 mb-4 text-yellow-400">
                                        {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                                    </div>
                                    <p className="text-gray-300 mb-6 italic">"{t.text}"</p>
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-400 to-purple-500 flex items-center justify-center font-bold text-white">
                                            {t.name[0]}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white">{t.name}</h4>
                                            <span className="text-xs text-gray-500">{t.role}</span>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <AnimatedSection className="rounded-3xl bg-gradient-to-r from-blue-900 to-purple-900 p-12 text-center relative overflow-hidden border border-white/10">
                        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Experience Premium Service?</h2>
                            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Join thousands of satisfied customers who trust SmartService for their home needs.</p>
                            <Link
                                to="/booking"
                                className="inline-block px-10 py-4 rounded-full bg-white text-blue-900 font-bold text-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all duration-300"
                            >
                                Book a Service Now
                            </Link>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
};

export default Home;
