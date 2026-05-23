import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import {
  Code2,
  Database,
  Globe,
  Network,
  Github,
  ExternalLink,
  Mail,
  Linkedin,
  GraduationCap,
  ArrowRight
} from 'lucide-react';

export default function Home() {
  const [currentTitle, setCurrentTitle] = useState(0);
  const titles = [
    'Computer Engineer',
    'Full Stack Developer',
    'System Designer',
    'Network Engineer'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const skills = [
    { name: 'HTML', category: 'Frontend' },
    { name: 'CSS', category: 'Frontend' },
    { name: 'Tailwind CSS', category: 'Frontend' },
    { name: 'JavaScript', category: 'Frontend' },
    { name: 'React', category: 'Frontend' },
    { name: 'PHP', category: 'Backend' },
    { name: 'Java', category: 'Backend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Express', category: 'Backend' },
    { name: 'Python', category: 'Backend' },
    { name: 'MySQL', category: 'Database' },
    { name: 'MongoDB', category: 'Database' },
  ];

  const featuredProjects = [
    {
      title: 'Online Exam System',
      description: 'A comprehensive examination management system with real-time monitoring and automated grading.',
      image: '🎓',
      tech: ['React', 'PHP', 'MySQL'],
      github: '#',
    },
    {
      title: 'MyShop E-commerce',
      description: 'Full-featured e-commerce platform with payment integration and inventory management.',
      image: '🛒',
      tech: ['React', 'Express', 'MySQL'],
      github: '#',
    },
    {
      title: 'Espotify Music Platform',
      description: 'Music streaming platform with playlist management and recommendation system.',
      image: '🎵',
      tech: ['React', 'Node.js', 'MongoDB'],
      github: '#',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                  Asayehu Abraham
                </span>
              </h1>
              <div className="h-16 md:h-20 mb-6">
                <motion.h2
                  key={currentTitle}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.8 }}
                  className="text-2xl md:text-3xl lg:text-4xl text-gray-700 dark:text-gray-300"
                >
                  {titles[currentTitle]}
                </motion.h2>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
                Passionate Computer Engineering student specializing in building scalable systems
                and solving real-world problems through innovative technology solutions.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  <Link to="/projects">
                    <span>My Works</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/contact">Hire Me</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="hidden lg:flex justify-center"
            >
              <div className="relative w-full max-w-md aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full blur-2xl opacity-20"></div>
                <div className="relative w-full h-
                full flex items-center justify-center text-9xl">
                  💻
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              I'm a Computer Engineering student at Bahir Dar Institute of Technology,
              passionate about web development, mobile applications, systems design, and network infrastructure.
              My focus is on creating efficient, scalable solutions that make a real impact.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <Code2 className="h-5 w-5 text-blue-600" />
                <span>Web App Development</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <Globe className="h-5 w-5 text-purple-600" />
                <span>Mobile App Development</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <Database className="h-5 w-5 text-green-600" />
                <span>Systems Design</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                <Network className="h-5 w-5 text-orange-600" />
                <span>Network Configuration</span>
              </div>
            </div>
            <Button asChild variant="outline">
              <Link to="/about">Read More</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              A comprehensive toolkit for building modern applications
            </p>
          </motion.div>

          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <p className="font-semibold">{skill.name}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{skill.category}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button asChild variant="outline">
              <Link to="/skills">View All Skills</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Showcasing my best work and real-world applications
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full">
                  <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 flex items-center justify-center text-6xl">
                    {project.image}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                      <Button size="sm" variant="outline" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button asChild variant="outline">
              <Link to="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Education Preview */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
            </div>
            <Card className="p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <GraduationCap className="h-8 w-8 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Bachelor of Science in Computer Engineering</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">
                    Bahir Dar Institute of Technology, Bahir Dar University
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    2023 - Expected 2027
                  </p>
                </div>
              </div>
            </Card>
            <div className="text-center mt-8">
              <Button asChild variant="outline">
                <Link to="/education">View Details</Link>
              </Button>
            </div>
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
              Let's build something impactful together
            </h2>
            <p className="text-xl mb-8 opacity-90">
              I'm always open to discussing new projects and opportunities
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/contact">Contact Me</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                <Link to="/contact">Hire Me</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Preview */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Get In Touch</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6">
                <Mail className="h-8 w-8 mx-auto mb-4 text-blue-600" />
                <h3 className="font-bold mb-2">Email</h3>
                <a href="mailto:asetabraham9@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">
                  asetabraham9@gmail.com
                </a>
              </Card>
              <Card className="p-6">
                <Github className="h-8 w-8 mx-auto mb-4 text-blue-600" />
                <h3 className="font-bold mb-2">GitHub</h3>
                <a href="https://github.com/asayehuabraham" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">
                  @asayehuabraham
                </a>
              </Card>
              <Card className="p-6">
                <Linkedin className="h-8 w-8 mx-auto mb-4 text-blue-600" />
                <h3 className="font-bold mb-2">LinkedIn</h3>
                <a href="https://linkedin.com/in/asayehuabraham" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">
                  @asayehuabraham
                </a>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
