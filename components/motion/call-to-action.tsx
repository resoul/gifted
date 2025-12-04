
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Button } from '@/components/ui/button';
import { Boxes } from '@/components/ui/background-boxes';
import Link from 'next/link';

const CallToAction = () => {
  const handleConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70, 
      origin: { y: 0.6 }
    });
  };

  return (
    <section className="h-96 relative w-full overflow-hidden bg-zinc-900 flex flex-col items-center justify-center">
      <div className="absolute inset-0 w-full h-full bg-zinc-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
       <Boxes />
       
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-white/80 font-semibold text-sm uppercase tracking-wide mb-6"
          >
            Ready to get started?
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-10"
          >
            Start your free trial today.
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Button variant="outline" size="lg" className="font-semibold" onMouseEnter={handleConfetti}>
              <Link href="#cta">Get started for free</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
