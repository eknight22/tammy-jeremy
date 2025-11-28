import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const poemSteps = [
  ["I’m thankful for stuffing and cranberry jam,", "But mostly for Jeremy and my girl Tam."],
  ["It’s a funny arrangement, this friendship we share:", "I handle the hardware; you handle the care."],
  ["I help with your glitches and cracked LCDs,", "You move me to fight this fucking disease."],
  ["I’m bad at the phone (yeah, I know it’s a crime),", "Yet you’ve stuck with me for a very long time."],
  ["Through all the chaos, one thing is true:", "I’m deeply thankful I wound up with you."],
  ["If lives can be said to have VIPs,", "Tammy and Jerms, you are that for me."]
];

const Step = ({ text }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Opacity peaks when element is in center of viewport (0.5 progress)
  const opacity = useTransform(
    scrollYProgress,
    [0.2, 0.5, 0.8],
    [0, 1, 0]
  );

  const scale = useTransform(
    scrollYProgress,
    [0.2, 0.5, 0.8],
    [0.8, 1, 0.8]
  );

  return (
    <div
      ref={ref}
      style={{
        minHeight: '80vh', // Reduced height slightly to allow faster flow
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}
    >
      <motion.div
        style={{
          opacity,
          scale,
          background: 'rgba(18, 18, 18, 0.6)', // More transparent
          backdropFilter: 'blur(8px)',
          padding: '50px 40px',
          borderRadius: '20px',
          border: '1px solid rgba(212, 175, 55, 0.2)', // Subtle gold border
          maxWidth: '800px', // Wider
          width: '100%',
          textAlign: 'center',
          boxShadow: '0 15px 40px rgba(0,0,0,0.4)'
        }}
      >
        {text.map((line, i) => (
          <p key={i} style={{
            fontSize: 'clamp(1.5rem, 5vw, 2.2rem)', // Larger text
            marginBottom: i === 0 ? '15px' : '0',
            fontFamily: 'var(--font-serif)',
            lineHeight: '1.5',
            color: 'var(--color-text)',
            textShadow: '0 2px 10px rgba(0,0,0,0.8)'
          }}>
            {line}
          </p>
        ))}
      </motion.div>
    </div>
  );
};

const StorySection = () => {
  return (
    <section style={{ position: 'relative', zIndex: 10 }}>
      <div style={{ paddingBottom: '10vh' }}>
        {poemSteps.map((text, index) => (
          <Step key={index} text={text} />
        ))}
      </div>
    </section>
  );
};

export default StorySection;
