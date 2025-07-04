import React from 'react';
import { Users, Award, Globe, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      number: "30+",
      label: "Expert Team Members"
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: "3+",
      label: "Years of Experience"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      number: "10+",
      label: "Countries Served"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      number: "500+",
      label: "Happy Clients"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                About <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Hari Om Thalassic</span>
              </h2>
              
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                We're a passionate team of digital craftspeople dedicated to creating exceptional digital experiences. 
                Our mission is to help businesses transform their ideas into reality through innovative technology solutions.
              </p>
              
              <p className="text-gray-600 mb-8 leading-relaxed">
                Founded in 2022, we've grown from a small startup to a leading digital agency, working with clients 
                ranging from innovative startups to Fortune 500 companies. Our approach combines technical expertise 
                with creative vision to deliver solutions that not only meet but exceed expectations.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Innovation-driven approach</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Agile development methodology</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"></div>
                  <span className="text-gray-700">24/7 support and maintenance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Transparent communication</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg p-3 w-fit mx-auto mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;