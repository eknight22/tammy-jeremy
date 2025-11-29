import Hero from './components/Hero';
import StorySection from './components/StorySection';
import Signature from './components/Signature';

import DynamicBackground from './components/DynamicBackground';

function App() {
  return (
    <main style={{ position: 'relative', overflowX: 'hidden' }}>
      <DynamicBackground />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <StorySection />
        <Signature />

      </div>
    </main>
  );
}

export default App;
