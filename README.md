# Amer Blboheath - Personal Portfolio Website

A modern, professional portfolio website for IT Helpdesk Analyst & Cybersecurity Professional, built with pure HTML, CSS, and JavaScript.

## 🚀 Features

### Design & UI
- **Modern Aesthetic**: Clean design with black, white, and blue accent colors
- **Professional Typography**: Space Grotesk for headings, Inter for body text
- **Fully Responsive**: Seamless experience across desktop, tablet, and mobile devices
- **Smooth Animations**: Hover effects, transitions, and interactive elements
- **Accessibility**: ARIA labels, semantic HTML, skip-to-content links

### Pages & Sections
- **Home**: Hero section with typing animation and social links
- **About**: Personal background, skills, and professional overview
- **Portfolio**: Showcases technical projects and achievements
- **Resume**: Detailed work experience and professional skills
- **Education**: Timeline of certifications and training (with zoom hover effects)
- **Blog**: Technical insights and professional learning journey
- **Contact**: Functional contact form with Formspree integration

### Technical Features
- **SEO Optimized**: Meta tags, Open Graph, Twitter Cards, and Schema.org markup
- **Contact Form**: Integrated with Formspree for email submissions
- **Google Fonts**: Space Grotesk and Inter loaded via CDN
- **Mobile Menu**: Responsive hamburger navigation
- **Form Validation**: Client-side validation for contact form
- **Clean Footer**: Copyright information without extra navigation
- **Timeline UI**: Interactive education timeline with hover zoom effects

## 📁 Structure

```
/
├── index.html             # Home page with hero and quick links
├── about.html             # About me section
├── portfolio.html         # Portfolio projects showcase
├── resume.html            # Professional resume and work history
├── education.html         # Education timeline with certifications
├── blog.html              # Blog posts and articles
├── contact.html           # Contact form (Formspree integration)
├── styles.css             # Complete stylesheet with CSS variables
├── script.js              # Interactive features and animations
├── Amer Blboheath Resume.pdf  # Downloadable resume
└── README.md              # Documentation (this file)
```

## 🎨 Design System

### Color Palette
```css
--primary-color: #000000;      /* Black */
--secondary-color: #ffffff;    /* White */
--accent-color: #0066ff;       /* Blue */
--accent-hover: #0052cc;       /* Darker Blue */
--accent-light: #e6f0ff;       /* Light Blue */
--text-primary: #1a1a1a;       /* Dark Gray */
--text-light: #666666;         /* Medium Gray */
--border-color: #e0e0e0;       /* Light Gray */
--background-light: #f9f9f9;   /* Off White */
```

### Typography
- **Headings**: Space Grotesk (400, 600, 700)
- **Body**: Inter (300, 400, 600)
- **System Fallbacks**: -apple-system, BlinkMacSystemFont, sans-serif

### Shadows
- Small: `0 2px 8px rgba(0, 0, 0, 0.06)`
- Medium: `0 4px 16px rgba(0, 0, 0, 0.08)`
- Large: `0 8px 32px rgba(0, 0, 0, 0.12)`
- Accent: `0 8px 24px rgba(0, 102, 255, 0.15)`

## 🛠️ Customization Guide

### Update Personal Information

1. **Contact Details** (`contact.html`):
   - Phone number, email, location
   - Social media links (LinkedIn, GitHub)

2. **Hero Section** (`index.html`):
   - Update typing animation text
   - Modify hero subtitle

3. **About Page** (`about.html`):
   - Edit bio and professional overview
   - Update skills and expertise

### Modify Colors

Edit CSS variables in `styles.css`:
```css
:root {
    --accent-color: #0066ff;  /* Change to your brand color */
    --accent-hover: #0052cc;  /* Darker shade */
}
```

### Customize Fonts

Update Google Fonts link in HTML files and CSS variables:
```css
--font-heading: 'Your Font', sans-serif;
--font-body: 'Your Body Font', sans-serif;
```

### Add Projects/Portfolio Items

Edit `portfolio.html` to add new projects:
```html
<div class="portfolio-card">
    <h3>Project Name</h3>
    <p>Description...</p>
</div>
```

### Update Contact Form

The contact form uses Formspree. To use your own:
1. Sign up at [Formspree.io](https://formspree.io)
2. Replace the form action URL in `contact.html`:
```html
<form action="https://formspree.io/f/YOUR-FORM-ID" method="POST">
```

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: 640px - 767px  
- **Small Mobile**: Below 640px

## ⚙️ JavaScript Features

The `script.js` file includes:
- Mobile hamburger menu toggle
- Smooth scroll behavior
- Typing animation for hero section
- Form validation and submission
- Scroll-triggered animations
- Mobile menu close on navigation

## 🌐 Browser Support

Fully compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🚀 Getting Started

1. **Clone the repository**:
```bash
git clone https://github.com/Amerblb/amerdev.git
```

2. **Open in browser**:
   - Simply open `index.html` in your web browser
   - No build process or dependencies required

3. **Customize**:
   - Update personal information in HTML files
   - Modify colors in `styles.css`
   - Add your projects and content

## 📋 Recent Updates

- ✅ Removed timeline vertical line in education section
- ✅ Added smooth zoom hover effect on education timeline circles
- ✅ Cleaned up footer (removed redundant navigation)
- ✅ Aligned "Let's Connect" and "Get in Touch" headings on contact page
- ✅ Improved responsive design and mobile experience
- ✅ Enhanced accessibility with ARIA labels

## 📄 License

Free to use and modify for personal or commercial projects.

## 📞 Contact

**Amer Blboheath**  
IT Helpdesk Analyst & Cybersecurity Professional

- 📧 Email: Blboheath@outlook.com
- 💼 LinkedIn: [linkedin.com/in/amerblboheath](https://www.linkedin.com/in/amerblboheath/)
- 🐙 GitHub: [github.com/Amerblb](https://github.com/Amerblb)
- 📍 Location: Toronto, Ontario

---

Built with ❤️ using HTML, CSS, and JavaScript