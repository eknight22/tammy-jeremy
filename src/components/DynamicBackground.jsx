import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

// Import images
import img1 from '../assets/DJ Verve-Papa.JPG';
import img2 from '../assets/IMG_0455.JPG';
import img3 from '../assets/P0000044.JPG';
import img4 from '../assets/Papa-Shugg.JPG';
import img5 from '../assets/Papa-Shugg20.JPG';
import img6 from '../assets/Shugg-Verve3_5.JPG';
import img7 from '../assets/Verve-Shugg-Papa2_7.JPG';
import img8 from '../assets/softPantsCrew_1.jpeg';
import img9 from '../assets/ww1_9.JPG';

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

const FloatingImage = ({ src, index }) => {
  // Randomize initial position and movement parameters
  const randomX = Math.random() * 100; // 0-100%
  const randomY = Math.random() * 100; // 0-100%
  const duration = 15 + Math.random() * 20; // 15-35s
  const delay = Math.random() * 5;
  const scale = 0.5 + Math.random() * 0.5; // 0.5-1.0

  return (
    <motion.div
      style={{
        position: 'absolute',
        left: `${randomX}%`,
        top: `${randomY}%`,
        width: '250px',
        opacity: 0.4,
        zIndex: 0,
        filter: 'blur(1px)',
      }}
      animate={{
        y: [0, -100, 0],
        x: [0, 50, 0],
        rotate: [0, 10, -10, 0],
        scale: [scale, scale * 1.1, scale],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "linear",
        delay: delay,
      }}
    >
      <img src={src} alt="" style={{ width: '100%', borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.3)' }} />
    </motion.div>
  );
};

const Particle = ({ type }) => {
  const randomLeft = Math.random() * 100;
  const duration = 10 + Math.random() * 10;
  const delay = Math.random() * 5;

  const isLeaf = type === 'leaf';
  const content = isLeaf ? '🍂' : '❤️';

  // Leaves fall down, Hearts float up
  const yStart = isLeaf ? -10 : 110;
  const yEnd = isLeaf ? 110 : -10;

  return (
    <motion.div
      style={{
        position: 'absolute',
        left: `${randomLeft}%`,
        fontSize: isLeaf ? '20px' : '16px',
        color: isLeaf ? '#d4af37' : '#e57373',
        zIndex: 1,
        pointerEvents: 'none',
      }}
      initial={{ top: `${yStart}%`, opacity: 0 }}
      animate={{
        top: `${yEnd}%`,
        opacity: [0, 1, 1, 0],
        rotate: [0, 360],
        x: [0, Math.random() * 100 - 50], // Drift left/right
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "linear",
        delay: delay,
      }}
    >
      {content}
    </motion.div>
  );
};

const DynamicBackground = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']); // Parallax effect

  // Create arrays for particles
  const leaves = Array.from({ length: 15 });
  const hearts = Array.from({ length: 10 });

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      overflow: 'hidden',
      zIndex: 0,
      background: 'linear-gradient(to bottom, #121212, #1a1a1a)'
    }}>
      {/* Floating Images Layer */}
      <motion.div style={{ width: '100%', height: '120%', position: 'relative', y }}>
        {images.map((src, i) => (
          <FloatingImage key={i} src={src} index={i} />
        ))}
      </motion.div>

      {/* Particles Layer */}
      {leaves.map((_, i) => <Particle key={`leaf-${i}`} type="leaf" />)}
      {hearts.map((_, i) => <Particle key={`heart-${i}`} type="heart" />)}

      {/* Overlay to ensure text readability */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        background: 'rgba(18, 18, 18, 0.7)',
        zIndex: 2,
        pointerEvents: 'none'
      }} />
    </div>
  );
};

export default DynamicBackground;
