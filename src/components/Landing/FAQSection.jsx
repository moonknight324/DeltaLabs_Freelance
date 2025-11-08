import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { openFaq, closeFaq } from '@/utils/faqAnimations';
import PropTypes from 'prop-types';

const faqs = [
    {
        question: 'What services do UI UX design agencies offer?',
        answer:
            'UI UX design agencies offer user research, wireframing, prototyping, visual design, interaction design, usability testing, and design systems to create intuitive, accessible digital experiences.',
    },
    {
        question: 'Why do I need a UI UX design company for my business?',
        answer:
            'A specialized UI UX partner helps increase conversions, reduce churn, and differentiate your brand by aligning product experiences with user needs and business goals.',
    },
    {
        question: 'How long does it take to complete a UI UX design project?',
        answer:
            'Timelines vary by scope—most engagements take 3–8 weeks covering discovery, iterations, testing, and handoff, with faster turnarounds for smaller features.',
    },
    {
        question: 'How do I choose the right UI UX design agency for my business?',
        answer:
            'Evaluate their portfolio, case studies, process, communication, tooling, and fit with your domain. Look for measurable outcomes and strong collaboration practices.',
    },
    {
        question: 'What is a UI UX design agency?',
        answer:
            'A UI UX design agency is a team of designers and researchers focused on crafting user-centered interfaces and experiences that are usable, accessible, and aligned to strategy.',
    },
];

function FAQItem({ question, answer, isOpen, onToggle, setPanelRef, setIconRef, index }) {
    return (
        <div className="faq-item" role="group" aria-expanded={isOpen}>
            <button
                type="button"
                className="faq-trigger"
                onClick={onToggle}
                aria-controls={`panel-${index}`}
                aria-expanded={isOpen}
                id={`faq-${index}`}
            >
                <span className="faq-question">{question}</span>
                <span className="faq-icon" aria-hidden="true" ref={setIconRef}>+</span>
            </button>
            <div
                id={`panel-${index}`}
                role="region"
                aria-labelledby={`faq-${index}`}
                className="faq-panel"
                ref={setPanelRef}
            >
                <p className="faq-answer">{answer}</p>
            </div>
        </div>
    );
}

FAQItem.propTypes = {
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onToggle: PropTypes.func.isRequired,
    setPanelRef: PropTypes.func.isRequired,
    setIconRef: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
};

function FAQSection() {
    const [openIndex, setOpenIndex] = useState(null);
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const panelsRef = useRef([]);
    const iconsRef = useRef([]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            if (!titleRef.current || !sectionRef.current) return;

            // Entrance animation: pop up from below once on first view (refined timing)
            gsap.fromTo(
                titleRef.current,
                { opacity: 0, y: 80 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.8,
                    ease: 'power4.out',
                    scrollTrigger: {
                        trigger: titleRef.current,
                        start: 'top 85%',
                        once: true,
                        invalidateOnRefresh: true,
                    },
                    overwrite: 'auto',
                    immediateRender: false,
                }
            );

            gsap.fromTo(
                titleRef.current,
                { opacity: 1, y: 0 },
                {
                    opacity: 0,
                    y: -50,
                    duration: 1.5,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top center',
                        end: 'bottom top',
                        scrub: true,
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const handleToggle = (index) => {
        const currentOpen = openIndex;
        if (currentOpen === index) {
            closeFaq(panelsRef.current[index], iconsRef.current[index]);
            setOpenIndex(null);
            return;
        }
        if (currentOpen !== null && panelsRef.current[currentOpen]) {
            closeFaq(panelsRef.current[currentOpen], iconsRef.current[currentOpen]);
        }
        if (panelsRef.current[index]) {
            openFaq(panelsRef.current[index], iconsRef.current[index]);
        }
        setOpenIndex(index);
    };

    const setPanelRefAt = (idx) => (el) => {
        panelsRef.current[idx] = el;
    };
    const setIconRefAt = (idx) => (el) => {
        iconsRef.current[idx] = el;
    };

    return (
        <section ref={sectionRef} className="faq-section" aria-labelledby="faq-heading">
            <div className="faq-container">
                <h2 ref={titleRef} id="faq-heading" className="faq-title">
                    {/* <em className="faq-title-any">Any</em>{' '} */}
                    <span className="faq-title-rest">Common Questions, Clear Answers.</span>
                </h2>

                <div className="faq-list" role="list">
                    {faqs.map((item, index) => (
                        <FAQItem
                            key={item.question}
                            index={index}
                            question={item.question}
                            answer={item.answer}
                            isOpen={openIndex === index}
                            onToggle={() => handleToggle(index)}
                            setPanelRef={setPanelRefAt(index)}
                            setIconRef={setIconRefAt(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FAQSection;


