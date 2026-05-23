import { motion } from 'motion/react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Github, ExternalLink, Star, Calendar } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Online Exam System',
      description: 'A comprehensive examination management system featuring real-time monitoring, automated grading, and detailed analytics. Supports multiple question types and secure exam delivery.',
      image: '🎓',
      date: 'March 2025',
      tech: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Express', 'JWT'],
      features: [
        'Real-time exam monitoring',
        'Automated grading system',
        'Question bank management',
        'Student analytics dashboard',
      ],
      github: '#',
      demo: '#',
    },
    {
      title: 'MyShop E-commerce Platform',
      description: 'Full-featured e-commerce solution with payment integration, inventory management, and order tracking. Includes admin dashboard for product and order management.',
      image: '🛒',
      date: 'January 2025',
      tech: ['React', 'Express', 'MySQL', 'Stripe', 'Redux', 'Tailwind CSS'],
      features: [
        'Secure payment integration',
        'Inventory management',
        'Order tracking system',
        'Admin dashboard',
      ],
      github: '#',
      demo: '#',
    },
    {
      title: 'Espotify Music Platform',
      description: 'Music streaming platform with playlist management, recommendation system, and social features. Users can discover, share, and enjoy music seamlessly.',
      image: '🎵',
      date: 'November 2024',
      tech: ['React', 'Node.js', 'MongoDB', 'AWS S3', 'Express', 'WebAudio API'],
      features: [
        'Music streaming & playback',
        'Playlist management',
        'Recommendation engine',
        'Social sharing features',
      ],
      github: '#',
      demo: '#',
    },
    {
      title: 'Condominium Management System',
      description: 'Property management solution for residential complexes featuring tenant management, maintenance tracking, billing, and communication tools.',
      image: '🏢',
      date: 'September 2024',
      tech: ['React', 'Java', 'PostgreSQL', 'Spring Boot', 'Material-UI'],
      features: [
        'Tenant management',
        'Maintenance tracking',
        'Billing & payments',
        'Communication portal',
      ],
      github: '#',
      demo: '#',
    },
    {
      title: 'Task Management System',
      description: 'Collaborative task management tool with team features, project boards, and progress tracking. Helps teams stay organized and productive.',
      image: '📋',
      date: 'July 2024',
      tech: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Redux'],
      features: [
        'Kanban-style boards',
        'Team collaboration',
        'Real-time updates',
        'Progress analytics',
      ],
      github: '#',
      demo: '#',
    },
    {
      title: 'Weather Forecast App',
      description: 'Beautiful weather application with detailed forecasts, location-based weather data, and interactive maps. Provides accurate weather information in real-time.',
      image: '🌤️',
      date: 'May 2024',
      tech: ['React', 'OpenWeather API', 'Chart.js', 'Tailwind CSS'],
      features: [
        '7-day forecast',
        'Location-based weather',
        'Interactive weather maps',
        'Weather alerts',
      ],
      github: '#',
      demo: '#',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header with Intro */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Projects & Experiences</h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                I build scalable applications that solve real-world problems. Each project showcases
                my commitment to clean code, user experience, and modern development practices.
                All my work is available on GitHub, and I'm always open to collaboration.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                <a
                  href="https://github.com/asayehuabraham"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Star className="h-5 w-5" />
                  Star Me on GitHub
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="hidden lg:flex justify-center"
            >
              <div className="relative w-full max-w-md aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl blur-2xl opacity-20"></div>
                <div className="relative w-full h-full flex items-center justify-center text-9xl">
                  🚀
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-shadow h-full flex flex-col">
                  {/* Project Image/Icon */}
                  <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 flex items-center justify-center text-7xl relative">
                    {project.image}
                    <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 bg-white/90 dark:bg-gray-900/90 rounded-full text-sm">
                      <Calendar className="h-3 w-3" />
                      <span className="text-xs">{project.date}</span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 flex-1">
                      {project.description}
                    </p>

                    {/* Key Features */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold mb-2">Key Features:</h4>
                      <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        {project.features.slice(0, 3).map((feature) => (
                          <li key={feature} className="flex items-start gap-2">
                            <span className="text-blue-600 mt-1">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 mt-auto">
                      <Button size="sm" variant="outline" className="flex-1" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
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
        </div>
      </section>

      {/* GitHub Activity Note */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <Card className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
              <Github className="h-16 w-16 mx-auto mb-4 text-blue-600" />
              <h2 className="text-2xl font-bold mb-4">More Projects on GitHub</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                I have many more projects and open-source contributions available on my GitHub profile.
                Check them out to see my latest work and contributions to the developer community.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                <a
                  href="https://github.com/asayehuabraham"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github className="h-5 w-5" />
                  Visit My GitHub Profile
                  <ExternalLink className="h-4 w-4 ml-2" />
                </a>
              </Button>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Tech Stats */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Project Statistics</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="p-6 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">6+</div>
                <p className="text-gray-600 dark:text-gray-400">Projects Completed</p>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">10+</div>
                <p className="text-gray-600 dark:text-gray-400">Technologies Used</p>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">1000+</div>
                <p className="text-gray-600 dark:text-gray-400">Lines of Code</p>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">100%</div>
                <p className="text-gray-600 dark:text-gray-400">Commitment</p>
              </Card>
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
              Have a project in mind?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's work together to bring your ideas to life
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <a href="/contact">Contact Me</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white/10"
              >
                <a href="https://github.com/asayehuabraham" target="_blank" rel="noopener noreferrer">
                  View GitHub
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
