import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import gsap from 'gsap';
import { testimonialProfile } from '../../assets/index.js';

const Testimonial = () => {
    const title = 'What Our Clients Say';
    const subtitle = 'Real results. Real relationships. Here’s what our clients have to say about working with us.';
    const testimonials = useMemo(() => ([
        {
            quote:
                'Working with Anant and his team was one of the most rewarding parts of my startup journey. They treated our product like their own, combining startup agility with deep technical expertise, clarity, and ownership. Even under pressure, they stayed calm and solution-focused. They don’t just deliver projects; they build purposeful digital products that scale.',
            authorName: 'Vinay Kamal Sharma',
            authorRole: 'Co-Founder & CEO @Testntrack',
            avatarSrc: testimonialProfile,
        },
       
    ]), []);


    const [activeIndex, setActiveIndex] = useState(0);

    const quoteRef = useRef(null);
    const authorNameRef = useRef(null);
    const authorRoleRef = useRef(null);
    const avatarRef = useRef(null);

    useEffect(() => {
        const targets = [quoteRef.current, authorNameRef.current, authorRoleRef.current, avatarRef.current].filter(Boolean);
        gsap.fromTo(
            targets,
            { opacity: 0, filter: 'blur(6px)', y: 8 },
            { opacity: 1, filter: 'blur(0px)', y: 0, duration: 0.5, ease: 'power2.out', stagger: 0.05 }
        );
    }, [activeIndex]);

    const handleNext = useCallback(() => {
        setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, [testimonials.length]);
    const handlePrevious = useCallback(() => {
        setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    }, [testimonials.length]);

    const currentItem = testimonials[activeIndex];

    return (
        <section className="testimonial" aria-labelledby="testimonial-title">
            <div className="testimonial__container">
                <div className="testimonial__left">
                    <h3 id="testimonial-title" className="testimonial__label">{title}</h3>
                    <p className="testimonial__subtitle">{subtitle}</p>
                    {/* <div className="testimonial__badges" aria-label="Awards">
                        {badges?.map((badge, idx) => (
                            <div className="testimonial__badge" key={idx}>
                                <img src={badge.src} alt={badge.alt} />
                                <span className="testimonial__badge-text">{badge.caption}</span>
                            </div>
                        ))}
                    </div> */}
                </div>

                <div className="testimonial__right">
                    {[currentItem].slice(0, 1).map((item, idx) => (
                        <React.Fragment key={idx}>
                            <div className="testimonial__quote testimonial__anim-target" ref={quoteRef}>
                                <span className="testimonial__quote-mark" aria-hidden>“</span>
                                <p className="testimonial__quote-text">{item.quote}</p>
                            </div>

                            <hr className="testimonial__divider" />

                            <div className="testimonial__author">
                                <img className="testimonial__avatar testimonial__anim-target" ref={avatarRef} src={item.avatarSrc} alt={`${item.authorName} avatar`} />
                                <div className="testimonial__author-info">
                                    <span className="testimonial__author-name testimonial__anim-target" ref={authorNameRef}>{item.authorName}</span>
                                    <span className="testimonial__author-role testimonial__anim-target" ref={authorRoleRef}>{item.authorRole}</span>
                                </div>
                            </div>
                        </React.Fragment>
                    ))}

                    {/* <div className="testimonial__nav" role="group" aria-label="Testimonial navigation">
                        <button type="button" className="testimonial__nav-btn" aria-label="Previous testimonial" onClick={handlePrevious}>←</button>
                        <button type="button" className="testimonial__nav-btn" aria-label="Next testimonial" onClick={handleNext}>→</button>
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default Testimonial;


