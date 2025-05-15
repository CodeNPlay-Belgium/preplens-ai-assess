
import FileUploadArea from "@/components/FileUploadArea";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const UploadPage = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold text-foreground mb-2">Upload Your Course Material</h1>
      <p className="text-muted-foreground mb-8">
        Upload your documents (PDF, DOCX, PPT) to start the assessment process.
      </p>
      <FileUploadArea />
      <div className="mt-8">
        <p className="text-sm text-muted-foreground mb-4">
          After uploading, we'll process your content and prepare your personalized quiz.
        </p>
        {/* This button will eventually be enabled/shown after a successful upload and processing */}
        <Link to="/quiz">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Proceed to Quiz (Placeholder) <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
        </Link>
      </div>
    </div>
  );
};

export default UploadPage;
