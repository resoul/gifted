
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CustomBadge } from '@/components/custom/badge';
import { CustomTitle } from '@/components/custom/title';
import { CustomSubtitle } from '@/components/custom/subtitle';

import Link from 'next/link'; 

const FAQ = () => {
  const faqs = [
    {
      question: "What's included in the free trial?",
      answer: "All plans include a 14-day free trial with full access to all features. No credit card required to start your trial."
    },
    {
      question: "Can I change my plan anytime?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate the billing accordingly."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for annual plans."
    },
    {
      question: "Is there a setup fee?",
      answer: "No, there are no setup fees or hidden costs. You only pay for your chosen plan, and the price includes everything listed in the features."
    },
    {
      question: "Do you offer refunds?",
      answer: "Yes, we offer a 30-day money-back guarantee. If you're not satisfied with our service, we'll provide a full refund within 30 days of purchase."
    },
    {
      question: "How does the yearly discount work?",
      answer: "When you choose yearly billing, you get 2 months free (equivalent to a 20% discount). The discount is applied automatically to your total."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time. Your service will continue until the end of your current billing period."
    },
    {
      question: "Do you offer custom enterprise solutions?",
      answer: "Absolutely! For large organizations with specific needs, we offer custom pricing and features. Contact our sales team to discuss your requirements."
    }
  ];

  return (
    <section className="py-24 bg-background" id="faq">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }} className="flex items-center justify-center flex-col text-center gap-5 mb-25">
          <CustomBadge>
            FAQ
          </CustomBadge>

          <CustomTitle>
            Frequently Asked Questions
          </CustomTitle>
          
          <CustomSubtitle>
            Got questions? We&apos;ve got answers. Here are the most common questions about our service.
          </CustomSubtitle>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem 
                  value={`item-${index}`} 
                  className="bg-background rounded-lg border! border-border px-6 hover:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-start font-semibold text-foreground hover:text-indigo-600 data-[state=open]:text-indigo-600 transition-colors cursor-pointer">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center items-center gap-1.5 text-center mt-12"
        >
          <span className="text-muted-foreground">
            Still have questions?
          </span>

          <Link href="#contact" className="text-indigo-600 hover:text-indigo-700 transition-colors hover:underline">
            Contact our Support Team
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
