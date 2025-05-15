
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText, ArrowRight } from "lucide-react";

const QuizPage = () => {
  return (
    <div className="text-center py-10">
      <FileText size={64} className="mx-auto mb-6 text-primary" />
      <h1 className="text-4xl font-bold text-foreground mb-4">Quiz Section</h1>
      <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
        This is where the adaptive quiz based on your uploaded content will appear.
        For now, it's a placeholder.
      </p>
      <div className="bg-card p-8 rounded-lg shadow-md max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold text-foreground mb-4">Question 1 of X</h2>
        <p className="text-muted-foreground mb-6">
            What is the primary focus of marketing strategy according to Chapter 3?
        </p>
        <div className="space-y-3 mb-6">
            <Button variant="outline" className="w-full justify-start">A) Product Development</Button>
            <Button variant="outline" className="w-full justify-start">B) Customer Acquisition</Button>
            <Button variant="outline" className="w-full justify-start">C) Financial Planning</Button>
            <Button variant="outline" className="w-full justify-start">D) Supply Chain Management</Button>
        </div>
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Next Question</Button>
      </div>
      <p className="text-sm text-muted-foreground mt-8 mb-4">
        Once you complete the quiz, you'll be taken to your performance report.
      </p>
      <Link to="/report">
        <Button size="lg" variant="outline">
          Go to Report (Placeholder) <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </Link>
    </div>
  );
};

export default QuizPage;
