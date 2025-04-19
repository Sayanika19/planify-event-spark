
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BackButton from "@/components/ui/back-button";
import { Share } from "lucide-react";

const DigitalInvitation = () => {
  return (
    <div className="container mx-auto p-6">
      <BackButton />
      <h1 className="text-3xl font-bold mb-8">Digital Invitation Sharing</h1>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Share className="h-5 w-5" />
            Design Your Invitation
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Coming soon - Digital Invitation Designer</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default DigitalInvitation;
