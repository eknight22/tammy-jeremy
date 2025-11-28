import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Signature = () => {
  const [name, setName] = useState('Eric');

  useEffect(() => {
    const interval = setInterval(() => {
      setName(prev => prev === 'Eric' ? 'Papa' : 'Eric');
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      textAlign: 'center',
      padding: '100px 20px',
      background: '#121212',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '50vh'
    }}>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          fontSize: 'clamp(1.5rem, 5vw, 2.5rem)',
          marginBottom: '2rem',
          fontFamily: 'var(--font-serif)',
          fontStyle: 'italic',
          color: 'var(--color-text)'
        }}
      >
        I love you both...
      </motion.p>

      <div style={{ height: '80px', position: 'relative', width: '100%', maxWidth: '300px' }}>
        <AnimatePresence mode="wait">
          <motion.span
            key={name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            style={{
              position: 'absolute',
              left: 0, right: 0,
              textAlign: 'center',
              fontSize: 'clamp(2.5rem, 8vw, 4rem)',
              color: 'var(--color-gold)',
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic'
            }}
          >
            {name}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Signature;
