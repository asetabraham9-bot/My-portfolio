import { Link } from 'react-router-dom';
import { Github, Linkedin, Facebook, Mail, Phone, MapPin, Star } from 'lucide-react';
import { Button } from './ui/button';

export default function Footer() {
  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/skills', label: 'Skills' },
    { path: '/education', label: 'Education' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section - Portfolio Intro */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">AA</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Asayehu Abraham</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Portfolio</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Need any help with your projects? Contact me through the platforms below.
            </p>
            <Button
              asChild
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              <a
                href="https://github.com/asayehuabraham"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Star className="h-4 w-4" />
                Star Me on GitHub
              </a>
            </Button>
          </div>

          {/* Middle Section - Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={scrollToTop}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Section - Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>Wolaita Sodo and Addis Ababa, Ethiopia</span>
              </li>
              <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a href="mailto:asetabraham9@gmail.com" className="hover:text-blue-600 dark:hover:text-blue-400">
                  asetabraham9@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span>+251 964 063 992</span>
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a
                href="https://github.com/asayehuabraham"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/asayehuabraham"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com/asayehuabraham"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="border-t mt-8 pt-6 text-center text-gray-600 dark:text-gray-400">
          <p>Made with ❤️ by Asayehu Abraham © {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
}
