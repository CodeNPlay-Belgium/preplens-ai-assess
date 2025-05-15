
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Video, BookOpen, Bookmark, Download } from "lucide-react"; // Added more icons

const TrainingPage = () => {
  return (
    <div className="text-center py-10">
      <Video size={64} className="mx-auto mb-6 text-primary" />
      <h1 className="text-4xl font-bold text-foreground mb-4">Personalized Video Training</h1>
      <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
        This page will display AI-generated video lessons tailored to your weak areas identified in the report. For now, it's a placeholder.
      </p>
      <div className="bg-card p-6 rounded-lg shadow-md max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-foreground mb-4">Your Custom Lessons:</h2>
        
        {/* Example Video Lesson 1 */}
        <div className="mb-6 p-4 border border-border rounded-md">
            <h3 className="text-xl font-medium text-foreground mb-2">Branding Strategy Frameworks</h3>
            <div className="aspect-video bg-muted rounded flex items-center justify-center text-muted-foreground mb-3">
                <Video size={48} />
                <span className="ml-2">(Video player placeholder)</span>
            </div>
            <p className="text-sm text-muted-foreground mb-3">A short video explaining key branding frameworks relevant to your course.</p>
            <div className="flex space-x-2">
                <Button variant="outline" size="sm"><Bookmark className="mr-2 h-4 w-4" /> Bookmark</Button>
                <Button variant="outline" size="sm"><Download className="mr-2 h-4 w-4" /> Download</Button>
            </div>
        </div>

        {/* Example Video Lesson 2 */}
        <div className="mb-6 p-4 border border-border rounded-md">
            <h3 className="text-xl font-medium text-foreground mb-2">Understanding Analytics Principles</h3>
            <div className="aspect-video bg-muted rounded flex items-center justify-center text-muted-foreground mb-3">
                <Video size={48} />
                <span className="ml-2">(Video player placeholder)</span>
            </div>
            <p className="text-sm text-muted-foreground mb-3">Core concepts of analytics and their application as discussed in your materials.</p>
            <div className="flex space-x-2">
                <Button variant="outline" size="sm"><Bookmark className="mr-2 h-4 w-4" /> Bookmark</Button>
                <Button variant="outline" size="sm"><Download className="mr-2 h-4 w-4" /> Download</Button>
            </div>
        </div>
      </div>
      <p className="text-sm text-muted-foreground mt-8 mb-4">
        You can revisit these videos anytime. Good luck with your studies!
      </p>
      <Link to="/">
        <Button size="lg" variant="outline">
          <BookOpen className="mr-2 h-5 w-5" /> Back to Home
        </Button>
      </Link>
    </div>
  );
};

export default TrainingPage;
