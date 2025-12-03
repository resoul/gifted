
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Check, Star } from 'lucide-react';
import { useState } from 'react';
import { CustomTitle } from './custom/title';
import { CustomSubtitle } from './custom/subtitle';
import { CustomBadge } from './custom/badge';
import { cn } from '@/lib/utils';

const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = useState('monthly');
  const isYearly = billingPeriod === 'yearly';

  const plans = [
    {
      name: 'Starter',
      monthlyPrice: '$29',
      yearlyPrice: '$290',
      period: isYearly ? '/year' : '/month',
      description: 'Perfect for small teams getting started',
      features: [
        'Up to 5 team members',
        '10GB storage',
        'Lightning workflows',
        'Basic analytics',
        'Email support',
        'Core integrations'
      ],
      popular: false
    },
    {
      name: 'Professional',
      monthlyPrice: '$99',
      yearlyPrice: '$990',
      period: isYearly ? '/year' : '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 25 team members',
        '100GB storage',
        'Professional workflows',
        'Advanced analytics',
        'Priority support',
        'All integrations',
        'API access',
        'Custom workflows'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      monthlyPrice: '$299',
      yearlyPrice: '$2990',
      period: isYearly ? '/year' : '/month',
      description: 'For large organizations with advanced needs',
      features: [
        'Unlimited team members',
        '1TB storage',
        'Enterprise workflows',
        'Enterprise analytics',
        '24/7 dedicated support',
        'All integrations',
        'Full API access',
        'Custom workflows',
        'SSO & advanced security',
        'Custom onboarding'
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-background border-b border-border/50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }} className="flex items-center justify-center flex-col text-center gap-5">
          <CustomBadge>
            Pricing
          </CustomBadge>

          <CustomTitle>
            Simple & Transparent Pricing
          </CustomTitle>
          
          <CustomSubtitle className="mb-10">
            Choose the perfect plan for your business. 
            <br />
            All plans include a 14-day free trial.
          </CustomSubtitle>

          {/* Pricing Period Toggle */}
          <div className="flex items-center justify-center mb-18">
            <ToggleGroup
              type="single"
              value={billingPeriod}
              onValueChange={(value) => value && setBillingPeriod(value)}
              className="bg-accent rounded-xl gap-1 p-1.5"
            >
              <ToggleGroupItem 
                value="monthly" 
                className="cursor-pointer flex items-center rounded-lg text-sm font-medium px-6 py-2 data-[state=on]:bg-background data-[state=on]:shadow-sm"
              >
                Monthly
              </ToggleGroupItem>
              <ToggleGroupItem 
                value="yearly" 
                className="cursor-pointer flex items-center rounded-lg text-sm font-medium px-6 py-2 data-[state=on]:bg-background data-[state=on]:shadow-sm flex items-center gap-2"
              >
                Yearly
                <Badge variant="outline" className="leading-0 rounded-sm px-1 py-0.5 text-[11px] bg-indigo-100 border-indigo-100 text-indigo-700 dark:text-indigo-200 dark:bg-indigo-950/50 dark:border-indigo-950/50 font-semibold">
                  -20%
                </Badge>  
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={cn(
                'h-full relative transition-all duration-300 group', 
                plan.popular ? 'border-indigo-500 shadow-2xl scale-105' : 'border-border hover:border-indigo-500'
                )}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-2.5 py-1">
                      <Star className="h-3 w-3 me-0.5" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center py-6">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <CardDescription className="text-muted-foreground mb-5">
                    {plan.description}
                  </CardDescription>
                  <div className="flex items-end justify-center">
                    <div className="relative h-16 flex items-end">
                      <AnimatePresence mode="popLayout">
                        <motion.span
                          key={isYearly ? 'yearly' : 'monthly'}
                          initial={{ opacity: 0, y: 20, scale: 0.8 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -20, scale: 0.8 }}
                          transition={{ 
                            duration: 0.2,
                            ease: "easeInOut"
                          }}
                          className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent relative"
                        >
                          {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                        </motion.span>
                      </AnimatePresence>
                    </div>
                    <span className="text-muted-foreground ms-1 mb-1">{plan.period}</span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <motion.div
                    whileHover={{ scale: 1.025 }}
                    whileTap={{ scale: 0.98 }}
                    className="pt-6"
                  >
                    <Button className="w-full cursor-pointer" size="lg" variant={plan.popular ? "default" : "outline"}>
                      Get Started
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
