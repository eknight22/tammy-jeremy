import { motion } from 'framer-motion';

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

const Gallery = () => {
  return (
    <section style={{ padding: '80px 20px', background: '#121212' }}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          textAlign: 'center',
          marginBottom: '60px',
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          fontFamily: 'var(--font-serif)'
        }}
      >
        Memories
      </motion.h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '20px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {images.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: (index % 3) * 0.1 }} // Staggered delay
            whileHover={{ scale: 1.03, zIndex: 10 }}
            style={{
              overflow: 'hidden',
              borderRadius: '8px',
              boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
              aspectRatio: '1 / 1' // Square aspect ratio for uniformity
            }}
          >
            <img
              src={src}
              alt={`Memory ${index + 1}`}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </motion.div>
        ))}
      </div>
      <div style={{ height: '100px' }} /> {/* Spacer */}
    </section>
  );
};

export default Gallery;
