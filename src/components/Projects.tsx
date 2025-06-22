import React from "react";
import { ExternalLink, Github, Star, GitFork } from "lucide-react";
import newsAppImage from "../assets/newsapp.png";
import iaaImage from "../assets/iaa.png";
import cycleImage from "../assets/cycle.png";

const Projects = () => {
  const projects = [
    {
      title: "Modern News – Kotlin Android News App",
      description:
        "A sleek news application built with Kotlin using MVVM architecture and Material UI, featuring real-time news updates via NewsData.io API. Achieved 100% crash-free sessions and improved navigation flow, enhancing user experience across devices.",
      image: newsAppImage,
      tech: ["Kotlin", "MVVM", "Android", "NewsData.io API", "Material UI"],
      github: "https://github.com/Alexalen0/News_App_API_Kotlin_AS",
      demo: "https://github.com/Alexalen0/News_App_API_Kotlin_AS/releases/tag/v1.0", // APK download link
      stars: 12,
      forks: 5,
      featured: true,
    },
    {
      title: "Faculty Management & Registration System",
      description:
        "A Django-based full-stack web application for IAA that reduced manual faculty registration processes by 60% and streamlined data access using Django ORM, featuring comprehensive faculty management and automated registration workflows.",
      image: iaaImage,
      tech: ["Django", "Python", "SQLite", "HTML/CSS", "Render"],
      github: "https://github.com/Alexalen0/Faculty_mgm", // Update with actual repository URL
      demo: "https://trainingfeedbacksystem.onrender.com/", // Update with actual demo URL
      stars: 8, // You may want to update these values
      forks: 3, // You may want to update these values
      featured: true,
    },
    {
      title: "CycleGAN for Emotional Voice Conversion",
      description:
        "An open-source deep learning project featuring a novel CycleGAN architecture that improved emotional tone transformation accuracy by 14% over previous models. Trained using adversarial, cycle-consistency, and spectral normalization losses for advanced voice conversion capabilities.",
      image: cycleImage,
      tech: [
        "Python",
        "PyTorch",
        "CycleGAN",
        "Deep Learning",
        "Spectral Normalization",
      ],
      github: "https://www.kaggle.com/code/alexalen03/2000-data-emo", // Update with actual repository URL
      demo: "https://emvcyclegan-tlc6bs4jgjvbrxynpcync3.streamlit.app/", // Update with actual Kaggle notebook URL
      stars: 15,
      forks: 7,
      featured: true,
    },
    {
      title: "MuRIL Hindi NLP",
      description:
        "Natural Language Processing project utilizing MuRIL for Hindi text analysis and classification with state-of-the-art results.",
      image:
        "https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Python", "Transformers", "MuRIL", "Hugging Face"],
      github: "https://www.kaggle.com/code/alexalen03/muril-hindi/",
      demo: "https://www.kaggle.com/code/alexalen03/muril-hindi/",
      stars: 10,
      forks: 4,
      featured: false,
    },
    {
      title: "Stock Learning Platform",
      description:
        "Educational platform for stock market learning with interactive simulations and real-time market data integration.",
      image:
        "https://images.pexels.com/photos/187041/pexels-photo-187041.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React", "Python", "Financial APIs", "Chart.js"],
      github: "https://github.com/Lakshay-Jain-1/stock_learning",
      demo: "https://github.com/Lakshay-Jain-1/stock_learning",
      stars: 6,
      forks: 2,
      featured: false,
    },
    {
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website built with React and Three.js, featuring 3D animations and smooth parallax effects.",
      image:
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React", "Three.js", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/alexvarghese/portfolio",
      demo: "https://alexvarghese.dev",
      stars: 20,
      forks: 8,
      featured: false,
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            A showcase of my recent work spanning web development, mobile apps,
            and machine learning
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-slate-900/50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-700/50 hover:border-slate-600/50"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 flex space-x-2">
                  <span className="bg-blue-500/80 text-white px-2 py-1 rounded-full text-xs font-medium">
                    Featured
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <div className="flex items-center space-x-3 text-gray-400 text-sm">
                    <div className="flex items-center space-x-1">
                      <Star size={14} />
                      <span>{project.stars}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <GitFork size={14} />
                      <span>{project.forks}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-slate-700/50 text-blue-300 px-2 py-1 rounded-md text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <Github size={16} />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm">Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Other Notable Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-900/30 p-6 rounded-lg border border-slate-700/30 hover:border-slate-600/50 transition-all duration-300 hover:bg-slate-900/50"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-lg font-semibold text-white">
                    {project.title}
                  </h4>
                  <div className="flex items-center space-x-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      <Github size={18} />
                    </a>
                    {/* <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      <ExternalLink size={18} />
                    </a> */}
                  </div>
                </div>

                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-slate-700/50 text-blue-300 px-2 py-1 rounded-md text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="text-gray-500 text-xs px-2 py-1">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
