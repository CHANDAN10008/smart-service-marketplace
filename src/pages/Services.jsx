import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import AnimatedSection from '../components/AnimatedSection';
import { services } from '../utils/data';

const Services = () => {
    const [searchParams] = useSearchParams();
    const initialCategory = searchParams.get('category') || 'All';
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(initialCategory);

    const categories = ['All', 'Electrical', 'Plumbing', 'Cleaning', 'AC Repair', 'Carpentry', 'Painting'];

    const filteredServices = services.filter(service => {
        const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="pt-24 min-h-screen pb-20">
            <div className="container mx-auto px-6">
                <AnimatedSection className="text-center mb-12">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Explore Our <span className="text-cyan-400">Services</span></h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">Found the perfect professional for your needs.</p>
                </AnimatedSection>

                {/* Filters & Search */}
                <AnimatedSection className="mb-12" delay={0.2}>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 glass p-4 rounded-2xl">
                        {/* Categories */}
                        <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${selectedCategory === cat
                                            ? 'bg-cyan-500 text-white shadow-[0_0_15px_rgba(6,182,212,0.5)]'
                                            : 'bg-white/5 text-gray-400 hover:bg-white/10'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        {/* Search */}
                        <div className="relative w-full md:w-auto">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="text"
                                placeholder="Search services..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full md:w-80 bg-white/5 border border-white/10 rounded-full pl-12 pr-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                            />
                        </div>
                    </div>
                </AnimatedSection>

                {/* Grid */}
                {filteredServices.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {filteredServices.map((service, idx) => (
                            <AnimatedSection key={service.id} delay={idx * 0.1}>
                                <ServiceCard {...service} />
                            </AnimatedSection>
                        ))}
                    </div>
                ) : (
                    <div className="text-center text-gray-400 py-20">
                        <p className="text-xl">No services found matching your criteria.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Services;
