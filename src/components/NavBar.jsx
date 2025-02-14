import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

export const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    setCurrentPath(window.location.pathname);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogoClick = (e) => {
    if (currentPath === "/") {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    // { name: "Reviews", href: "/reviews" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={cn("fixed w-full z-50 transition-all duration-300", {
        "bg-background shadow-md": isScrolled,
      })}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo/Brand with conditional click behavior */}
          <a
            className="flex-shrink-0 flex items-center cursor-pointer"
            href="/"
            onClick={handleLogoClick}
          >
            <img src={logo.src} alt="Tech Fix Pro" className="h-10" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  {
                    "text-white hover:text-white/80":
                      currentPath === "/" && !isScrolled,
                    "text-foreground hover:text-primary":
                      currentPath === "/" && isScrolled,
                    "text-foreground hover:text-primary": currentPath !== "/",
                  }
                )}
              >
                {item.name}
              </a>
            ))}
            <Button asChild className="w-40 text-white">
              <a href="/book">Book Repair</a>
            </Button>
          </div>

          {/* Mobile menu */}
          <div className="md:hidden flex items-center">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn({
                    "text-white hover:text-white/80":
                      currentPath === "/" && !isScrolled,
                    "text-foreground hover:text-primary":
                      currentPath === "/" && isScrolled,
                    "text-secondary hover:text-primary": currentPath !== "/",
                  })}
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Tech Fix Pro</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col space-y-3 mt-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-secondary hover:text-primary px-3 py-2 rounded-md text-base font-medium"
                    >
                      {item.name}
                    </a>
                  ))}
                  <Button asChild className="w-full mt-4">
                    <a href="/book">Book Repair</a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};
