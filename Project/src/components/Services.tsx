import React from 'react';
import { Code, Smartphone, Palette } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      description: "Modern, responsive websites built with cutting-edge technologies that deliver exceptional user experiences.",
      features: ["React & Next.js", "TypeScript", "Tailwind CSS", "SEO Optimized"]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications that engage users and drive business growth.",
      features: ["React Native", "iOS & Android", "App Store Optimization", "Push Notifications"]
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that captivate users and enhance your brand identity.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in the modern digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100"
            >
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg p-3 w-fit mb-6">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;