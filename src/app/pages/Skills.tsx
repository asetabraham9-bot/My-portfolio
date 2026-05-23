import { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Frontend', 'Backend', 'Database', 'Tools', 'Core Concepts'];

  const skills = [
    // Frontend
    { name: 'HTML', category: 'Frontend', level: 'Advanced', icon: '🌐' },
    { name: 'CSS', category: 'Frontend', level: 'Advanced', icon: '🎨' },
    { name: 'JavaScript', category: 'Frontend', level: 'Advanced', icon: '⚡' },
    { name: 'React', category: 'Frontend', level: 'Advanced', icon: '⚛️' },
    { name: 'React Native', category: 'Frontend', level: 'Intermediate', icon: '📱' },
    { name: 'Bootstrap', category: 'Frontend', level: 'Advanced', icon: '🅱️' },
    { name: 'Tailwind CSS', category: 'Frontend', level: 'Advanced', icon: '💨' },

    // Backend
    { name: 'PHP', category: 'Backend', level: 'Intermediate', icon: '🐘' },
    { name: 'Node.js', category: 'Backend', level: 'Advanced', icon: '🟢' },
    { name: 'Express.js', category: 'Backend', level: 'Advanced', icon: '🚂' },
    { name: 'Java', category: 'Backend', level: 'Intermediate', icon: '☕' },
    { name: 'Python', category: 'Backend', level: 'Beginner', icon: '🐍' },
    { name: 'REST APIs', category: 'Backend', level: 'Advanced', icon: '🔌' },

    // Database
    { name: 'MySQL', category: 'Database', level: 'Advanced', icon: '🐬' },
    { name: 'MongoDB', category: 'Database', level: 'Advanced', icon: '🍃' },
    { name: 'PostgreSQL', category: 'Database', level: 'Intermediate', icon: '🐘' },

    // Tools
    { name: 'Git', category: 'Tools', level: 'Advanced', icon: '📦' },
    { name: 'GitHub', category: 'Tools', level: 'Advanced', icon: '🐙' },
    { name: 'VS Code', category: 'Tools', level: 'Advanced', icon: '💻' },
    { name: 'IntelliJ', category: 'Tools', level: 'Intermediate', icon: '🧠' },

    // Core Concepts
    { name: 'Data Structures & Algorithms', category: 'Core Concepts', level: 'Advanced', icon: '🔢' },
    { name: 'System Design', category: 'Core Concepts', level: 'Intermediate', icon: '🏗️' },
    { name: 'Networking Fundamentals', category: 'Core Concepts', level: 'Advanced', icon: '🌐' },
    { name: 'Software Engineering', category: 'Core Concepts', level: 'Advanced', icon: '⚙️' },
    { name: 'Embedded Systems', category: 'Core Concepts', level: 'Intermediate', icon: '🔌' },
    { name: 'Network Analysis & Synthesis', category: 'Core Concepts', level: 'Intermediate', icon: '📊' },
    { name: 'Computer Architecture', category: 'Core Concepts', level: 'Advanced', icon: '🖥️' },
  ];

  const stackProficiency = [
    { name: 'JavaScript', level: 'Advanced', percentage: 90 },
    { name: 'React', level: 'Advanced', percentage: 90 },
    { name: 'Node.js', level: 'Advanced', percentage: 85 },
    { name: 'MERN Stack', level: 'Intermediate', percentage: 75 },
    { name: 'Java', level: 'Intermediate', percentage: 70 },
    { name: 'Python', level: 'Beginner', percentage: 50 },
  ];

  const projects = [
    'Online Exam System',
    'E-commerce Platform',
    'Music Streaming System',
    'Online Condominium MS',
  ];

  const filteredSkills = activeCategory === 'All'
    ? skills
    : skills.filter(skill => skill.category === activeCategory);

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Advanced':
        return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
      case 'Intermediate':
        return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400';
      case 'Beginner':
        return 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400';
      default:
        return 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400';
    }
  };

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Skills & Abilities</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A curated toolkit for building scalable, reliable, and user-focused systems
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Navigation */}
      <section className="py-8 bg-white dark:bg-gray-900 sticky top-16 z-40 border-b">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? 'default' : 'outline'}
                onClick={() => setActiveCategory(category)}
                className={activeCategory === category ? 'bg-gradient-to-r from-blue-600 to-purple-600' : ''}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Card className="p-6 text-center hover:shadow-lg transition-shadow h-full">
                  <div className="text-4xl mb-3">{skill.icon}</div>
                  <h3 className="font-bold mb-2">{skill.name}</h3>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs ${getLevelColor(skill.level)}`}>
                    {skill.level}
                  </span>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skill Proficiency */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Skill Proficiency</h2>
            <div className="space-y-6">
              {stackProficiency.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">{skill.name}</span>
                    <span className={`px-3 py-1 rounded-full text-sm ${getLevelColor(skill.level)}`}>
                      {skill.level}
                    </span>
                  </div>
                  <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Practical Application */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Practical Application</h2>
            <Card className="p-8">
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                These skills are applied in real-world projects such as:
              </p>
              <ul className="grid md:grid-cols-2 gap-4">
                {projects.map((project, index) => (
                  <motion.li
                    key={project}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                    <span className="text-lg">{project}</span>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-8 text-center">
                <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  <Link to="/projects">
                    View Projects
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Technology Categories Detail */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Technology Stack</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 text-blue-600">Frontend Development</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Building responsive UI with component-based architecture and modern frameworks
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• HTML5, CSS3, JavaScript (ES6+)</li>
                  <li>• React & React Native</li>
                  <li>• Tailwind CSS & Bootstrap</li>
                  <li>• Responsive Design</li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 text-purple-600">Backend Development</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Designing scalable server-side architectures with RESTful APIs
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Node.js & Express.js</li>
                  <li>• PHP & Java</li>
                  <li>• REST API Design</li>
                  <li>• Authentication & Security</li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 text-green-600">Database & Tools</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Structuring efficient data storage solutions and version control
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• MySQL & MongoDB</li>
                  <li>• PostgreSQL</li>
                  <li>• Git & GitHub</li>
                  <li>• VS Code & IntelliJ</li>
                </ul>
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
              Looking for someone who can turn ideas into working systems?
            </h2>
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Button asChild size="lg" variant="secondary">
                <Link to="/contact">
                  Contact Me
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                <Link to="/contact">Hire Me</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
