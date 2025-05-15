
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BarChart2, ArrowRight, BookOpen } from "lucide-react"; // Changed icon

const ReportPage = () => {
  return (
    <div className="text-center py-10">
      <BarChart2 size={64} className="mx-auto mb-6 text-primary" />
      <h1 className="text-4xl font-bold text-foreground mb-4">Performance Report</h1>
      <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
        Here, you'll see a detailed analysis of your quiz performance, highlighting your strengths and areas for improvement. This section is currently a placeholder.
      </p>
      <div className="bg-card p-8 rounded-lg shadow-md max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold text-foreground mb-2">Your Score: 75%</h2>
        <p className="text-muted-foreground mb-6">Great effort! Let's look at the details.</p>
        <div>
            <h3 className="text-xl font-medium text-foreground mb-2">Weak Areas Identified:</h3>
            <ul className="list-disc list-inside text-left text-muted-foreground space-y-1">
                <li>Branding Strategies (Chapter 5)</li>
                <li>Analytics Interpretation (Chapter 7)</li>
            </ul>
        </div>
      </div>
      <p className="text-sm text-muted-foreground mt-8 mb-4">
        Based on this report, personalized video training will be generated.
      </p>
      <Link to="/training">
        <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
          View Video Training (Placeholder) <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </Link>
    </div>
  );
};

export default ReportPage;
