import { motion } from 'motion/react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Link } from 'react-router-dom';
import {
  Brain,
  Settings,
  Eye,
  Users,
  Zap,
  Code2,
  Database,
  BookOpen,
  Award,
  Download,
  ArrowRight
} from 'lucide-react';

export default function About() {
  const strengths = [
    { icon: Brain, title: 'Problem Solving', color: 'text-blue-600' },
    { icon: Settings, title: 'System Design Thinking', color: 'text-purple-600' },
    { icon: Eye, title: 'Attention to Detail', color: 'text-green-600' },
    { icon: Users, title: 'Team Collaboration', color: 'text-orange-600' },
    { icon: Zap, title: 'Fast Learner', color: 'text-red-600' },
  ];

  const focusAreas = [
    { icon: Code2, title: 'Web Development', description: 'Building responsive and dynamic web applications' },
    { icon: Database, title: 'Backend Systems', description: 'Designing scalable server-side architectures' },
    { icon: Database, title: 'Database Design', description: 'Structuring efficient data storage solutions' },
    { icon: BookOpen, title: 'Software Engineering', description: 'Applying best practices and principles' },
  ];

  const timeline = [
    { year: '2023', event: 'Started Computer Engineering at Bahir Dar Institute of Technology', icon: '🎓' },
    { year: '2024', event: 'Built first web project and mastered React fundamentals', icon: '💻' },
    { year: '2025', event: 'Developed full systems (Exam system, E-commerce)', icon: '🚀' },
    { year: '2027', event: 'Preparing for graduation and career launch', icon: '🎯' },
  ];

  const interests = [
    'Coding & Problem Solving',
    'Learning New Technologies',
    'Machine Learning & AI',
    'Embedded Systems & Robotics',
    'Tech Innovation',
    'Reading Tech Blogs',
  ];

  return (
    <div className="min-h-screen">
      {/* Header Banner */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                I'm a Computer Engineering student passionate about building scalable systems
                and solving real-world problems through technology.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative w-64 h-64 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-8xl shadow-2xl">
                👨‍💻
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Personal Introduction */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6 text-center">Hello, I'm Asayehu Abraham</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-400 text-lg">
              <p>
                I'm currently a Computer Engineering student at Bahir Dar Institute of Technology,
                where I'm developing a comprehensive skill set in modern software development and
                system design. My passion lies in creating solutions that bridge the gap between
                complex technical challenges and user-friendly applications.
              </p>
              <p>
                I specialize in full-stack web development, mobile application development, system
                design, network installation and configuration, and computer hardware maintenance.
                My approach to development is grounded in writing clean, efficient code and
                building systems that scale.
              </p>
              <p>
                What drives me is the opportunity to solve real-world problems through technology.
                Whether it's optimizing a database query, designing a user interface, or
                architecting a distributed system, I find joy in the process of turning ideas into
                working solutions that make a meaningful impact.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Career Objective */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <Award className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">My Mission</h2>
            <p className="text-xl leading-relaxed">
              "My goal is to design and develop efficient, scalable, and user-centered systems
              that solve real-world challenges and create meaningful impact."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Strengths */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Strengths</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              What I bring to every project
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {strengths.map((strength, index) => (
              <motion.div
                key={strength.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center h-full hover:shadow-lg transition-shadow">
                  <strength.icon className={`h-12 w-12 mx-auto mb-4 ${strength.color}`} />
                  <h3 className="font-bold">{strength.title}</h3>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Focus Areas */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Focus Areas</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {focusAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <area.icon className="h-10 w-10 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold mb-2">{area.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{area.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* My Journey */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Journey</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Key milestones in my development career
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-4 mb-8 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                    {item.icon}
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="w-0.5 h-full bg-gradient-to-b from-blue-600 to-purple-600 mt-2"></div>
                  )}
                </div>
                <Card className="flex-1 p-6 mb-4">
                  <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-sm font-semibold mb-2">
                    {item.year}
                  </span>
                  <p className="text-lg">{item.event}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Interests */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Personal Interests</h2>
            <div className="flex flex-wrap gap-4 justify-center">
              {interests.map((interest, index) => (
                <motion.span
                  key={interest}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="px-6 py-3 bg-white dark:bg-gray-900 rounded-full shadow-sm hover:shadow-md transition-shadow"
                >
                  {interest}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Download CV Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 text-center">
              <Download className="h-16 w-16 mx-auto mb-4 text-blue-600" />
              <h2 className="text-2xl font-bold mb-4">Want more details about my experience and skills?</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Download my comprehensive CV to learn more about my background, projects, and qualifications.
              </p>
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
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
              Let's connect and build something impactful together
            </h2>
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Button asChild size="lg" variant="secondary">
                <Link to="/contact">
                  Contact Me
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                <Link to="/projects">View Projects</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
