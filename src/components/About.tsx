import React from "react";
import { Code, Brain, Rocket, Coffee } from "lucide-react";
import meImage from "../assets/me.jpg";

const About = () => {
  const stats = [
    { icon: Code, label: "Projects Completed", value: "25+" },
    { icon: Brain, label: "ML Models Deployed", value: "5+" },
    { icon: Rocket, label: "Years Experience", value: "3+" },
    { icon: Coffee, label: "Cups of Coffee", value: "∞" },
  ];

  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 mx-auto bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img
                  src={meImage}
                  alt="My Portrait"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Passionate Developer & Data Enthusiast
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a dedicated software developer and data scientist with a
              passion for creating innovative solutions that bridge the gap
              between complex data and user-friendly applications. My journey in
              technology has been driven by curiosity and a constant desire to
              learn and grow.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              With expertise in machine learning, web development, and mobile
              applications, I enjoy tackling challenging problems and
              transforming ideas into reality. When I'm not coding, you'll find
              me exploring new technologies, contributing to open-source
              projects, or sharing knowledge with the developer community.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-slate-700/50 p-4 rounded-lg text-center hover:bg-slate-700/70 transition-colors duration-300"
                >
                  <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
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
