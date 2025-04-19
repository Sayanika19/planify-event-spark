
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DollarSign } from "lucide-react";

const BudgetManager = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Budget Management</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Budget Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <Label htmlFor="totalBudget">Total Budget</Label>
                <div className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-planify-500" />
                  <Input id="totalBudget" type="number" placeholder="Enter total budget" />
                </div>
              </div>
              <Button className="w-full">Update Budget</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Budget Allocation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <img 
                src="/images/budget-illustration.svg" 
                alt="Budget allocation chart" 
                className="w-full h-48 object-contain"
              />
              <Button className="w-full">View Detailed Report</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BudgetManager;
