
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="py-16 md:py-24 bg-purple-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Ready to Plan Your Perfect Event?
          </h2>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            Join thousands of event planners who have simplified their planning process with Planify. Try it free for 14 days.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-planify-600 hover:bg-gray-100 hover:text-planify-700 px-8 py-6 text-lg font-medium h-auto">
              Get Started Free
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-medium h-auto">
              Request a Demo
            </Button>
          </div>
          <p className="mt-6 text-sm opacity-80">
            No credit card required. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
