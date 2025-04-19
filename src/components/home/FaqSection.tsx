
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What types of events does Planify support?",
    answer: "Planify supports a wide range of events including weddings, corporate events, birthday parties, graduations, religious celebrations, and more. Our platform is flexible and can be customized for virtually any event type."
  },
  {
    question: "How does the AI-powered vendor matching work?",
    answer: "Our AI analyzes your event details, budget, location, and style preferences to recommend vendors that best match your needs. The system learns from user feedback and continuously improves its recommendations to ensure the best possible matches."
  },
  {
    question: "Can multiple people collaborate on planning an event?",
    answer: "Yes! Planify offers collaborative planning features that allow you to invite friends, family members, or colleagues to help plan your event. You can control their access levels and work together in real-time."
  },
  {
    question: "Is Planify available worldwide?",
    answer: "Yes, Planify is available globally. However, our vendor database is most comprehensive in North America, Europe, and Australia. We're constantly expanding our vendor network in other regions."
  },
  {
    question: "How secure is my payment information?",
    answer: "Extremely secure. We use industry-standard encryption for all financial transactions and never store your complete credit card information. Our payment processing complies with PCI DSS standards."
  },
  {
    question: "Can I try Planify before subscribing?",
    answer: "Absolutely! We offer a 14-day free trial with full access to all features. No credit card is required to start your trial, and you can cancel anytime."
  }
];

const FaqSection = () => {
  const [openItem, setOpenItem] = useState<string | null>("item-0");

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Find answers to common questions about Planify and event planning.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible value={openItem || undefined} onValueChange={(value) => setOpenItem(value)}>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                <AccordionTrigger className="text-lg font-medium text-left py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Still have questions? We're here to help!
          </p>
          <a 
            href="/contact" 
            className="text-planify-600 font-medium hover:text-planify-700 underline transition-colors"
          >
            Contact our support team
          </a>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
