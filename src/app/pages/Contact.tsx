import { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { toast } from 'sonner';
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Facebook,
  Send,
  MessageSquare
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success('Message sent successfully! I will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setLoading(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'asetabraham9@gmail.com',
      href: 'mailto:asetabraham9@gmail.com',
      color: 'text-blue-600',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+251 964 063 992',
      href: 'tel:+251964063992',
      color: 'text-green-600',
    },
    {
      icon: Phone,
      title: 'Phone (Alt)',
      value: '+251 725 013 676',
      href: 'tel:+251725013676',
      color: 'text-green-600',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Wolaita Sodo & Addis Ababa, Ethiopia',
      href: '#',
      color: 'text-red-600',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      href: 'https://github.com/asayehuabraham',
      color: 'hover:text-gray-900 dark:hover:text-gray-100',
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/asayehuabraham',
      color: 'hover:text-blue-600',
    },
    {
      icon: Send,
      name: 'Telegram',
      href: 'https://t.me/asayehuabraham',
      color: 'hover:text-blue-500',
    },
    {
      icon: Facebook,
      name: 'Facebook',
      href: 'https://facebook.com/asayehuabraham',
      color: 'hover:text-blue-700',
    },
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
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Me</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Have a project, idea, or opportunity? Let's connect and discuss how we can work together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Left Side - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be
                  part of your vision. Feel free to reach out through any of the channels below.
                </p>
              </div>

              {/* Contact Information Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="p-4 hover:shadow-md transition-shadow">
                      <a
                        href={info.href}
                        className="flex items-center gap-4 group"
                      >
                        <div className={`p-3 rounded-lg bg-gray-100 dark:bg-gray-800 ${info.color}`}>
                          <info.icon className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-gray-500 dark:text-gray-400">{info.title}</p>
                          <p className="font-semibold group-hover:text-blue-600 transition-colors">
                            {info.value}
                          </p>
                        </div>
                      </a>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-bold mb-4">Connect With Me</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className={`p-3 rounded-lg bg-gray-100 dark:bg-gray-800 transition-colors ${social.color}`}
                      title={social.name}
                    >
                      <social.icon className="h-6 w-6" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Response Time Note */}
              <Card className="p-4 bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
                <div className="flex items-start gap-3">
                  <MessageSquare className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-blue-900 dark:text-blue-400">
                      Quick Response
                    </p>
                    <p className="text-sm text-blue-700 dark:text-blue-300">
                      I usually respond within 24 hours
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project or inquiry..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="animate-spin mr-2">⏳</span>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section (Optional) */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Location</h2>
            <Card className="overflow-hidden">
              <div className="h-96 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 mx-auto mb-4 text-blue-600" />
                  <h3 className="text-2xl font-bold mb-2">Based in Ethiopia</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Wolaita Sodo & Addis Ababa
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mt-4">
                    Available for remote work and on-site projects in Ethiopia
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Whether it's a project, collaboration, or just a conversation — I'm open
            </h2>
            <p className="text-xl opacity-90">
              Let's create something amazing together!
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
