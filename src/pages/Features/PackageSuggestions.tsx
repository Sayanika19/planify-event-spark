import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Package } from "lucide-react";
import BackButton from "@/components/ui/back-button";

interface PackageOption {
  title: string;
  food: string;
  decor: string;
  photography: string;
  totalCost: number;
}

const PackageSuggestions = () => {
  const [budget, setBudget] = useState<number>(0);
  const [showPackages, setShowPackages] = useState(false);

  const generatePackages = (budget: number): PackageOption[] => {
    // Simple logic to generate different package combinations based on budget
    const packages: PackageOption[] = [
      {
        title: "Essential Package",
        food: "Basic buffet service",
        decor: "Simple elegant decor",
        photography: "4-hour photography coverage",
        totalCost: budget * 0.8,
      },
      {
        title: "Premium Package",
        food: "Premium buffet with live stations",
        decor: "Elaborate themed decor",
        photography: "Full-day photography & videography",
        totalCost: budget * 0.95,
      },
      {
        title: "Custom Mix",
        food: "Semi-premium buffet",
        decor: "Modern minimalist decor",
        photography: "6-hour photography coverage",
        totalCost: budget * 0.85,
      },
    ];
    return packages;
  };

  return (
    <div className="container mx-auto p-6">
      <BackButton />
      <h1 className="text-3xl font-bold mb-8">Package Suggestions</h1>
      
      <Card className="max-w-2xl mx-auto mb-8">
        <CardHeader>
          <CardTitle>Enter Your Budget</CardTitle>
          <CardDescription>We'll suggest the best vendor combinations for you</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Package className="h-5 w-5 text-planify-500" />
              <div className="flex-1">
                <Label htmlFor="budget">Total Budget (₹)</Label>
                <Input 
                  id="budget" 
                  type="number" 
                  placeholder="Enter your budget in INR"
                  value={budget || ''}
                  onChange={(e) => setBudget(Number(e.target.value))}
                />
              </div>
            </div>
            <Button 
              className="w-full"
              onClick={() => setShowPackages(true)}
              disabled={!budget}
            >
              View Package Suggestions
            </Button>
          </div>
        </CardContent>
      </Card>

      {showPackages && budget > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {generatePackages(budget).map((pkg, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl">{pkg.title}</CardTitle>
                <CardDescription className="text-lg font-semibold text-planify-500">
                  ₹{pkg.totalCost.toLocaleString('en-IN')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p><strong>Food:</strong> {pkg.food}</p>
                  <p><strong>Decor:</strong> {pkg.decor}</p>
                  <p><strong>Photography:</strong> {pkg.photography}</p>
                  <Button className="w-full mt-4">Select Package</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default PackageSuggestions;
