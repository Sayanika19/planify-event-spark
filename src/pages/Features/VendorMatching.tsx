
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Users, IndianRupee, MapPin } from "lucide-react";
import BackButton from "@/components/ui/back-button";
import { useState } from "react";

const mockVendors = [
  {
    id: 1,
    name: "Royal Caterers",
    type: "Catering",
    rating: 4.5,
    price: "₹1,200 per plate",
    location: "Mumbai"
  },
  {
    id: 2,
    name: "Elegant Decorators",
    type: "Decoration",
    rating: 4.8,
    price: "₹45,000 onwards",
    location: "Mumbai"
  },
  {
    id: 3,
    name: "Sound Masters",
    type: "DJ Services",
    rating: 4.2,
    price: "₹25,000 per event",
    location: "Mumbai"
  }
];

const VendorMatching = () => {
  const [budget, setBudget] = useState("");
  const [location, setLocation] = useState("");
  const [eventSize, setEventSize] = useState("");
  const [showVendors, setShowVendors] = useState(false);

  const handleSearch = () => {
    setShowVendors(true);
  };

  return (
    <div className="container mx-auto p-6">
      <BackButton />
      <h1 className="text-3xl font-bold mb-8">AI-Powered Vendor Matching</h1>
      
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Find Your Perfect Vendors</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <IndianRupee className="h-5 w-5 text-planify-500" />
              <div className="flex-1">
                <Label htmlFor="budget">Budget Range</Label>
                <Input 
                  id="budget" 
                  type="number" 
                  placeholder="Enter your budget in INR"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                />
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <MapPin className="h-5 w-5 text-planify-500" />
              <div className="flex-1">
                <Label htmlFor="location">Location</Label>
                <Input 
                  id="location" 
                  placeholder="Enter your preferred location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Users className="h-5 w-5 text-planify-500" />
              <div className="flex-1">
                <Label htmlFor="guests">Event Size</Label>
                <Input 
                  id="guests" 
                  type="number" 
                  placeholder="Number of guests"
                  value={eventSize}
                  onChange={(e) => setEventSize(e.target.value)}
                />
              </div>
            </div>

            <Button 
              className="w-full"
              onClick={handleSearch}
            >
              Find Matching Vendors
            </Button>

            {showVendors && (
              <div className="space-y-4 mt-6">
                <h3 className="font-semibold text-lg">Matched Vendors</h3>
                {mockVendors.map((vendor) => (
                  <Card key={vendor.id} className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold">{vendor.name}</h4>
                        <p className="text-sm text-muted-foreground">{vendor.type}</p>
                        <p className="text-sm">Location: {vendor.location}</p>
                        <p className="text-sm">Rating: {vendor.rating}/5</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-planify-600">{vendor.price}</p>
                        <Button size="sm" className="mt-2">Add to Cart</Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VendorMatching;
