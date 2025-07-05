import React from "react";
import { Calendar, MapPin, Award } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Software Developer Intern",
      company: "Indian Aviation Academy (IAA)",
      location: "India",
      period: "January 2025 – March 2025",
      description:
        "Building Django-based web applications to streamline organizational processes and improve system efficiency. Focusing on backend optimization and user authentication systems.",
      achievements: [
        "Built Django-based Faculty Management & Registration System reducing manual workload by 40%",
        "Improved registration processing time by 60% through system optimization",
        "Optimized database queries and integrated user authentication for enhanced performance",
      ],
      tech: ["Django", "Python", "SQLite", "HTML/CSS", "Database Optimization"],
    },
    {
      title: "Research Intern",
      company: "AtheroPoint",
      location: "India",
      period: "October 2024 – January 2025",
      description:
        "Developed advanced machine learning pipelines for medical imaging applications, focusing on synthetic data generation and ensemble classification models for healthcare datasets.",
      achievements: [
        "Developed GAN-based synthetic data generation pipelines for medical imaging",
        "Increased minority class representation of cancer skin by 38% in datasets",
        "Achieved 0.91 ensemble classification accuracy on real-world dataset through optimization",
      ],
      tech: [
        "Python",
        "GANs",
        "Machine Learning",
        "Medical Imaging",
        "Cross-validation",
      ],
    },
    {
      title: "Website Development Intern",
      company: "Dave Surgical Company",
      location: "India",
      period: "August 2023",
      description:
        "Designed and developed responsive company website to enhance digital presence and user engagement. Focused on creating user-friendly interfaces and optimizing user experience.",
      achievements: [
        "Designed and launched responsive company website using Wix",
        "Increased user engagement within the first two months of launch",
        "Improved company digital presence and customer accessibility",
      ],
      tech: ["Wix", "Responsive Design", "Web Development", "UI/UX"],
    },
  ];

  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Bharati Vidyapeeth's College of Engineering",
      location: "Delhi, India",
      period: "2018 - 2022",
      grade: "CGPA: 8.35/10",
      highlights: [
        "Specialized in Artificial Intelligence and Machine Learning",
        "Published 2 research papers in conferences",
        "Active member of GFG Society",
      ],
    },
  ];

  const certifications = [
    {
      name: "Second Position - International Intel SA Hackathon",
      issuer: "Intel",
      date: "Fall 2024",
    },
    {
      name: "First Position - Best Project Award BVCOE 2024",
      issuer: "Summer Training Program",
      date: "2024",
    },
    {
      name: "Intel Digital Readiness Program (AI, ML & DL using Python)",
      issuer: "Intel",
      date: "August 2024",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Experience & Education
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            My professional journey and academic background
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
            Professional Experience
          </h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {index !== experiences.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-600"></div>
                )}
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {index + 1}
                  </div>
                  <div className="flex-1 bg-slate-800/50 p-6 rounded-xl border border-slate-700/50">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-white mb-1">
                          {exp.title}
                        </h4>
                        <div className="text-blue-400 font-medium mb-2">
                          {exp.company}
                        </div>
                      </div>
                      <div className="flex flex-col md:items-end space-y-1">
                        <div className="flex items-center text-gray-400 text-sm">
                          <Calendar size={16} className="mr-2" />
                          {exp.period}
                        </div>
                        <div className="flex items-center text-gray-400 text-sm">
                          <MapPin size={16} className="mr-2" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4">{exp.description}</p>

                    <div className="mb-4">
                      <h5 className="text-white font-medium mb-2">
                        Key Achievements:
                      </h5>
                      <ul className="list-disc list-inside text-gray-400 space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex}>{achievement}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-slate-700/50 text-blue-300 px-3 py-1 rounded-md text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
            <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
            Education
          </h3>
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h4 className="text-xl font-semibold text-white mb-1">
                    {edu.degree}
                  </h4>
                  <div className="text-blue-400 font-medium mb-2">
                    {edu.institution}
                  </div>
                  <div className="text-gray-400">{edu.grade}</div>
                </div>
                <div className="flex flex-col md:items-end space-y-1">
                  <div className="flex items-center text-gray-400 text-sm">
                    <Calendar size={16} className="mr-2" />
                    {edu.period}
                  </div>
                  <div className="flex items-center text-gray-400 text-sm">
                    <MapPin size={16} className="mr-2" />
                    {edu.location}
                  </div>
                </div>
              </div>

              <div>
                <h5 className="text-white font-medium mb-2">Highlights:</h5>
                <ul className="list-disc list-inside text-gray-400 space-y-1">
                  {edu.highlights.map((highlight, hlIndex) => (
                    <li key={hlIndex}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Awards & Certifications */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
            Awards & Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-slate-600/50 transition-colors duration-300"
              >
                <div className="flex items-start mb-3">
                  <div className="flex-shrink-0">
                    <Award className="text-yellow-500 mr-3 mt-2" size={20} />
                  </div>
                  <h4 className="text-lg font-semibold text-white">
                    {cert.name}
                  </h4>
                </div>

                <div className="text-blue-400 font-medium mb-2">
                  {cert.issuer}
                </div>
                <div className="text-gray-400 text-sm">{cert.date}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
