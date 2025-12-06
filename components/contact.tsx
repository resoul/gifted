
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail, Phone, MapPin } from 'lucide-react';
import { toast } from "sonner";
import Link from 'next/link';
import { supabase } from "@/lib/supabaseClient";

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async () => {
    setIsSubmitting(true);
    const values = form.getValues()

      const { error } = await supabase
          .from("contacts")
          .insert(values)
          .select();

    if (error === null) {
        toast("Message sent!. Thank you for your message. We'll get back to you soon.");
    }

    form.reset();
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'hello@gifted.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+1 (555) 123-4567',
    },
    {
      icon: MapPin,
      title: 'Address',
      content: '123 Business St, Suite 100\nSan Francisco, CA 94102',
    },
  ];

  return (
    <section id="contact" className="py-24 bg-zinc-50 dark:bg-zinc-950 border-b border-border/50">
      <div className="container mx-auto px-6">

        <div className="flex items-center justify-center flex-col text-center gap-5 mb-25">
            <div className={"py-1 text-indigo-600 font-semibold border-b-2 border-indigo-600 mb-1.5"}>
                Get in Touch
            </div>
            <h2 className={"leading-6 text-3xl md:text-5xl font-bold text-foreground"}>
                Contact Us
            </h2>
            <p className={"text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"}>
                Ready to connect on a deeper emotional level?
                Share your thoughts or questions with us, and we&apos;ll be here to respond with sincerity and attention.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
                  Let&apos;s Begin a Journey Through Gifted Emotions
              </h3>
              <p className="text-muted-foreground mb-8">
                  Whether you seek deeper self-awareness, emotional clarity, or a more meaningful connection with others, we&apos;re here to support your path to emotional mastery.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4">
                  <info.icon className="size-4 text-muted-foreground mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {info.title}
                    </h4>
                    {info.icon === Mail  ? (
                      <Link href={`mailto:${info.content}`} className="text-muted-foreground hover:text-purple-500 whitespace-pre-line">
                        {info.content}
                      </Link>
                    ) : (
                      <p className="text-muted-foreground whitespace-pre-line">
                        {info.content}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
            <Card className="border-border/50">
                <CardContent className="p-8">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Your name" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input placeholder="your@email.com" type="email" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <FormField
                                control={form.control}
                                name="subject"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Subject</FormLabel>
                                        <FormControl>
                                            <Input placeholder="What's this about?" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="message"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Message</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Tell us more about your project or question..."
                                                className="min-h-[120px]"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <Button
                                size="lg"
                                type="submit"
                                className="w-full"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
