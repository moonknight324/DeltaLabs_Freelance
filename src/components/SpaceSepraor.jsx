import React, { useMemo, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

/**
 * Spacer component to separate sections with optional blur background.
 * Props:
 * - blurEffect?: boolean — enable decorative blur gradient
 * - height?: string — custom vertical space (e.g. "100px", "10rem", "20vh", "24")
 * - className?: string — extra classes
 */
function SpaceSepraor({ blurEffect = false, height, className = '', id, ...rest }) {
    const containerRef = useRef(null)

    // Resolve height input into a valid CSS length
    const resolvedHeight = useMemo(() => {
        if (!height) return undefined
        const trimmed = String(height).trim()
        if (/^\d+(\.\d+)?(px|rem|em|vh|vw|%)$/.test(trimmed)) return trimmed
        const numeric = parseInt(trimmed, 10)
        if (!Number.isNaN(numeric)) return `${numeric / 4}rem` // tailwind-like key → rem (e.g., 24 -> 6rem)
        return trimmed
    }, [height])

    // Parallax for the blur layer
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    })
    const y = useTransform(scrollYProgress, [0, 1], [30, -30])

    return (
        <motion.div
            ref={containerRef}
            id={id}
            role='separator'
            aria-hidden='true'
            className={`space-separator${blurEffect ? ' space-separator--blur' : ''}${className ? ` ${className}` : ''}`}
            style={resolvedHeight ? { '--ss-height': resolvedHeight } : undefined}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] }}
            {...rest}
        >
            {blurEffect && (
                <motion.div className='space-separator__blur' aria-hidden='true' style={{ y }}>
                    <div className='space-separator__gradient' />
                    <div className='space-separator__glass' />
                </motion.div>
            )}
        </motion.div>
    )
}

export default SpaceSepraor