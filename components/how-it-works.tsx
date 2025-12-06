import { AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Cable, ChartNoAxesCombined, Cog, CloudUpload } from 'lucide-react';

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const manuallyTriggered = useRef(false);

  const steps = [
    {
      id: 1,
      title: "Chose track",
      description: "Chose your track. Or let us create exclusive track for you. Our library is growing by the day.",
      image: "/screens/test_crop.webp",
      icon: Cable
    },
    {
      id: 2,
      title: "Record audio message",
      description: "Use your micro to record your audio message. Then we combine your track & your message. Add your picture for Album cover.",
      image: "/screens/test_crop.webp",
      icon: ChartNoAxesCombined
    },
    {
      id: 4,
      title: "Configure & Optimize",
      description: "Launch your track.",
      image: "/screens/test_crop.webp",
      icon: Cog
    },
    {
      id: 5,
      title: "Done",
      description: "Get lifetime access to your track in all major streaming platforms.",
      image: "/screens/test_crop.webp",
      icon: CloudUpload
    },
  ];

  const stepDuration = 5000;
  useEffect(() => {
    if (isPaused) return;
  
    setProgress(0);
  
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + (100 / (stepDuration / 50));
      });
    }, 50);
  
    const stepTimeout = setTimeout(() => {
      setActiveStep((prevStep) => {
        const next = (prevStep + 1) % steps.length;
        manuallyTriggered.current = false; // reset the manual flag here
        return next;
      });
    }, stepDuration);
  
    return () => {
      clearInterval(progressInterval);
      clearTimeout(stepTimeout);
    };
  }, [activeStep, isPaused, steps.length]);

  const handleStepClick = (index: number) => {
    setActiveStep(index);
    manuallyTriggered.current = true; // Flag as manual
    setTimeout(() => setIsPaused(false), 4000); // Resume auto
  };

  return (
    <section id="how-it-works" className="py-24 border-b border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center flex-col text-center gap-5 mb-16">
            <div className={"py-1 text-indigo-600 font-semibold border-b-2 border-indigo-600 mb-1.5"}>
                Easy to Use
            </div>

            <h2 className={"leading-6 text-3xl md:text-5xl font-bold text-foreground"}>
                How It Works
            </h2>
            <p className={"text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"}>
                Our streamlined process gets you up and running quickly, with powerful AI doing the heavy lifting.
            </p>
        </div>

        <div className="flex flex-col gap-12 max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={cn(
                  'flex flex-col items-center cursor-pointer transition-all duration-300 overflow-hidden'
                )}
                onClick={() => handleStepClick(index)}
              >
                <div className="size-12 bg-indigo-100/40 dark:bg-indigo-950/60 rounded-full flex items-center justify-center">
                  <step.icon className="size-5 text-indigo-500" />
                </div>

                <h3 className={cn('p-5 pb-3 text-xl font-semibold mb-0 transition-colors duration-300', index === activeStep ? 'text-foreground' : 'text-muted-foreground')}>
                  {step.title}
                </h3>
                
                <div className="w-full h-0.5 bg-border/60"> 
                  <AnimatePresence>
                    {index === activeStep && (
                      <div className="h-0.5 w-full overflow-hidden">
                        <div
                          className="h-0.5 bg-gradient-to-r from-indigo-500 to-purple-400"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    )}
                  </AnimatePresence> 
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Fading Images */}
          <div className="relative w-full rounded-xl overflow-hidden border border-border shadow-xs shadow-black/5 bg-background">
            <div className="max-h-[50vh] overflow-hidden">
                <img
                    key={activeStep}
                    src={steps[activeStep].image}
                    alt={`${steps[activeStep].title} visualization`}
                    className="w-full h-full object-cover"
                />
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to get started? It takes less than 5 minutes.
          </p>
          <Button size="lg" asChild>
            <Link href="#cta">Start Your Journey</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
