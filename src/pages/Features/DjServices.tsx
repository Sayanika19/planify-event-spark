
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BackButton from "@/components/ui/back-button";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Music } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const djPackages = {
  "wedding": [
    { id: 1, name: "Basic DJ", price: 20000, hours: 4, description: "DJ with basic sound system" },
    { id: 2, name: "Premium DJ", price: 35000, hours: 6, description: "DJ with premium sound and lighting" },
    { id: 3, name: "Ultimate DJ", price: 50000, hours: 8, description: "Complete entertainment package" }
  ],
  "birthday": [
    { id: 4, name: "Party DJ", price: 15000, hours: 3, description: "DJ with sound system" },
    { id: 5, name: "Premium Party", price: 25000, hours: 4, description: "DJ with effects and lighting" }
  ],
  "corporate": [
    { id: 6, name: "Corporate DJ", price: 30000, hours: 4, description: "Professional DJ setup" },
    { id: 7, name: "Premium Corporate", price: 45000, hours: 6, description: "Complete corporate entertainment" }
  ]
};

const DjServices = () => {
  const [eventType, setEventType] = useState("");
  const [selectedPackage, setSelectedPackage] = useState<null | any>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleAddToCart = () => {
    if (selectedPackage) {
      toast({
        title: "Added to cart",
        description: `${selectedPackage.name} package has been added to your cart.`,
      });
      navigate("/cart");
    }
  };

  return (
    <div className="container mx-auto p-6">
      <BackButton />
      <h1 className="text-3xl font-bold mb-8">DJ & Entertainment Services</h1>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Music className="h-5 w-5" />
            Select DJ Package
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <Label>Event Type</Label>
              <Select onValueChange={setEventType}>
                <SelectTrigger>
                  <SelectValue placeholder="Select event type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="wedding">Wedding</SelectItem>
                  <SelectItem value="birthday">Birthday</SelectItem>
                  <SelectItem value="corporate">Corporate Event</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {eventType && (
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {djPackages[eventType as keyof typeof djPackages].map((pkg) => (
                  <Card 
                    key={pkg.id}
                    className={`cursor-pointer transition-all ${
                      selectedPackage?.id === pkg.id ? 'ring-2 ring-planify-500' : ''
                    }`}
                    onClick={() => setSelectedPackage(pkg)}
                  >
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-lg">{pkg.name}</h3>
                      <p className="text-sm text-gray-600">{pkg.description}</p>
                      <p className="text-sm text-gray-600">{pkg.hours} hours</p>
                      <p className="font-bold text-planify-600 mt-2">₹{pkg.price.toLocaleString()}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            <Button 
              className="w-full"
              disabled={!selectedPackage}
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DjServices;
