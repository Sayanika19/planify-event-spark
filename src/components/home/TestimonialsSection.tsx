
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "Planify made my wedding planning so much easier! The AI-powered vendor matching saved me hours of research, and the budget tracker kept us perfectly on track.",
    author: "Emily Johnson",
    role: "Bride, Wedding 2023",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    quote: "As a corporate event planner, I handle multiple events simultaneously. Planify's task management and collaborative features have transformed my workflow completely.",
    author: "Michael Chen",
    role: "Corporate Event Planner",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    quote: "The invitation system is worth the subscription alone! I created gorgeous digital invites for my daughter's graduation party and tracked all RSVPs in one place.",
    author: "Sarah Williams",
    role: "Parent & Party Planner",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    quote: "I've planned three different events using Planify, and each one was smoother than the last. The AI assistant offered great suggestions I wouldn't have thought of.",
    author: "David Rodriguez",
    role: "Birthday Party Host",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-planify-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600">
            Thousands of event planners trust Planify to create memorable experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border border-gray-200 shadow-sm h-full">
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 inline-block mr-1">★</span>
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-6 flex-grow">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <div className="font-semibold">{testimonial.author}</div>
                      <div className="text-sm text-gray-500">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
