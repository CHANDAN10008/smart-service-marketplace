import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { Users, Target, Rocket } from 'lucide-react';
import chandanImg from '../assets/chandan-shaw.jpg';

const About = () => {
    return (
        <div className="pt-24 pb-20 overflow-hidden">
            <div className="container mx-auto px-6">
                <AnimatedSection className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">About <span className="text-cyan-400">Us</span></h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        We are revolutionizing the way you book home services. Fast, reliable, and futuristic.
                    </p>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {[
                        { icon: <Rocket size={40} className="text-purple-500" />, title: "Our Mission", desc: "To connect homeowners with the best professionals instantly using advanced technology." },
                        { icon: <Users size={40} className="text-blue-500" />, title: "Who We Are", desc: "A team of dreamers, engineers, and designers building the future of services." },
                        { icon: <Target size={40} className="text-red-500" />, title: "Our Vision", desc: "A world where getting help is as easy as a single tap." }
                    ].map((item, idx) => (
                        <AnimatedSection key={idx} delay={idx * 0.2} className="p-8 rounded-2xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-colors">
                            <div className="w-20 h-20 mx-auto bg-black/30 rounded-full flex items-center justify-center mb-6">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                            <p className="text-gray-400">{item.desc}</p>
                        </AnimatedSection>
                    ))}
                </div>

                <AnimatedSection className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-12">Meet the <span className="text-purple-500">Team</span></h2>
                    {/* Team Members Data */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { name: "Team Member 1", role: "Designer", image: "https://source.unsplash.com/random/300x400?person,1" },
                            { name: "Chandan Shaw", role: "Developer", image: chandanImg },
                            { name: "Team Member 3", role: "Manager", image: "https://source.unsplash.com/random/300x400?person,3" },
                            { name: "Team Member 4", role: "Marketing", image: "https://source.unsplash.com/random/300x400?person,4" }
                        ].map((member, idx) => (
                            <div key={idx} className="group relative overflow-hidden rounded-2xl">
                                <img src={member.image} alt={member.name} className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110 aspect-[3/4]" />
                                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                                    <h4 className="text-white font-bold">{member.name}</h4>
                                    <p className="text-cyan-400 text-sm">{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>
            </div>
        </div>
    );
};

export default About;
