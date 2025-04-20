
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BackButton from "@/components/ui/back-button";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Camera } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const photographyPackages = {
  "wedding": [
    { id: 1, name: "Basic Package", price: 25000, hours: 4, description: "Photo + Video coverage" },
    { id: 2, name: "Premium Package", price: 45000, hours: 8, description: "Photo + Video + Drone coverage" },
    { id: 3, name: "Luxury Package", price: 75000, hours: 12, description: "Full day coverage + Album" }
  ],
  "birthday": [
    { id: 4, name: "Basic Coverage", price: 15000, hours: 3, description: "Photo coverage" },
    { id: 5, name: "Standard Coverage", price: 25000, hours: 4, description: "Photo + Video coverage" }
  ],
  "corporate": [
    { id: 6, name: "Half Day", price: 35000, hours: 4, description: "Photo + Video coverage" },
    { id: 7, name: "Full Day", price: 55000, hours: 8, description: "Complete event coverage" }
  ]
};

const PhotographyServices = () => {
  const [eventType, setEventType] = useState("");
  const [selectedPackage, setSelectedPackage] = useState<null | any>(null);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    if (selectedPackage) {
      // Add to cart logic here
      console.log("Added to cart:", selectedPackage);
      navigate("/cart");
    }
  };

  return (
    <div className="container mx-auto p-6">
      <BackButton />
      <h1 className="text-3xl font-bold mb-8">Photography Services</h1>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Camera className="h-5 w-5" />
            Select Photography Package
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
                {photographyPackages[eventType as keyof typeof photographyPackages].map((pkg) => (
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

export default PhotographyServices;
