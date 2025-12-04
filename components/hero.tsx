import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Gift } from 'lucide-react';
import HeroVideoDialog from '@/components/ui/hero-video-dialog';
import { WordRotate } from '@/components/magicui/word-rotate';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { Star } from '@/components/custom/star';

const Hero = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const rotatingWords = ["Gifts", "Emotions",  "Feelings"];

  const people = [
    {
      id: 1,
      name: "Vence",
      designation: "Music Engineer",
      image:
        "https://i.scdn.co/image/ab6761610000e5ebcc68cda40a55e1b291d5a5ec",
    },
    {
      id: 2,
      name: "resoul.ua",
      designation: "Music Producer",
      image:
        "https://i.scdn.co/image/ab67616100005174b2435adc82d7e24ba9ac3308",
    },
    {
      id: 3,
      name: "Soul Recordings",
      designation: "Music Label",
      image:
        "/music/ddb529f8-2121-45ff-8be4-368ad67449a4.jpg",
    },
    {
      id: 4,
      name: "V&R Recordings",
      designation: "Music Label",
      image:
        "/music/vr.jpg",
    },
    {
      id: 8,
      name: "Airlance Music",
      designation: "Music Label",
      image:
        "/music/logo.png",
    },  
    {
      id: 5,
      name: "I Was There",
      designation: "Music Band",
      image:
        "/music/IwasthereLogo.png",
    },
  ];

  // Mouse parallax state
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = (e.target as HTMLDivElement).getBoundingClientRect();
    setMouse({
      x: (e.clientX - rect.left - rect.width / 2) / rect.width,
      y: (e.clientY - rect.top - rect.height / 2) / rect.height,
    });
  };
  const handleMouseLeave = () => setMouse({ x: 0, y: 0 });

  return (
    <section
      className="relative lg:min-h-screen bg-gradient-to-br from-gray-50 dark:from-zinc-950 via-indigo-50 dark:via-black to-indigo-50 dark:to-zinc-950 pt-25 pb-20 lg:pt-40 lg:pb-20 overflow-hidden group"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Animated gradient background */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none">
        {/* Light Orb 1 */}
        <motion.div
          className="absolute left-[10%] top-[15%] w-[320px] h-[320px] dark:w-[160px] dark:h-[160px] rounded-full bg-indigo-200 dark:bg-indigo-900 opacity-90 blur-[60px]"
          animate={{
            scale: [1, 1.13, 1],
            opacity: [0.85, 1, 0.85],
            x: mouse.x * 70 + 0,
            y: mouse.y * 40 + 0,
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        {/* Core hotspot for orb 1 */}
        <motion.div
          className="absolute left-[18%] top-[23%] w-[90px] h-[90px] rounded-full bg-indigo-100 dark:bg-indigo-950 opacity-95 blur-[10px]"
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.92, 1, 0.92],
            x: mouse.x * 90 + 0,
            y: mouse.y * 60 + 0,
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        {/* Light Orb 2 */}
        <motion.div
          className="absolute right-[12%] top-[30%] w-[220px] h-[220px] rounded-full bg-indigo-300 dark:bg-indigo-950 opacity-80 blur-[40px]"
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.75, 0.95, 0.75],
            x: mouse.x * -60 + 0,
            y: mouse.y * 30 + 0,
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        {/* Light Orb 3 */}
        <motion.div
          className="absolute left-[35%] bottom-[18%] w-[180px] h-[180px] rounded-full bg-blue-200 dark:bg-blue-600 opacity-80 blur-[30px]"
          animate={{
            scale: [1, 1.16, 1],
            opacity: [0.7, 0.9, 0.7],
            x: mouse.x * 40 + 0,
            y: mouse.y * -60 + 0,
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        {/* Light Orb 4 */}
        <motion.div
          className="absolute right-[22%] bottom-[8%] w-[150px] h-[150px] rounded-full bg-indigo-100 opacity-90 blur-[20px]"
          animate={{
            scale: [1, 1.11, 1],
            opacity: [0.8, 1, 0.8],
            x: mouse.x * -30 + 0,
            y: mouse.y * -40 + 0,
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-indigo-400/10 via-indigo-500/10 to-indigo-600/10"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />  
        <motion.div 
          className="absolute inset-0 bg-gradient-to-tl from-indigo-400/10 via-indigo-500/10 to-indigo-600/10"
          animate={{
            opacity: [0.2, 0.5, 0.2],
            x: [0, 20, 0],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Parallax moving elements on hover */}
      <motion.div 
        className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-indigo-400/20 to-indigo-600/20 dark:bg-gradient-to-br dark:from-indigo-600/20 dark:to-indigo-400/20 rounded-full blur-xl"
        whileHover={{ x: 30, y: -20, scale: 1.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />
      <motion.div 
        className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-indigo-400/20 to-indigo-600/20 dark:bg-gradient-to-br dark:from-indigo-600/20 dark:to-indigo-400/20 rounded-full blur-xl"
        whileHover={{ x: -25, y: 15, scale: 1.1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
      <motion.div 
        className="absolute bottom-40 left-20 w-20 h-20 bg-gradient-to-br from-indigo-400/20 to-indigo-600/20 dark:bg-gradient-to-br dark:from-indigo-600/20 dark:to-indigo-400/20 rounded-full blur-xl"
        whileHover={{ x: 20, y: -30, scale: 1.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      />

      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e5e7eb' fill-opacity='0.3'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
      }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main headline */}          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-black flex flex-col md:flex-row items-center gap-0.5 md:gap-1.25 justify-center text-3xl lg:text-7xl font-bold mb-4 lg:mb-8 leading-[1.2]"
          >
            <span className="bg-gradient-to-r from-indigo-900 via-blue-900 to-indigo-900 dark:from-gray-50 dark:via-blue-300 dark:to-indigo-900 bg-clip-text text-transparent">
              Create Unique
            </span>
            <WordRotate
              words={rotatingWords}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent w-[365px]"
            />
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base md:text-xl text-muted-foreground mb-6 md:mb-10 max-w-[600px] mx-auto leading-relaxed"
          >
              Order a track , record your audio message, and let us publish
              your personalized gift on major streaming platforms.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 mb-10"
          >
            <Button onClick={() => console.log('click')} size="lg" className="cursor-pointer hover:[&_svg]:translate-x-1 w-46">
              Get started for free
              <ArrowRight className="h-5 w-5 transition-transform" />
            </Button>

            <Button size="lg" variant="outline" className="cursor-pointer hover:[&_svg]:-translate-y-1 w-52" asChild>
              <Link href="#features"> 
                <Gift className="h-5 w-5 transition-transform opacity-60" />
                Explore Gifted Emotions
              </Link>                
            </Button>
          </motion.div>

          {/* Loved by thousands badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-2.5 mb-10"
          >
            <div className="flex gap-2.5">
              <div className="flex -space-x-2 me-2.5">
                <AnimatedTooltip items={people} />
              </div>     
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="h-5 w-5 transition-transform opacity-60 text-yellow-500" />
                ))}
              </div>
            </div>   
            <div className="text-center text-muted-foreground text-sm font-medium">Trusted by many of musicians</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="relative max-w-5xl mx-auto"
          >
            {mounted && (
              <HeroVideoDialog
                trigger={
                  <div className="bg-indigo-600/10 dark:bg-indigo-300/10 backdrop-blur-md rounded-full p-4 shadow-lg">
                    <div className="bg-background rounded-full p-3 shadow-lg">
                      <Play className="size-6 text-indigo-600 dark:text-indigo-400 fill-indigo-600 dark:fill-indigo-400 ml-0.5" />
                    </div>
                  </div>
                }
                animationStyle="from-center"
                videoSrc="https://www.youtube.com/embed/VIbMn0QHBlw?si=uV9MFOqt6dmBs0vW"
                thumbnailSrc={resolvedTheme === 'dark' ? '/screens/test.png' : '/screens/test.png'}
                thumbnailAlt="Product Demo"
              />
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
