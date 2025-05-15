
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Upload, FileText, Video } from "lucide-react";

const Index = () => {
  return (
    <div className="text-center">
      <header className="py-16 bg-secondary rounded-lg shadow-sm mb-12">
        <div className="container mx-auto px-4">
          <BookOpen size={64} className="mx-auto mb-6 text-primary" />
          <h1 className="text-5xl font-bold text-primary mb-4">
            Welcome to PrepLens
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Gauge your exam readiness like never before. Upload your course content, get quizzed with AI-powered adaptive questions, and receive personalized video training on your weak spots.
          </p>
          <Link to="/upload">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </header>

      <section className="py-12">
        <h2 className="text-3xl font-semibold text-foreground mb-10">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-md">
            <Upload size={48} className="text-primary mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">1. Upload Content</h3>
            <p className="text-muted-foreground text-sm">
              Easily upload your PDF, DOCX, or PPT course materials.
            </p>
          </div>
          <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-md">
            <FileText size={48} className="text-primary mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">2. AI-Powered Quiz</h3>
            <p className="text-muted-foreground text-sm">
              Get tested with questions that adapt to your knowledge level.
            </p>
          </div>
          <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-md">
            <Video size={48} className="text-primary mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">3. Personalized Training</h3>
            <p className="text-muted-foreground text-sm">
              Receive custom video lessons on topics you need to improve.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-secondary rounded-lg shadow-sm my-12">
         <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-primary mb-6">Ready to Ace Your Exams?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                Stop guessing where to focus your study time. PrepLens gives you the clarity and tools to succeed.
            </p>
            <Link to="/upload">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Start Your First Assessment
                </Button>
            </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
