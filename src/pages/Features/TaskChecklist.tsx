
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BackButton from "@/components/ui/back-button";
import { Calendar } from "lucide-react";

const TaskChecklist = () => {
  return (
    <div className="container mx-auto p-6">
      <BackButton />
      <h1 className="text-3xl font-bold mb-8">Task Checklist Generator</h1>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Event Tasks
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Coming soon - Task Checklist Generator</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default TaskChecklist;
