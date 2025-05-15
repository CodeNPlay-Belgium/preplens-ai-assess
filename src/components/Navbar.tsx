
import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react"; // Using BookOpen for a learning theme

const Navbar = () => {
  return (
    <nav className="bg-primary text-primary-foreground p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 text-xl font-bold">
          <BookOpen size={28} />
          <span>PrepLens</span>
        </Link>
        <div className="space-x-4">
          <Link to="/" className="hover:text-accent-foreground/80">Home</Link>
          <Link to="/upload" className="hover:text-accent-foreground/80">Upload</Link>
          {/* Placeholders for future navigation */}
          {/* <Link to="/quiz" className="hover:text-accent-foreground/80">Quiz</Link>
          <Link to="/report" className="hover:text-accent-foreground/80">Report</Link>
          <Link to="/training" className="hover:text-accent-foreground/80">Training</Link> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
