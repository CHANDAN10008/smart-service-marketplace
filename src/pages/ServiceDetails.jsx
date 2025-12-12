import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Clock, MapPin, Star, ShieldCheck } from 'lucide-react';
import { services } from '../utils/data';
import AnimatedSection from '../components/AnimatedSection';

const ServiceDetails = () => {
    const { id } = useParams();
    const service = services.find(s => s.id === parseInt(id));

    if (!service) {
        return <div className="pt-24 text-center">Service not found</div>;
    }

    return (
        <div className="pt-24 min-h-screen pb-20">
            <div className="container mx-auto px-6">
                <Link to="/services" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
                    <ArrowLeft size={20} /> Back to Services
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left: Image & Gallery */}
                    <AnimatedSection>
                        <div className="rounded-3xl overflow-hidden border border-white/10 mb-6 h-[400px]">
                            <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            {/* Mock Gallery */}
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="h-24 rounded-xl overflow-hidden border border-white/10">
                                    <img src={`https://source.unsplash.com/random/400x300?sig=${i + service.id}`} alt="Gallery" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>

                    {/* Right: Info */}
                    <AnimatedSection delay={0.2}>
                        <div className="inline-block px-4 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-sm font-semibold mb-4">
                            {service.category}
                        </div>
                        <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
                        <div className="flex items-center gap-4 mb-6 text-sm">
                            <div className="flex items-center gap-1 text-yellow-400">
                                <Star size={18} fill="currentColor" />
                                <span className="font-bold">{service.rating}</span> (120+ reviews)
                            </div>
                            <span className="text-gray-500">•</span>
                            <div className="flex items-center gap-2 text-gray-300">
                                <Clock size={16} /> 1-2 Hours
                            </div>
                            <span className="text-gray-500">•</span>
                            <div className="flex items-center gap-2 text-gray-300">
                                <MapPin size={16} /> Available nearby
                            </div>
                        </div>

                        <div className="text-3xl font-bold text-white mb-8">
                            ${service.price} <span className="text-lg text-gray-500 font-normal">/ service</span>
                        </div>

                        <div className="glass p-8 rounded-2xl mb-8">
                            <h3 className="text-xl font-bold mb-4">What's Included?</h3>
                            <ul className="space-y-3">
                                {['Professional Consultation', 'All necessary tools & equipment', 'Site cleanup after work', 'Satisfaction Guarantee'].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-gray-300">
                                        <CheckCircle size={20} className="text-green-400" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex gap-4">
                            <Link
                                to="/booking"
                                className="flex-1 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-bold text-center text-lg hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all"
                            >
                                Book Now
                            </Link>
                            <button className="px-6 py-4 border border-white/20 rounded-xl hover:bg-white/5 transition-colors">
                                <ShieldCheck size={24} className="text-gray-300" />
                            </button>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;
