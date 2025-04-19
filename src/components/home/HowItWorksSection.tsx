
import { CheckIcon } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Tell us about your event",
    description: "Share your event details, including type, expected guests, location, and budget.",
    image: "/images/planning-illustration.svg"
  },
  {
    number: "02",
    title: "Get AI-powered recommendations",
    description: "Receive personalized vendor suggestions and planning advice based on your preferences.",
    image: "/images/vendor-illustration.svg"
  },
  {
    number: "03",
    title: "Manage your budget and tasks",
    description: "Keep track of expenses, follow a personalized checklist, and stay within your budget.",
    image: "/images/budget-illustration.svg"
  },
  {
    number: "04",
    title: "Send invitations and finalize plans",
    description: "Create custom invitations, share them digitally, and finalize all event details.",
    image: "/images/invitation-illustration.svg"
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
            How Planify Makes Event Planning Simple
          </h2>
          <p className="text-xl text-gray-600">
            Our streamlined process takes you from initial concept to perfect event with ease.
          </p>
        </div>

        <div className="space-y-16 md:space-y-24">
          {steps.map((step, index) => (
            <div key={index} className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="text-planify-400 font-semibold text-lg mb-2">{step.number}</div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{step.title}</h3>
                <p className="text-lg text-gray-600 mb-6">{step.description}</p>
                <ul className="space-y-2">
                  {[1, 2, 3].map((item) => (
                    <li key={item} className="flex items-start">
                      <span className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-planify-100">
                        <CheckIcon className="h-3 w-3 text-planify-600" />
                      </span>
                      <span className="text-gray-600">
                        {index === 0 && item === 1 && "Simple form to capture all essential details"}
                        {index === 0 && item === 2 && "Save multiple event profiles for different occasions"}
                        {index === 0 && item === 3 && "AI assistance to help refine your vision"}
                        
                        {index === 1 && item === 1 && "Curated vendor suggestions matching your style"}
                        {index === 1 && item === 2 && "Compare vendor packages and availability"}
                        {index === 1 && item === 3 && "Read verified reviews from past clients"}
                        
                        {index === 2 && item === 1 && "Visual budget tracker with spending categories"}
                        {index === 2 && item === 2 && "Smart alerts when approaching budget limits"}
                        {index === 2 && item === 3 && "Prioritized task list with deadline reminders"}
                        
                        {index === 3 && item === 1 && "Beautiful digital invitation templates"}
                        {index === 3 && item === 2 && "Track RSVPs and guest responses"}
                        {index === 3 && item === 3 && "Finalize vendor bookings and payments"}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`flex justify-center ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <img 
                  src={step.image} 
                  alt={step.title} 
                  className="max-w-full rounded-lg shadow-lg border border-gray-100" 
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
