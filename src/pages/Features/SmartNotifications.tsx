
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BackButton from "@/components/ui/back-button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Bell, MessageCircle } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

const notificationTypes = [
  { id: "venue", label: "Venue Availability Updates" },
  { id: "food", label: "Food Service Confirmations" },
  { id: "decor", label: "Decor Finalization" },
  { id: "cart", label: "Cart Updates" },
  { id: "offers", label: "Special Offers & Discounts" },
  { id: "payments", label: "Payment Reminders" }
];

const SmartNotifications = () => {
  const [phone, setPhone] = useState("");
  const [selectedNotifications, setSelectedNotifications] = useState<string[]>([]);

  const toggleNotification = (id: string) => {
    setSelectedNotifications(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const handleSubmit = () => {
    console.log("Notifications set for:", phone, selectedNotifications);
  };

  return (
    <div className="container mx-auto p-6">
      <BackButton />
      <h1 className="text-3xl font-bold mb-8">Smart Notifications</h1>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="h-5 w-5" />
            Notification Settings
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <Label htmlFor="phone">Phone Number for Notifications</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <p className="text-sm text-muted-foreground mt-1">
                You'll receive notifications via SMS and WhatsApp
              </p>
            </div>

            <div className="space-y-4">
              <Label>Select Notification Types</Label>
              {notificationTypes.map((type) => (
                <div key={type.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={type.id}
                    checked={selectedNotifications.includes(type.id)}
                    onCheckedChange={() => toggleNotification(type.id)}
                  />
                  <Label htmlFor={type.id}>{type.label}</Label>
                </div>
              ))}
            </div>

            <Button 
              className="w-full"
              onClick={handleSubmit}
              disabled={!phone || selectedNotifications.length === 0}
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Set Up Notifications
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SmartNotifications;
