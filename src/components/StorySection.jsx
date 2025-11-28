import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Import images
import imgIntro from '../assets/Verve-Shugg-Papa2_7.JPG';
import imgFriendship from '../assets/Papa-Shugg.JPG';
import imgSupport from '../assets/softPantsCrew_1.jpeg';
import imgLoyalty from '../assets/IMG_0455.JPG';
import imgGratitude from '../assets/ww1_9.JPG';
import imgConclusion from '../assets/Shugg-Verve3_5.JPG';

const poemSteps = [
  {
    text: ["I’m thankful for stuffing and cranberry jam,", "But mostly for Jeremy and my girl Tam."],
    image: imgIntro
  },
  {
    text: ["It’s a funny arrangement, this friendship we share:", "I handle the hardware; you handle the care."],
    image: imgFriendship
  },
  {
    text: ["I help with your glitches and cracked LCDs,", "You move me to fight this fucking disease."],
    image: imgSupport
  },
  {
    text: ["I’m bad at the phone (yeah, I know it’s a crime),", "Yet you’ve stuck with me for a very long time."],
    image: imgLoyalty
  },
  {
    text: ["Through all the chaos, one thing is true:", "I’m deeply thankful I wound up with you."],
    image: imgGratitude
  },
  {
    text: ["If lives can be said to have VIPs,", "Tammy and Jerms, you are that for me."],
    image: imgConclusion
  }
];

const Step = ({ text, index, setStep }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      setStep(index);
    }
  }, [inView, index, setStep]);

  return (
    <div
      ref={ref}
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        style={{
          background: 'rgba(18, 18, 18, 0.7)',
          backdropFilter: 'blur(10px)',
          padding: '40px',
          borderRadius: '16px',
          border: '1px solid rgba(255,255,255,0.1)',
          maxWidth: '600px',
          textAlign: 'center',
          boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
        }}
      >
        {text.map((line, i) => (
          <p key={i} style={{
            fontSize: 'clamp(1.2rem, 4vw, 1.8rem)',
            marginBottom: i === 0 ? '10px' : '0',
            fontFamily: 'var(--font-serif)',
            lineHeight: '1.6',
            color: 'var(--color-text)'
          }}>
            {line}
          </p>
        ))}
      </motion.div>
    </div>
  );
};

const StorySection = () => {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <section style={{ position: 'relative' }}>
      {/* Sticky Background */}
      <div style={{
        position: 'sticky',
        top: 0,
        height: '100vh',
        overflow: 'hidden',
        zIndex: 0
      }}>
        <AnimatePresence mode="popLayout">
          <motion.img
            key={currentStep}
            src={poemSteps[currentStep].image}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            style={{
              position: 'absolute',
              top: 0, left: 0,
              width: '100%', height: '100%',
              objectFit: 'cover',
              filter: 'brightness(0.5)'
            }}
          />
        </AnimatePresence>
      </div>

      {/* Scrollable Content */}
      <div style={{ position: 'relative', zIndex: 1, marginTop: '-100vh' }}>
        {poemSteps.map((step, index) => (
          <Step key={index} text={step.text} index={index} setStep={setCurrentStep} />
        ))}
      </div>
    </section>
  );
};

export default StorySection;
