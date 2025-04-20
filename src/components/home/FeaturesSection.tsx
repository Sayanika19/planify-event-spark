import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Calendar, 
  Share, 
  Users, 
  Bell, 
  DollarSign, 
  Mail,
  CheckCircle,
  Camera,
  Music,
  User
} from "lucide-react";

const features = [
  {
    icon: <CheckCircle className="h-10 w-10 text-planify-500" />,
    title: "End-to-End Event Planning",
    description: "One-stop solution for managing food, decor, venues, and services all in one place.",
    link: "/features/planning"
  },
  {
    icon: <Camera className="h-10 w-10 text-planify-500" />,
    title: "Photography Services",
    description: "Professional photographers and videographers for your events.",
    link: "/features/photography"
  },
  {
    icon: <Music className="h-10 w-10 text-planify-500" />,
    title: "DJ & Entertainment",
    description: "Book DJs and music services for your celebration.",
    link: "/features/entertainment"
  },
  {
    icon: <User className="h-10 w-10 text-planify-500" />,
    title: "Artist Services",
    description: "Makeup artists, mehendi artists, and hair stylists.",
    link: "/features/artists"
  },
  {
    icon: <Users className="h-10 w-10 text-planify-500" />,
    title: "AI-Powered Vendor Matching",
    description: "Smart recommendations based on your budget, location, and preferences.",
    link: "/features/vendors"
  },
  {
    icon: <DollarSign className="h-10 w-10 text-planify-500" />,
    title: "Budget Management",
    description: "Real-time budget tracking and smart suggestions to stay within limits.",
    link: "/features/budget"
  },
  {
    icon: <Calendar className="h-10 w-10 text-planify-500" />,
    title: "Task Checklist Generator",
    description: "Automatically generated to-do list based on selected event type.",
    link: "/features/tasks"
  },
  {
    icon: <Share className="h-10 w-10 text-planify-500" />,
    title: "Digital Invitation Sharing",
    description: "Share beautiful, customizable cards via WhatsApp, email, or QR code.",
    link: "/features/invitations"
  },
  {
    icon: <Bell className="h-10 w-10 text-planify-500" />,
    title: "Smart Notifications",
    description: "Alerts for deadlines, payments, vendor responses, and event day reminders.",
    link: "/features/notifications"
  },
  {
    icon: <Mail className="h-10 w-10 text-planify-500" />,
    title: "Invitation Card Ordering",
    description: "Browse & purchase customized physical cards with digital versions.",
    link: "/features/cards"
  },
  {
    icon: <Users className="h-10 w-10 text-planify-500" />,
    title: "Package Suggestions",
    description: "Get personalized vendor package combinations based on your budget.",
    link: "/features/packages"
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
            Powerful Features for Seamless Event Planning
          </h2>
          <p className="text-xl text-gray-600">
            Our comprehensive suite of tools and features makes event planning stress-free and enjoyable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Link to={feature.link} key={index}>
              <Card className="border border-gray-200 hover:shadow-lg transition-shadow duration-300 h-full">
                <CardHeader className="pb-2">
                  <div className="mb-2">{feature.icon}</div>
                  <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
