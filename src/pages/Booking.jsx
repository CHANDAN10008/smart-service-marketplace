import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, CheckCircle, Smartphone, User } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { Link } from 'react-router-dom';

const Booking = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate API call
        setTimeout(() => {
            setSubmitted(true);
        }, 1000);
    };

    if (submitted) {
        return (
            <div className="min-h-screen flex items-center justify-center pt-20">
                <AnimatedSection className="text-center p-8 bg-white/5 border border-white/10 rounded-2xl max-w-md w-full mx-6 glass">
                    <CheckCircle className="w-20 h-20 text-green-400 mx-auto mb-6" />
                    <h2 className="text-3xl font-bold mb-4">Booking Confirmed!</h2>
                    <p className="text-gray-300 mb-8">
                        Your service request has been received. A professional will contact you shortly to confirm the details.
                    </p>
                    <Link to="/" className="block w-full py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg text-white font-bold transition-colors">
                        Return Home
                    </Link>
                </AnimatedSection>
            </div>
        );
    }

    return (
        <div className="pt-24 pb-20 min-h-screen">
            <div className="container mx-auto px-6 max-w-4xl">
                <AnimatedSection className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4">Book a <span className="text-cyan-400">Service</span></h1>
                    <p className="text-gray-400">Fill in the details below to schedule your appointment.</p>
                </AnimatedSection>

                <AnimatedSection delay={0.2}>
                    <form onSubmit={handleSubmit} className="glass p-8 md:p-12 rounded-3xl space-y-8">
                        {/* Personal Info */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold border-b border-white/10 pb-2">Personal Details</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400 flex items-center gap-2"><User size={16} /> Full Name</label>
                                    <input required type="text" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 focus:border-cyan-500 outline-none transition-colors" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400 flex items-center gap-2"><Smartphone size={16} /> Phone Number</label>
                                    <input required type="tel" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 focus:border-cyan-500 outline-none transition-colors" placeholder="+1 (555) 000-0000" />
                                </div>
                            </div>
                        </div>

                        {/* Address */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold border-b border-white/10 pb-2">Address</h3>
                            <div className="space-y-2">
                                <label className="text-sm text-gray-400 flex items-center gap-2"><MapPin size={16} /> Street Address</label>
                                <textarea required rows="3" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 focus:border-cyan-500 outline-none transition-colors" placeholder="123 Main St, Apt 4B..."></textarea>
                            </div>
                        </div>

                        {/* Date & Time */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold border-b border-white/10 pb-2">Schedule</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400 flex items-center gap-2"><Calendar size={16} /> Date</label>
                                    <input required type="date" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 focus:border-cyan-500 outline-none transition-colors" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400 flex items-center gap-2"><Clock size={16} /> Preferred Time</label>
                                    <select required className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 focus:border-cyan-500 outline-none transition-colors [&>option]:bg-gray-900">
                                        <option value="">Select a time</option>
                                        <option value="morning">Morning (8AM - 12PM)</option>
                                        <option value="afternoon">Afternoon (12PM - 4PM)</option>
                                        <option value="evening">Evening (4PM - 8PM)</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <button type="submit" className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-bold text-lg hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all transform active:scale-95">
                            Confirm Appointment
                        </button>
                    </form>
                </AnimatedSection>
            </div>
        </div>
    );
};

export default Booking;
