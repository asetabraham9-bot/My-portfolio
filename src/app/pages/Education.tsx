import { motion } from 'motion/react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Link } from 'react-router-dom';
import {
  GraduationCap,
  Award,
  ExternalLink,
  BookOpen,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

export default function Education() {
  const focusAreas = [
    'Software Engineering',
    'Web Development',
    'Systems Design',
    'Network Design and Installation',
  ];

  const academicProjects = [
    {
      title: 'Online Exam System',
      description: 'Comprehensive examination management platform with real-time monitoring',
      tech: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    },
    {
      title: 'E-commerce System (MyShop)',
      description: 'Full-featured online shopping platform with payment integration',
      tech: ['React', 'Express', 'MySQL', 'Stripe'],
    },
    {
      title: 'Espotify Music Platform',
      description: 'Music streaming service with playlist and recommendation features',
      tech: ['React', 'Node.js', 'MongoDB', 'AWS S3'],
    },
    {
      title: 'Condominium Management System',
      description: 'Property management solution for residential complexes',
      tech: ['React', 'Java', 'PostgreSQL'],
    },
  ];

  const certificates = [
    {
      title: 'Network Devices and Initial Configurations',
      platform: 'Cisco',
      date: '2024',
      description: 'Comprehensive training on network device setup and configuration',
    },
    {
      title: 'Introduction to Cyber Security',
      platform: 'Cisco',
      date: '2024',
      description: 'Foundational knowledge in cybersecurity principles and practices',
    },
    {
      title: 'Computer Hardware Basics',
      platform: 'Cisco',
      date: '2024',
      description: 'Understanding of computer hardware components and troubleshooting',
    },
    {
      title: 'Financial Accounting',
      platform: 'Sylor University',
      date: '2024',
      description: 'Principles of financial accounting and business management',
    },
    {
      title: 'Digital Marketing',
      platform: 'Sylor University',
      date: '2024',
      description: 'Strategies and tools for effective digital marketing',
    },
    {
      title: 'Resource Management',
      platform: 'Ethiopia MoE',
      date: '2023',
      description: 'Effective management of resources in educational settings',
    },
    {
      title: 'Online Safety',
      platform: 'Ethiopia MoE',
      date: '2023',
      description: 'Best practices for maintaining safety in online environments',
    },
    {
      title: 'Android Developer Fundamentals',
      platform: 'Udacity (Ethio Coders)',
      date: '2024',
      description: 'Building Android applications using modern development practices',
    },
    {
      title: 'Artificial Intelligence Fundamentals',
      platform: 'Udacity (Ethio Coders)',
      date: '2024',
      description: 'Introduction to AI concepts and machine learning basics',
    },
    {
      title: 'Programming Fundamentals',
      platform: 'Udacity (Ethio Coders)',
      date: '2024',
      description: 'Core programming concepts and problem-solving techniques',
    },
    {
      title: 'Data Analysis Fundamentals',
      platform: 'Udacity (Ethio Coders)',
      date: '2024',
      description: 'Data processing, visualization, and statistical analysis',
    },
  ];

  const learningProgress = [
    'Advanced React',
    'System Design',
    'MERN Stack',
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Education & Certifications</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              My academic foundation and continuous learning journey in technology
            </p>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Academic Background</h2>

            <Card className="p-8 hover:shadow-xl transition-shadow">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                    <GraduationCap className="h-12 w-12 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">
                    Bachelor of Science in Computer Engineering
                  </h3>
                  <div className="flex items-center gap-2 mb-4">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f0/Bahir_Dar_University_logo.png/220px-Bahir_Dar_University_logo.png"
                      alt="BDU Logo"
                      className="w-8 h-8 object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                    <div>
                      <p className="font-semibold text-lg">
                        Bahir Dar Institute of Technology
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">
                        Bahir Dar University, Ethiopia
                      </p>
                    </div>
                  </div>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold mb-6">
                    2023 - Expected Graduation 2027
                  </p>

                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Focus Areas:</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {focusAreas.map((area, index) => (
                        <motion.div
                          key={area}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center gap-2"
                        >
                          <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                          <span>{area}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Academic Projects */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Academic Projects</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-12">
              Connecting education to real-world applications
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {academicProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-3 mb-4">
                      <BookOpen className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                          {project.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Certifications</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-12">
              Continuous learning and professional development
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {certificates.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                    <Award className="h-10 w-10 text-blue-600 mb-4" />
                    <h3 className="font-bold mb-2">{cert.title}</h3>
                    <p className="text-sm text-blue-600 dark:text-blue-400 mb-2">
                      {cert.platform}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                      {cert.date}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      {cert.description}
                    </p>
                    <Button size="sm" variant="outline" className="w-full">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Certificate
                    </Button>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Learning Progress */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Ongoing Learning</h2>
            <Card className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
              <p className="text-lg mb-6 text-center">
                Currently expanding knowledge in:
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                {learningProgress.map((topic, index) => (
                  <motion.div
                    key={topic}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="px-6 py-3 bg-white dark:bg-gray-900 rounded-full shadow-sm font-semibold"
                  >
                    {topic}
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Always learning, always building
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's create something impactful together
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/projects">
                  View Projects
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                <Link to="/contact">Contact Me</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
