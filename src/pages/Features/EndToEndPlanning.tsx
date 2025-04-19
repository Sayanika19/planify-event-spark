
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Package, FileText, MapPin } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import BackButton from "@/components/ui/back-button";

const EndToEndPlanning = () => {
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
                    <SelectItem value="north-indian">North Indian</SelectItem>
                    <SelectItem value="south-indian">South Indian</SelectItem>
                    <SelectItem value="chinese">Chinese</SelectItem>
                    <SelectItem value="continental">Continental</SelectItem>
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
                <Label htmlFor="theme">Theme</Label>
                <Select>
                  <SelectTrigger id="theme">
                    <SelectValue placeholder="Select theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="modern">Modern</SelectItem>
                    <SelectItem value="traditional">Traditional</SelectItem>
                    <SelectItem value="rustic">Rustic</SelectItem>
                    <SelectItem value="minimalist">Minimalist</SelectItem>
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
                    <SelectItem value="royal">Royal</SelectItem>
                    <SelectItem value="bohemian">Bohemian</SelectItem>
                    <SelectItem value="contemporary">Contemporary</SelectItem>
                    <SelectItem value="vintage">Vintage</SelectItem>
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
                <Select>
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
              <div>
                <Label htmlFor="capacity">Venue Capacity</Label>
                <Select>
                  <SelectTrigger id="capacity">
                    <SelectValue placeholder="Select capacity range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="50-100">50-100 guests</SelectItem>
                    <SelectItem value="100-200">100-200 guests</SelectItem>
                    <SelectItem value="200-500">200-500 guests</SelectItem>
                    <SelectItem value="500+">500+ guests</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="w-full">Search Venues</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EndToEndPlanning;
