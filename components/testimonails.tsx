
import { motion } from 'framer-motion';
import Marquee from "@/components/ui/marquee";
import { CustomBadge } from '@/components/custom/badge';
import { CustomTitle } from '@/components/custom/title';
import { CustomSubtitle } from '@/components/custom/subtitle';
import Image from 'next/image';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CEO, TechStart',
      content: 'Metronic transformed our operations. 300% growth in 6 months!',
      avatar: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Marcus Johnson',
      role: 'CTO, InnovateLab',
      content: 'Best decision we made. The AI features are game-changing.',
      avatar: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Founder, GrowthCo',
      content: 'Incredible platform. Our team productivity increased by 250%.',
      avatar: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'David Kim',
      role: 'VP, ScaleUp Inc',
      content: 'Seamless integration, powerful analytics. Highly recommend!',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Lisa Thompson',
      role: 'CMO, BrandForward',
      content: 'The automation features saved us 40 hours per week.',
      avatar: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Alex Martinez',
      role: 'Director, FutureFlow',
      content: 'Outstanding support and features. Perfect for scaling.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Jennifer Park',
      role: 'Product Manager, InnovateX',
      content: 'The user experience is exceptional. Our customers love it.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Michael Brown',
      role: 'Head of Operations, ScaleTech',
      content: 'Reduced our operational costs by 40% while improving efficiency.',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Rachel Green',
      role: 'CTO, InnovateLab',
      content: 'The analytics dashboard gives us insights we never had before.',
      avatar: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'John Doe',
      role: 'CEO, TechStart',
      content: 'The analytics dashboard gives us insights we never had before.',
      avatar: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=100&h=100&fit=crop&crop=face'
    }
  ];

  const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
    <div className="flex-shrink-0 w-[350px] bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/15 dark:to-indigo-900/15 rounded-xl p-6 border border-border/50 shadow-sm mx-1.5">
      <p className="text-muted-foreground mb-4 font-medium">{testimonial.content}</p>
      <div className="flex items-center gap-3">
        <Image 
          src={testimonial.avatar} 
          alt={testimonial.name}
          width={40}
          height={40}
          className="rounded-full object-cover"
        />
        <div>
          <div className="font-semibold text-foreground">{testimonial.name}</div>
          <div className="text-sm text-muted-foreground">{testimonial.role}</div>
        </div>
      </div>
    </div>
  );

  const firstColumn = testimonials.slice(0, 5);
  const secondColumn = testimonials.slice(5, 10);

  return (
    <section className="py-24 bg-background overflow-hidden border-b border-border/50">
      <div className="container mx-auto px-6 lg:px-12 mb-16">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }} className="flex items-center justify-center flex-col text-center gap-5 mb-16">
          <CustomBadge>
            Testimonials
          </CustomBadge>

          <CustomTitle>
            Loved by Thousands
          </CustomTitle>
          
          <CustomSubtitle>
            Discover why users love Metronic and join today to experience its 
            transformative power for your business.
          </CustomSubtitle>
        </motion.div>
      </div>

      <div className="w-full mx-auto px-6">
        <motion.div 
          className="relative flex w-full flex-col items-center justify-center overflow-hidden gap-1.5 mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
         >
          <Marquee pauseOnHover className="[--duration:40s] grow">
            {firstColumn.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:40s] grow">
            {secondColumn.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 start-0 w-1/12 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 end-0 w-1/12 bg-gradient-to-l from-background"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
