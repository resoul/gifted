
import { Button } from '@/components/ui/button';
import { Boxes } from '@/components/ui/background-boxes';
import Link from 'next/link';

const CallToAction = () => {
  return (
    <section className="h-96 relative w-full overflow-hidden bg-zinc-900 flex flex-col items-center justify-center">
      <div className="absolute inset-0 w-full h-full bg-zinc-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
       <Boxes />
       
      <div className="container mx-auto px-6 text-center relative z-10">
        <div>
          <p className="text-white/80 font-semibold text-sm uppercase tracking-wide mb-6">
            Ready to get started?
          </p>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-10">
            Start your free trial today.
          </h2>
          
          <div>
            <Button variant="outline" size="lg" className="font-semibold">
              <Link href="#cta">Get started for free</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
