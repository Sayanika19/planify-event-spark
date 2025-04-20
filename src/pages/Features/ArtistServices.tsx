
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BackButton from "@/components/ui/back-button";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { User } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const artistPackages = {
  "makeup": [
    { id: 1, name: "Basic Makeup", price: 5000, description: "Party makeup" },
    { id: 2, name: "Premium Makeup", price: 8000, description: "HD makeup with hairstyling" },
    { id: 3, name: "Bridal Makeup", price: 15000, description: "Complete bridal package" }
  ],
  "mehendi": [
    { id: 4, name: "Basic Mehendi", price: 2000, description: "Simple designs" },
    { id: 5, name: "Premium Mehendi", price: 5000, description: "Intricate designs" },
    { id: 6, name: "Bridal Mehendi", price: 8000, description: "Full hands and feet" }
  ],
  "hair": [
    { id: 7, name: "Hair Styling", price: 3000, description: "Basic styling" },
    { id: 8, name: "Premium Styling", price: 5000, description: "Advanced styling with treatment" }
  ]
};

const ArtistServices = () => {
  const [artistType, setArtistType] = useState("");
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
      <h1 className="text-3xl font-bold mb-8">Artist Services</h1>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            Select Artist Service
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <Label>Service Type</Label>
              <Select onValueChange={setArtistType}>
                <SelectTrigger>
                  <SelectValue placeholder="Select service type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="makeup">Makeup Artist</SelectItem>
                  <SelectItem value="mehendi">Mehendi Artist</SelectItem>
                  <SelectItem value="hair">Hair Stylist</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {artistType && (
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {artistPackages[artistType as keyof typeof artistPackages].map((pkg) => (
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

export default ArtistServices;
