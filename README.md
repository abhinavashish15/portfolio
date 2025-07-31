# Abhinav Ashish - Portfolio

A modern, interactive portfolio website showcasing my work as a Software Developer specializing in AI integrations and scalable web applications. Built with Next.js 14, TypeScript, and enhanced with AI-powered chat functionality.

## ✨ Features

- 🎨 **Modern Design**: Clean, responsive design with smooth animations
- 🤖 **AI Chat Assistant**: Interactive AI-powered chat using CopilotKit
- 📱 **Fully Responsive**: Optimized for all devices and screen sizes
- ⚡ **Performance Optimized**: Built with Next.js 14 App Router for optimal performance
- 🌙 **Dark Mode**: Automatic dark/light theme support
- 🎭 **Smooth Animations**: Powered by Framer Motion
- 📝 **TypeScript**: Full type safety throughout the application
- 🎯 **SEO Optimized**: Meta tags, structured data, and performance metrics

## 🛠️ Tech Stack

### Core Technologies
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

### AI Integration
- **CopilotKit**: AI-powered chat functionality
- **React Core**: `@copilotkit/react-core`
- **UI Components**: `@copilotkit/react-ui`
- **Textarea**: `@copilotkit/react-textarea`

### Development Tools
- **Linting**: ESLint with Next.js configuration
- **Package Manager**: npm
- **Version Control**: Git

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**:
```bash
git clone <your-repo-url>
cd portfolio-next
```

2. **Install dependencies**:
```bash
npm install
```

3. **Run the development server**:
```bash
npm run dev
```

4. **Open your browser** and navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
portfolio-next/
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── api/
│   │   └── copilotkit/
│   │       └── route.ts
│   ├── components/
│   │   ├── CopilotChat.tsx
│   │   ├── CopilotKitProvider.tsx
│   │   ├── Navbar.tsx
│   │   └── ProfileImage.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── data/
│   │   └── resume.ts
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── projects/
│   │   └── page.tsx
│   └── skills/
│       └── page.tsx
├── public/
│   ├── profile-image.jpeg
│   ├── projects-snaps/
│   │   └── sorting-algorithm.png
│   └── resume.pdf
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## 🎨 Key Components

### Core Pages
- **Home**: Hero section with introduction and call-to-action
- **About**: Personal background and experience
- **Skills**: Technical and soft skills showcase
- **Projects**: Portfolio of work and projects
- **Contact**: Contact information and form

### Interactive Features
- **AI Chat Assistant**: Real-time AI-powered chat using CopilotKit
- **Responsive Navigation**: Smooth navigation with mobile optimization
- **Profile Image**: Professional headshot with animations
- **Social Links**: Integration with LinkedIn, GitHub, and other platforms

## 🔧 Customization

### Personal Information

Update the following files with your information:

1. **`app/layout.tsx`**: Update metadata (title, description, keywords)
2. **`app/page.tsx`**: Replace "Abhinav Ashish" with your name
3. **`app/data/resume.ts`**: Update all personal information, experience, and projects
4. **`app/components/Navbar.tsx`**: Update navigation links and branding

### Styling

The project uses Tailwind CSS with custom configurations:

- **Colors**: Custom monochrome color scheme in `tailwind.config.js`
- **Animations**: Custom animation classes for smooth transitions
- **Typography**: Inter font with optimized font loading

### Content Management

All content is managed through:

- **`app/data/resume.ts`**: Centralized data for personal information, experience, skills, and projects
- **Individual page components**: Each page can be customized independently
- **Public assets**: Images and documents in the `public/` directory

## 🤖 AI Chat Feature

The portfolio includes an AI-powered chat assistant built with CopilotKit:

- **Real-time responses**: AI-powered conversation about your work and experience
- **Contextual information**: Chat can provide details about your projects, skills, and background
- **Professional interface**: Clean, modern chat UI with smooth animations
- **Mobile responsive**: Works seamlessly on all devices

## 📱 Responsive Design

The portfolio is fully responsive with:

- **Mobile-first approach**: Optimized for mobile devices
- **Tablet support**: Responsive layouts for tablet screens
- **Desktop optimization**: Enhanced experience on larger screens
- **Touch-friendly**: Optimized for touch interactions

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with zero configuration

### Other Platforms

The project can be deployed to any platform that supports Next.js:

- **Netlify**: Automatic deployments from Git
- **Railway**: Simple deployment with environment variables
- **DigitalOcean App Platform**: Scalable cloud deployment
- **AWS Amplify**: Enterprise-grade hosting

## 📊 Performance

This portfolio is optimized for performance with:

- **Next.js 14 App Router**: Improved performance and SEO
- **Image optimization**: Automatic image optimization
- **Font optimization**: Google Fonts with display swap
- **Bundle optimization**: Minimal bundle size with tree shaking
- **Lazy loading**: Components load only when needed

## 🔍 SEO Features

- **Meta tags**: Comprehensive meta information for social sharing
- **Structured data**: JSON-LD structured data for search engines
- **Performance metrics**: Core Web Vitals optimization
- **Accessibility**: ARIA labels and semantic HTML

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

If you have any questions or need help with customization:

- Open an issue on GitHub
- Check the documentation in the code comments
- Review the TypeScript types for guidance

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS** 