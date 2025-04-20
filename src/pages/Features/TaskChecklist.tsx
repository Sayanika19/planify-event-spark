
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BackButton from "@/components/ui/back-button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { CakeSlice } from "lucide-react";

const mockTasks = {
  "wedding": [
    "Book venue",
    "Arrange catering",
    "Order wedding cake",
    "Send invitations",
    "Book photographer",
    "Arrange transportation"
  ],
  "birthday": [
    "Choose theme",
    "Order cake",
    "Send invitations",
    "Plan activities",
    "Arrange decorations",
    "Order food"
  ],
  "corporate": [
    "Book conference room",
    "Arrange catering",
    "Send email invites",
    "Prepare agenda",
    "Set up AV equipment",
    "Order supplies"
  ]
};

const TaskChecklist = () => {
  const [selectedEvent, setSelectedEvent] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);
  const [selectedTasks, setSelectedTasks] = useState<string[]>([]);

  const handleEventChange = (value: string) => {
    setSelectedEvent(value);
    setTasks(mockTasks[value as keyof typeof mockTasks] || []);
    setSelectedTasks([]);
  };

  const handleTaskToggle = (task: string) => {
    setSelectedTasks(prev => 
      prev.includes(task) 
        ? prev.filter(t => t !== task)
        : [...prev, task]
    );
  };

  const handleConfirm = () => {
    console.log("Selected tasks:", selectedTasks);
  };

  return (
    <div className="container mx-auto p-6">
      <BackButton />
      <h1 className="text-3xl font-bold mb-8">Task Checklist Generator</h1>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CakeSlice className="h-5 w-5" />
            Event Tasks
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <Label htmlFor="eventType">Event Type</Label>
              <Select onValueChange={handleEventChange}>
                <SelectTrigger id="eventType">
                  <SelectValue placeholder="Select event type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="wedding">Wedding</SelectItem>
                  <SelectItem value="birthday">Birthday</SelectItem>
                  <SelectItem value="corporate">Corporate Event</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {tasks.length > 0 && (
              <div className="space-y-4">
                {tasks.map((task, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Checkbox 
                      id={`task-${index}`}
                      checked={selectedTasks.includes(task)}
                      onCheckedChange={() => handleTaskToggle(task)}
                    />
                    <Label htmlFor={`task-${index}`}>{task}</Label>
                  </div>
                ))}
                <Button 
                  className="w-full mt-4"
                  onClick={handleConfirm}
                  disabled={selectedTasks.length === 0}
                >
                  Confirm Selected Tasks
                </Button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TaskChecklist;
