
import Marquee from "@/components/ui/marquee";
import Image from 'next/image';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Liam Carter',
      role: 'Digital Marketer',
      content: 'This service is amazing! I sent a personalized track to my friend, and it made their whole week. Super easy and super thoughtful.',
      avatar: '/avatars/liam.webp'
    },
    {
      name: 'Ava Mitchell',
      role: 'UX Designer',
      content: 'I love how unique the gifted tracks are. It feels like giving someone a piece of emotion in music form.',
      avatar: '/avatars/ava.webp'
    },
    {
      name: 'Noah Bennett',
      role: 'Software Engineer',
      content: 'Fast, simple, and creative. I’ve already gifted three tracks, and every time the reaction was priceless.',
      avatar: '/avatars/noah.webp'
    },
    {
      name: 'Sophia Harris',
      role: 'Freelance Photographer',
      content: 'Beautiful experience! The track felt so personal, like it was made just for my friend’s story.',
      avatar: '/avatars/sophia.webp'
    },
    {
      name: 'Ethan Brooks',
      role: 'Startup Founder',
      content: 'Perfect for surprising someone. The music quality is incredible, and the whole idea is very refreshing.',
      avatar: '/avatars/ethan.webp'
    },
    {
      name: 'Mia Collins',
      role: 'Content Creator',
      content: 'My audience loved the track I gifted to a fan. It’s such a cool way to show appreciation.',
      avatar: '/avatars/mia.webp'
    },
    {
      name: 'Oliver Scott',
      role: 'Product Manager',
      content: 'I didn’t expect the music to be this good. It felt premium and meaningful—great service.',
      avatar: '/avatars/oliver.webp'
    },
    {
      name: 'Isabella Reed',
      role: 'Event Planner',
      content: 'I used this service for a birthday surprise, and everyone was emotional. It added magic to the moment.',
      avatar: '/avatars/isabella.webp'
    },
    {
      name: 'James Parker',
      role: 'Music Teacher',
      content: 'As someone in music, I can say the craftsmanship is great. The gifted track carried real emotion.',
      avatar: '/avatars/james.webp'
    },
    {
      name: 'Harper Lewis',
      role: 'Copywriter',
      content: 'A truly memorable gift. The storytelling through sound was beautiful—highly recommend!',
      avatar: '/avatars/harper.webp'
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
        <div className="flex items-center justify-center flex-col text-center gap-5 mb-16">
            <div className={"py-1 text-indigo-600 font-semibold border-b-2 border-indigo-600 mb-1.5"}>
                Testimonials
            </div>
            <h2 className={"leading-6 text-3xl md:text-5xl font-bold text-foreground"}>
                Loved by Many
            </h2>
            <p className={"text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"}>
                Discover why users love Gifted Emotions and join today to our family.
            </p>
        </div>
      </div>

      <div className="w-full mx-auto px-6">
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden gap-1.5 mx-auto">
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
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
