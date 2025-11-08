import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import styles from '../../styles/components/BackgroundPaths.module.scss';

function FloatingPaths({ position }) {
    const paths = Array.from({ length: 36 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${380 - i * 5 * position
            } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${152 - i * 5 * position
            } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${684 - i * 5 * position
            } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        color: `rgba(15,23,42,${0.1 + i * 0.03})`,
        width: 0.5 + i * 0.03,
    }));

    return (
        <div className={styles.pathsContainer}>
            <svg
                className={styles.pathsSvg}
                viewBox="0 0 696 316"
                fill="none"
            >
                <title>Background Paths</title>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke="currentColor"
                        strokeWidth={path.width}
                        strokeOpacity={0.1 + path.id * 0.03}
                        initial={{ pathLength: 0.3, opacity: 0.6 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0.3, 0.6, 0.3],
                            pathOffset: [0, 1, 0],
                        }}
                        transition={{
                            duration: 20 + Math.random() * 10,
                            repeat: Infinity,
                            ease: 'linear',
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

FloatingPaths.propTypes = {
    position: PropTypes.number.isRequired,
};

export function BackgroundPaths({
    title = 'Where Ideas Come to Life.',
    subtitle = 'We help growth-driven entrepreneurs and businesses scale online with modern, reliable, and performance-driven websites — uniting design, technology, and business growth.',
    breakAfterWordIndex = 2,
    ctaText = "Let’s Build Your Website",
}) {
    const words = title.split(' ');

    const handleCtaClick = () => {
        const pricesEl = document.getElementById('prices');
        if (pricesEl) {
            pricesEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.pathsBackground}>
                <FloatingPaths position={1} />
                <FloatingPaths position={-1} />
            </div>

            <div className={styles.content}>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    className={styles.contentWrapper}
                >
                    <h1 className={styles.title}>
                        {words.map((word, wordIndex) => (
                            <React.Fragment key={`word-${wordIndex}`}>
                                <span className={styles.word}>
                                    {word.split('').map((letter, letterIndex) => (
                                        <motion.span
                                            key={`${wordIndex}-${letterIndex}`}
                                            initial={{ y: 60, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{
                                                delay: wordIndex * 0.06 + letterIndex * 0.02,
                                                type: 'spring',
                                                stiffness: 160,
                                                damping: 22,
                                            }}
                                            className={styles.letter}
                                        >
                                            {letter}
                                        </motion.span>
                                    ))}
                                </span>
                                {wordIndex === breakAfterWordIndex && <br className={styles.lineBreak} />}
                            </React.Fragment>
                        ))}
                    </h1>

                    <p className={styles.subtitle}>{subtitle}</p>

                    <div className={styles.buttonWrapper}>
                        <button className={styles.button} type="button" onClick={handleCtaClick}>
                            <span className={styles.buttonText}>{ctaText}</span>
                            <span className={styles.buttonArrow}>→</span>
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

BackgroundPaths.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    breakAfterWordIndex: PropTypes.number,
    ctaText: PropTypes.string,
};

