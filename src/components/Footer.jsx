import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Rocket } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="relative bg-black/40 border-t border-white/10 backdrop-blur-lg pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-white mb-4">
                            <Rocket className="text-cyan-400" />
                            SmartService
                        </Link>
                        <p className="text-gray-400 mb-6">
                            The futuristic marketplace for all your home and professional service needs. Fast, reliable, and premium.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                                <a key={idx} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-cyan-500 hover:text-white transition-all">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            {[
                                { name: 'Home', path: '/' },
                                { name: 'Services', path: '/services' },
                                { name: 'About Us', path: '/about' },
                                { name: 'Contact', path: '/contact' },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link to={link.path} className="text-gray-400 hover:text-cyan-400 transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-6">Services</h4>
                        <ul className="space-y-3">
                            {['Home Cleaning', 'Plumbing', 'Electrical', 'AC Repair', 'Carpentry'].map((item) => (
                                <li key={item}>
                                    <Link to="/services" className="text-gray-400 hover:text-cyan-400 transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-6">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-gray-400">
                                <MapPin className="text-cyan-400" size={20} />
                                <span>123 Innovation Dr, Tech City, FL 32801</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Phone className="text-cyan-400" size={20} />
                                <span>+1 (800) 123-4567</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Mail className="text-cyan-400" size={20} />
                                <span>support@smartservice.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center">
                    <p className="text-gray-500">
                        &copy; {new Date().getFullYear()} SmartService Marketplace. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
