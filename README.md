# Delta Labs - Freelance Portfolio Website

A modern, responsive portfolio website built with React and Vite, featuring an interactive contact form with EmailJS integration.

## 🚀 Features

- ⚡ Fast development with Vite
- ⚛️ React 19 with modern hooks
- 🎨 SCSS for styling with modular components
- 📧 EmailJS integration for contact form
- 🎯 React Router for navigation
- 📱 Fully responsive design
- ✨ GSAP animations
- 🎭 Smooth page transitions

## Deployed Link
[Link](https://delta-labs-freelance.pages.dev/)

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- EmailJS account (for contact form functionality)

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/moonknight324/DeltaLabs_Freelance.git
cd Delta_Labs_Freelance
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
# Copy the example env file
cp example.env .env

# Edit .env and add your EmailJS credentials
```

4. Configure EmailJS (see detailed guide below)

5. Start the development server:
```bash
npm run dev
```

The app will open at `http://localhost:5173`

## 📧 EmailJS Setup

The contact form uses EmailJS to send emails. Follow these steps to configure it:

### Quick Setup

1. **Create EmailJS Account**: Go to [EmailJS](https://www.emailjs.com/) and sign up
2. **Add Email Service**: Connect your email provider (Gmail, Outlook, etc.)
3. **Create Email Template**: Set up a template with the required variables
4. **Get Credentials**: Copy your Service ID, Template ID, and Public Key
5. **Update .env file**: Add your credentials to the `.env` file

### Detailed Instructions

For detailed step-by-step instructions, see [EMAILJS_SETUP.md](./EMAILJS_SETUP.md)

### Environment Variables

Create a `.env` file in the root directory with:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

### Email Template Variables

Make sure your EmailJS template includes these variables:
- `{{from_name}}` - Sender's name and company
- `{{from_email}}` - Sender's email
- `{{phone}}` - Sender's phone number
- `{{message}}` - The project description
- `{{to_name}}` - Your company name

## 🏗️ Project Structure

```
Delta_Labs_Freelance/
├── src/
│   ├── components/       # React components
│   │   └── Landing/      # Landing page components
│   │       ├── ContactForm.jsx    # Contact form with EmailJS
│   │       ├── AnimatedNavbar.jsx
│   │       ├── ClientSection.jsx
│   │       └── ...
│   ├── layout/          # Layout components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── MainLayout.jsx
│   ├── pages/           # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   └── NotFound.jsx
│   ├── routes/          # Routing configuration
│   ├── styles/          # SCSS styles
│   │   ├── components/  # Component-specific styles
│   │   ├── layouts/     # Layout styles
│   │   └── main.scss    # Main stylesheet
│   ├── context/         # React Context
│   ├── hooks/           # Custom hooks
│   ├── services/        # API services
│   ├── utils/           # Utility functions
│   └── assets/          # Images and static assets
├── public/              # Public static files
├── .env                 # Environment variables (create this)
├── example.env          # Example environment variables
└── package.json         # Dependencies
```

## 🎨 Available Scripts

### Development
```bash
npm run dev
```
Starts the development server with hot module replacement

### Build
```bash
npm run build
```
Creates an optimized production build

### Preview
```bash
npm run preview
```
Preview the production build locally

### Lint
```bash
npm run lint
```
Run ESLint to check code quality

## 🔧 Technologies Used

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **EmailJS** - Email service for contact form
- **SCSS** - CSS preprocessor
- **GSAP** - Animation library
- **Axios** - HTTP client
- **React Icons** - Icon library

## 📝 Contact Form Features

The contact form includes:
- ✅ Real-time form validation
- ✅ Loading states during submission
- ✅ Success/error notifications
- ✅ Auto-close after successful submission
- ✅ Responsive design
- ✅ Accessibility features
- ✅ Email sending via EmailJS

### Form Fields
- Name & Company
- Email (with validation)
- Phone Number
- Project Description

## 🎭 Components Overview

### ContactForm Component
Located at `src/components/Landing/ContactForm.jsx`

**Props:**
- `isOpen` (boolean) - Controls form visibility
- `onClose` (function) - Callback when form closes

**Features:**
- Slide-in animation from right
- Form validation
- EmailJS integration
- Loading spinner during submission
- Success/error messages

### Usage Example
```jsx
import ContactForm from './components/Landing/ContactForm';

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsFormOpen(true)}>
        Contact Us
      </button>
      
      <ContactForm 
        isOpen={isFormOpen} 
        onClose={() => setIsFormOpen(false)} 
      />
    </>
  );
}
```

## 🔒 Security Notes

- ✅ Environment variables are used for sensitive data
- ✅ `.env` file is in `.gitignore`
- ✅ Only EmailJS Public Key is exposed (safe for frontend)
- ⚠️ Never commit your `.env` file to version control

## 🐛 Troubleshooting

### Contact Form Not Sending Emails

1. Check browser console for errors
2. Verify all EmailJS credentials in `.env`
3. Ensure your email service is active in EmailJS dashboard
4. Check that template variables match the code
5. Verify you haven't exceeded EmailJS free tier limits (200 emails/month)

### Build Errors

If you encounter build errors:
```bash
# Clear node modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Clear Vite cache
rm -rf .vite
npm run dev
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)


## 📚 Additional Resources

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [SCSS Documentation](https://sass-lang.com/documentation)
- [React Router Documentation](https://reactrouter.com/)

## ⚡ React + Vite Template

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

---

**Made with ❤️ by Delta Labs**


