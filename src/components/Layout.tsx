
import Navbar from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="bg-secondary text-secondary-foreground text-center p-4 mt-auto">
        © {new Date().getFullYear()} PrepLens. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;
