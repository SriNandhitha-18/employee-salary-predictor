import { Button } from "@/components/ui/button";
import { Calculator, BarChart3, Info } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Predict", icon: Calculator },
    { path: "/analytics", label: "Analytics", icon: BarChart3 },
    { path: "/about", label: "About", icon: Info }
  ];

  return (
    <nav className="border-b bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
              <Calculator className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-xl">Employee Salary Predictor</span>
          </div>

          <div className="flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Button
                  key={item.path}
                  variant={isActive ? "default" : "ghost"}
                  size="sm"
                  asChild
                  className={isActive ? "bg-gradient-primary shadow-glow" : ""}
                >
                  <Link to={item.path} className="flex items-center gap-2">
                    <Icon className="w-4 h-4" />
                    {item.label}
                  </Link>
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;