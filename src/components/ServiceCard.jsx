import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';

const ServiceCard = ({ id, title, category, price, rating, image, description }) => {
    return (
        <div className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:shadow-[0_0_30px_rgba(0,198,255,0.3)] transition-all duration-300 transform hover:-translate-y-2">
            <div className="h-48 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-cyan-400 border border-cyan-500/30">
                    {category}
                </div>
            </div>

            <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{title}</h3>
                    <div className="flex items-center gap-1 text-yellow-400 text-sm">
                        <Star size={16} fill="currentColor" />
                        <span>{rating}</span>
                    </div>
                </div>

                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{description}</p>

                <div className="flex items-center justify-between mt-4 border-t border-white/10 pt-4">
                    <span className="text-lg font-bold text-white">${price}</span>
                    <Link
                        to={`/services/${id}`}
                        className="flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-white transition-colors"
                    >
                        Book Now <ArrowRight size={16} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
