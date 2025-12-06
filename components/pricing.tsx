import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Check, Star } from 'lucide-react';
import { useState } from 'react';
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
      description: 'Perfect to start',
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
      description: 'Ideal for family',
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
        <div className="flex items-center justify-center flex-col text-center gap-5">
            <div className={"py-1 text-indigo-600 font-semibold border-b-2 border-indigo-600 mb-1.5"}>
                Pricing
            </div>

            <h2 className={"leading-6 text-3xl md:text-5xl font-bold text-foreground"}>
                Simple & Transparent Pricing
            </h2>
            <p className={"text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"}>
                Choose the perfect plan for you.
                <br />
                All plans include a 14-day free trial.
            </p>
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
                className="cursor-pointer flex items-center rounded-lg text-sm font-medium px-6 py-2 data-[state=on]:bg-background data-[state=on]:shadow-sm gap-2"
              >
                Yearly
                <Badge variant="outline" className="leading-0 rounded-sm px-1 py-0.5 text-[11px] bg-indigo-100 border-indigo-100 text-indigo-700 dark:text-indigo-200 dark:bg-indigo-950/50 dark:border-indigo-950/50 font-semibold">
                  -20%
                </Badge>  
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index}>
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
                        <span key={isYearly ? 'yearly' : 'monthly'}
                              className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent relative"
                        >
                          {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                        </span>
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
                  
                  <div className="pt-6">
                    <Button className="w-full cursor-pointer" size="lg" variant={plan.popular ? "default" : "outline"}>
                      Get Started
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
