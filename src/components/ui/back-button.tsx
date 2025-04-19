
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      variant="ghost"
      className="mb-4"
      onClick={() => navigate(-1)}
    >
      <ArrowLeft className="mr-2 h-4 w-4" />
      Back
    </Button>
  );
};

export default BackButton;
