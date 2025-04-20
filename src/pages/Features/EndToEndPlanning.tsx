
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Package, FileText, MapPin } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import BackButton from "@/components/ui/back-button";
import { useState } from "react";

const mockVenues = {
  "delhi": [
    { id: 1, name: "Royal Palace", capacity: "200-500", price: "₹200,000", address: "Dwarka, Delhi" },
    { id: 2, name: "Garden View", capacity: "100-200", price: "₹150,000", address: "Rohini, Delhi" }
  ],
  "mumbai": [
    { id: 3, name: "Sea View Hall", capacity: "500+", price: "₹300,000", address: "Bandra, Mumbai" },
    { id: 4, name: "Grand Ballroom", capacity: "200-500", price: "₹250,000", address: "Andheri, Mumbai" }
  ]
};

const mockThemeStyles = {
  "wedding": ["Royal", "Traditional", "Modern", "Contemporary"],
  "birthday": ["Fun", "Casual", "Themed", "Elegant"],
  "corporate": ["Professional", "Modern", "Minimal", "Tech"],
  "funeral": ["Respectful", "Traditional", "Simple", "Cultural"]
};

const EndToEndPlanning = () => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedOccasion, setSelectedOccasion] = useState("");
  const [venues, setVenues] = useState<any[]>([]);
  const [themeStyles, setThemeStyles] = useState<string[]>([]);

  const handleLocationChange = (value: string) => {
    setSelectedLocation(value);
    setVenues(mockVenues[value as keyof typeof mockVenues] || []);
  };

  const handleOccasionChange = (value: string) => {
    setSelectedOccasion(value);
    setThemeStyles(mockThemeStyles[value as keyof typeof mockThemeStyles] || []);
  };

  return (
    <div className="container mx-auto p-6">
      <BackButton />
      <h1 className="text-3xl font-bold mb-8">End-to-End Event Planning</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="h-5 w-5" />
              Food Services
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <Label htmlFor="cuisine">Cuisine Type</Label>
                <Select>
                  <SelectTrigger id="cuisine">
                    <SelectValue placeholder="Select cuisine type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="north-indian">North Indian (₹800/plate)</SelectItem>
                    <SelectItem value="south-indian">South Indian (₹600/plate)</SelectItem>
                    <SelectItem value="chinese">Chinese (₹700/plate)</SelectItem>
                    <SelectItem value="continental">Continental (₹900/plate)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="guests">Number of Guests</Label>
                <Input id="guests" type="number" placeholder="Enter number of guests" />
              </div>
              <Button className="w-full">Find Caterers</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Decor Services
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <Label htmlFor="occasion">Occasion Type</Label>
                <Select onValueChange={handleOccasionChange}>
                  <SelectTrigger id="occasion">
                    <SelectValue placeholder="Select occasion" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="wedding">Wedding</SelectItem>
                    <SelectItem value="birthday">Birthday</SelectItem>
                    <SelectItem value="corporate">Corporate Event</SelectItem>
                    <SelectItem value="funeral">Funeral</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="themeStyle">Theme Style</Label>
                <Select>
                  <SelectTrigger id="themeStyle">
                    <SelectValue placeholder="Select theme style" />
                  </SelectTrigger>
                  <SelectContent>
                    {themeStyles.map((style) => (
                      <SelectItem key={style} value={style.toLowerCase()}>
                        {style}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="color">Color Scheme</Label>
                <Input id="color" placeholder="Enter preferred colors" />
              </div>
              <Button className="w-full">Browse Decorators</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Venue Selection
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <Label htmlFor="location">Location</Label>
                <Select onValueChange={handleLocationChange}>
                  <SelectTrigger id="location">
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="delhi">Delhi NCR</SelectItem>
                    <SelectItem value="mumbai">Mumbai</SelectItem>
                    <SelectItem value="bangalore">Bangalore</SelectItem>
                    <SelectItem value="hyderabad">Hyderabad</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {venues.length > 0 && (
                <div className="space-y-4">
                  <Label>Available Venues</Label>
                  {venues.map((venue) => (
                    <Card key={venue.id} className="p-4">
                      <h3 className="font-semibold">{venue.name}</h3>
                      <p className="text-sm text-muted-foreground">Capacity: {venue.capacity}</p>
                      <p className="text-sm text-muted-foreground">Price: {venue.price}</p>
                      <p className="text-sm text-muted-foreground">Address: {venue.address}</p>
                    </Card>
                  ))}
                </div>
              )}

              <Button className="w-full">Book Venue</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EndToEndPlanning;
