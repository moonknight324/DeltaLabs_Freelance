import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import { AnimatedNavbar } from '../components';
import { ContactForm } from '../components/Landing/Contact';

const MainLayout = () => {
    const [isContactFormOpen, setIsContactFormOpen] = useState(false);

    const openContactForm = () => setIsContactFormOpen(true);
    const closeContactForm = () => setIsContactFormOpen(false);

    return (
        <div className="main-layout">
            <AnimatedNavbar onContactClick={openContactForm} />
            <div className="navbar-spacer" />

            <main className="main-content">
                <Outlet />
            </main>

            <Footer onConnectClick={openContactForm} />
            
            <ContactForm 
                isOpen={isContactFormOpen} 
                onClose={closeContactForm} 
            />
        </div>
    );
};

export default MainLayout;

