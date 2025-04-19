import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Users, IndianRupee, MapPin } from "lucide-react";
import BackButton from "@/components/ui/back-button";

const VendorMatching = () => {
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
                <Input id="budget" type="number" placeholder="Enter your budget in INR" />
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <MapPin className="h-5 w-5 text-planify-500" />
              <div className="flex-1">
                <Label htmlFor="location">Location</Label>
                <Input id="location" placeholder="Enter your preferred location" />
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Users className="h-5 w-5 text-planify-500" />
              <div className="flex-1">
                <Label htmlFor="guests">Event Size</Label>
                <Input id="guests" type="number" placeholder="Number of guests" />
              </div>
            </div>

            <Button className="w-full">Find Matching Vendors</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VendorMatching;
