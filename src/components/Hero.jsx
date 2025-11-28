import { motion } from 'framer-motion';
import heroImg from '../assets/Verve-Shugg-Papa2_7.JPG';

const Hero = () => {
  return (
    <section style={{ 
      height: '100vh', 
      position: 'relative', 
      overflow: 'hidden', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center' 
    }}>
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.6 }} // Lower opacity for better text readability
        transition={{ duration: 2.5, ease: "easeOut" }}
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: `url(${heroImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -1
        }}
      />
      {/* Gradient Overlay */}
      <div style={{ 
        position: 'absolute', 
        top: 0, left: 0, right: 0, bottom: 0, 
        background: 'linear-gradient(to bottom, rgba(18,18,18,0.3), rgba(18,18,18,1))',
        zIndex: -1
      }} />
      
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        style={{ textAlign: 'center', zIndex: 1, padding: '0 20px' }}
      >
        <h1 style={{ 
          fontSize: 'clamp(3rem, 8vw, 6rem)', 
          marginBottom: '1rem', 
          color: 'var(--color-white-soft)', 
          textShadow: '0 4px 20px rgba(0,0,0,0.5)',
          fontFamily: 'var(--font-serif)'
        }}>
          This Thanksgiving...
        </h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          style={{ 
            fontSize: 'clamp(1rem, 3vw, 1.5rem)', 
            color: 'var(--color-gold)',
            letterSpacing: '2px',
            textTransform: 'uppercase'
          }}
        >
          For Tammy & Jeremy
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7, y: [0, 10, 0] }}
        transition={{ delay: 2.5, duration: 2, repeat: Infinity }}
        style={{ 
          position: 'absolute', 
          bottom: '40px', 
          color: 'var(--color-white-soft)', 
          fontSize: '2rem'
        }}
      >
        ↓
      </motion.div>
    </section>
  );
};

export default Hero;
