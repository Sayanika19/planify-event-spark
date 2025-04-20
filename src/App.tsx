import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import EndToEndPlanning from "./pages/Features/EndToEndPlanning";
import VendorMatching from "./pages/Features/VendorMatching";
import BudgetManager from "./pages/Features/BudgetManager";
import PackageSuggestions from "./pages/Features/PackageSuggestions";
import TaskChecklist from "./pages/Features/TaskChecklist";
import DigitalInvitation from "./pages/Features/DigitalInvitation";
import SmartNotifications from "./pages/Features/SmartNotifications";
import InvitationCard from "./pages/Features/InvitationCard";
import PhotographyServices from "./pages/Features/PhotographyServices";
import DjServices from "./pages/Features/DjServices";
import ArtistServices from "./pages/Features/ArtistServices";
import Cart from "./pages/Cart";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/features" element={<Index />} />
          <Route path="/pricing" element={<Index />} />
          <Route path="/about" element={<Index />} />
          <Route path="/contact" element={<Index />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/features/planning" element={<EndToEndPlanning />} />
          <Route path="/features/vendors" element={<VendorMatching />} />
          <Route path="/features/budget" element={<BudgetManager />} />
          <Route path="/features/packages" element={<PackageSuggestions />} />
          <Route path="/features/tasks" element={<TaskChecklist />} />
          <Route path="/features/invitations" element={<DigitalInvitation />} />
          <Route path="/features/notifications" element={<SmartNotifications />} />
          <Route path="/features/cards" element={<InvitationCard />} />
          <Route path="/features/photography" element={<PhotographyServices />} />
          <Route path="/features/dj" element={<DjServices />} />
          <Route path="/features/artists" element={<ArtistServices />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
