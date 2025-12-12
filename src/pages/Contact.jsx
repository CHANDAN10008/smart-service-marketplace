import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const Contact = () => {
    return (
        <div className="pt-24 pb-20 min-h-screen">
            <div className="container mx-auto px-6">
                <AnimatedSection className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Get in <span className="text-cyan-400">Touch</span></h1>
                    <p className="text-gray-400">We'd love to hear from you. Send us a message.</p>
                </AnimatedSection>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Form */}
                    <AnimatedSection className="glass p-8 rounded-3xl">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-300">Name</label>
                                    <input type="text" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-cyan-500 outline-none transition-colors" placeholder="Your Name" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-300">Email</label>
                                    <input type="email" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-cyan-500 outline-none transition-colors" placeholder="Email Address" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm text-gray-300">Subject</label>
                                <input type="text" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-cyan-500 outline-none transition-colors" placeholder="How can we help?" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm text-gray-300">Message</label>
                                <textarea rows="5" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-cyan-500 outline-none transition-colors" placeholder="Your message..."></textarea>
                            </div>
                            <button className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-bold flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all">
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </AnimatedSection>

                    {/* Info & Map */}
                    <AnimatedSection delay={0.2} className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { icon: <Mail className="text-cyan-400" />, title: "Email", value: "support@smartservice.com" },
                                { icon: <Phone className="text-green-400" />, title: "Phone", value: "+91 9123059717" },
                                { icon: <MapPin className="text-red-400" />, title: "Office", value: "Kolkata, West Bengal, India" }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center">
                                    <div className="w-12 h-12 mx-auto bg-black/20 rounded-full flex items-center justify-center mb-4">
                                        {item.icon}
                                    </div>
                                    <h4 className="font-bold mb-2">{item.title}</h4>
                                    <p className="text-xs text-gray-400">{item.value}</p>
                                </div>
                            ))}
                        </div>

                        {/* Map Embed (Placeholder) */}
                        <div className="w-full h-80 bg-white/5 rounded-3xl overflow-hidden border border-white/10 relative">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117925.2168969446!2d88.26495057896431!3d22.5354063744826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1645564756877!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                className="opacity-80 grayscale invert"
                            ></iframe>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </div>
    );
};

export default Contact;
