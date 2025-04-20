import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BackButton from "@/components/ui/back-button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { Mail, Gift, Upload } from "lucide-react";

const mockTemplates = [
  {
    id: 1,
    name: "Traditional Wedding",
    price: "₹2,000",
    description: "Elegant design with traditional Indian motifs"
  },
  {
    id: 2,
    name: "Modern Birthday",
    price: "₹1,500",
    description: "Contemporary design with vibrant colors"
  },
  {
    id: 3,
    name: "Corporate Event",
    price: "₹1,800",
    description: "Professional design for business events"
  }
];

const InvitationCard = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<number | null>(null);
  const [backgroundImage, setBackgroundImage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    eventName: "",
    date: "",
    venue: "",
    message: ""
  });

  const handleTemplateSelect = (id: number) => {
    setSelectedTemplate(id);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBackgroundImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <BackButton />
      <h1 className="text-3xl font-bold mb-8">Invitation Card Designer</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Gift className="h-5 w-5" />
              Design Your Card
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <Label htmlFor="template">Select Template</Label>
                <Select onValueChange={(value) => handleTemplateSelect(Number(value))}>
                  <SelectTrigger id="template">
                    <SelectValue placeholder="Choose a template" />
                  </SelectTrigger>
                  <SelectContent>
                    {mockTemplates.map((template) => (
                      <SelectItem key={template.id} value={template.id.toString()}>
                        {template.name} - {template.price}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="background">Upload Background Image</Label>
                <div className="flex items-center gap-2">
                  <Input
                    id="background"
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                  <Button
                    variant="outline"
                    onClick={() => document.getElementById('background')?.click()}
                    className="w-full"
                  >
                    <Upload className="mr-2 h-4 w-4" />
                    Choose Image
                  </Button>
                </div>
              </div>

              <div>
                <Label htmlFor="eventName">Event Name</Label>
                <Input
                  id="eventName"
                  value={formData.eventName}
                  onChange={(e) => setFormData({...formData, eventName: e.target.value})}
                />
              </div>

              <div>
                <Label htmlFor="date">Date</Label>
                <Input
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                />
              </div>

              <div>
                <Label htmlFor="venue">Venue</Label>
                <Input
                  id="venue"
                  value={formData.venue}
                  onChange={(e) => setFormData({...formData, venue: e.target.value})}
                />
              </div>

              <div>
                <Label htmlFor="message">Personal Message</Label>
                <Input
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>

              <Button className="w-full">Add to Cart - ₹2,000</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              Preview
            </CardTitle>
          </CardHeader>
          <CardContent>
            {selectedTemplate ? (
              <div 
                className="border p-6 rounded-lg space-y-4"
                style={{
                  backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  minHeight: '400px'
                }}
              >
                <h3 className="text-xl font-semibold text-center">{formData.eventName || "Event Name"}</h3>
                <p className="text-center">Date: {formData.date || "TBD"}</p>
                <p className="text-center">Venue: {formData.venue || "TBD"}</p>
                <p className="text-center italic">{formData.message || "Your personal message here"}</p>
              </div>
            ) : (
              <p className="text-muted-foreground text-center">Select a template to see preview</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InvitationCard;
