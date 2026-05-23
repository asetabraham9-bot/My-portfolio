# Asayehu Abraham - Portfolio Website

A modern, responsive portfolio website showcasing my projects, skills, and experience as a Computer Engineering student.

## 🚀 Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Dark/Light Mode**: Toggle between themes with persistent preference
- **Multi-language Support**: English and Amharic language options
- **Smooth Animations**: Motion animations for enhanced user experience
- **Interactive Navigation**: Sticky navbar with active route highlighting
- **Project Showcase**: Detailed project cards with tech stack and links
- **Skills Display**: Categorized skills with proficiency levels
- **Contact Form**: Functional contact form with validation
- **Education Timeline**: Visual timeline of academic journey
- **Certifications**: Comprehensive certification showcase

## 🛠️ Tech Stack

### Frontend
- **React 18.3.1** - UI library
- **TypeScript** - Type-safe development
- **React Router DOM 6.28.1** - Client-side routing
- **Tailwind CSS 4.1.12** - Utility-first styling
- **Motion (Framer Motion) 12.23.24** - Animations
- **Lucide React 0.487.0** - Icon library
- **Sonner** - Toast notifications
- **Radix UI** - Accessible component primitives

### Development Tools
- **Vite 6.3.5** - Build tool and dev server
- **pnpm** - Package manager

## 📁 Project Structure

```
/workspaces/default/code/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── ui/           # Reusable UI components
│   │   │   ├── Navbar.tsx    # Navigation bar
│   │   │   └── Footer.tsx    # Footer component
│   │   ├── pages/
│   │   │   ├── Home.tsx      # Landing page
│   │   │   ├── About.tsx     # About page
│   │   │   ├── Skills.tsx    # Skills page
│   │   │   ├── Education.tsx # Education page
│   │   │   ├── Projects.tsx  # Projects page
│   │   │   └── Contact.tsx   # Contact page
│   │   └── App.tsx           # Main app component
│   └── styles/
│       ├── theme.css         # Theme variables
│       ├── tailwind.css      # Tailwind imports
│       └── fonts.css         # Font imports
├── portfoliodb.sql           # Database schema (for future backend)
├── package.json
└── README.md
```

## 🎨 Pages

1. **Home** - Hero section, about preview, skills preview, featured projects
2. **About** - Personal introduction, career objective, strengths, journey timeline
3. **Skills** - Categorized technical skills with proficiency levels
4. **Education** - Academic background, certifications, ongoing learning
5. **Projects** - Detailed project showcase with tech stacks
6. **Contact** - Contact form and social media links

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- pnpm (or npm/yarn)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/asayehuabraham/portfolio.git
cd My-portfolio
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm dev
```

The site will be available at the preview URL provided by the development server.

### Build for Production

```bash
pnpm build
```

## 🎨 Customization

### Theme Colors
Edit `/src/styles/theme.css` to customize the color scheme and theme variables.

### Content
Update the content in each page component:
- Personal info in `/src/app/pages/About.tsx`
- Skills in `/src/app/pages/Skills.tsx`
- Projects in `/src/app/pages/Projects.tsx`
- Education in `/src/app/pages/Education.tsx`

### Contact Information
Update contact details in:
- `/src/app/components/Footer.tsx`
- `/src/app/pages/Contact.tsx`

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔮 Future Enhancements

- [ ] Backend integration with Node.js/Express
- [ ] Database connection (MySQL schema provided in `portfoliodb.sql`)
- [ ] Blog functionality
- [ ] Admin dashboard for content management
- [ ] Newsletter subscription
- [ ] Analytics integration
- [ ] SEO optimization
- [ ] Performance optimization
- [ ] PWA support

## 🗄️ Database Schema

A complete database schema is provided in `portfoliodb.sql` for future backend integration. It includes tables for:
- Users/Admin
- Projects
- Technologies
- Education
- Certifications
- Contact Messages
- Blog Posts
- Analytics
- Newsletter Subscribers

## 📧 Contact

- **Email**: asetabraham9@gmail.com
- **Phone**: +251 964 063 992 / +251 725 013 676
- **Location**: Wolaita Sodo & Addis Ababa, Ethiopia
- **GitHub**: [github.com/asayehuabraham](https://github.com/asayehuabraham)
- **LinkedIn**: [linkedin.com/in/asayehuabraham](https://linkedin.com/in/asayehuabraham)

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Built with React and TypeScript
- Styled with Tailwind CSS
- Animated with Motion (Framer Motion)
- Icons from Lucide React
- UI components from Radix UI

---

Made with ❤️ by Asayehu Abraham
