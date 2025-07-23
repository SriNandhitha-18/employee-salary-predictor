import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Info, Database, Brain, Code, Zap, Shield, Globe } from "lucide-react";

const About = () => {
  const technologies = [
    { name: "Python", description: "Core programming language for ML development" },
    { name: "scikit-learn", description: "Machine learning library for model training" },
    { name: "pandas", description: "Data manipulation and analysis" },
    { name: "numpy", description: "Numerical computing operations" },
    { name: "matplotlib", description: "Data visualization and plotting" },
    { name: "React", description: "Frontend framework for user interface" },
    { name: "TypeScript", description: "Type-safe JavaScript development" },
    { name: "Tailwind CSS", description: "Utility-first CSS framework" }
  ];

  const workflow = [
    {
      step: 1,
      title: "Data Collection",
      description: "Adult Census Income dataset from UCI ML Repository",
      icon: Database,
      details: "32,561 records with 15 attributes including age, education, occupation, and income level"
    },
    {
      step: 2,
      title: "Data Preprocessing",
      description: "Clean and prepare data for machine learning",
      icon: Code,
      details: "Handle missing values, encode categorical variables, and scale numerical features"
    },
    {
      step: 3,
      title: "Model Training",
      description: "Train Random Forest classifier with hyperparameter tuning",
      icon: Brain,
      details: "Use GridSearchCV for optimal parameters and 5-fold cross-validation"
    },
    {
      step: 4,
      title: "Model Evaluation",
      description: "Assess performance using multiple metrics",
      icon: Zap,
      details: "Accuracy, precision, recall, F1-score, and ROC-AUC analysis"
    },
    {
      step: 5,
      title: "Deployment",
      description: "Deploy model with web interface for predictions",
      icon: Globe,
      details: "RESTful API with React frontend for real-time salary predictions"
    }
  ];

  const futureEnhancements = [
    {
      category: "Model Improvements",
      items: [
        "Deep learning models (Neural Networks)",
        "Ensemble methods with model stacking",
        "Real-time learning with new data",
        "Advanced feature engineering"
      ]
    },
    {
      category: "System Integration",
      items: [
        "HRIS system integration",
        "RESTful API development",
        "Mobile application support",
        "Cloud deployment (AWS/Azure)"
      ]
    },
    {
      category: "Bias & Fairness",
      items: [
        "Algorithmic bias detection",
        "Demographic parity metrics",
        "Explainable AI with SHAP values",
        "Comprehensive audit trails"
      ]
    },
    {
      category: "Additional Features",
      items: [
        "Geographic salary variations",
        "Industry trend analysis",
        "Skills assessment integration",
        "Performance metric correlation"
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary shadow-glow">
          <Info className="w-8 h-8 text-primary-foreground" />
        </div>
        <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          About the Project
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Learn about the technology, methodology, and real-world applications of our 
          Employee Salary Prediction system.
        </p>
      </div>

      {/* Problem Statement */}
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="w-5 h-5" />
            Problem Statement & Real-World Relevance
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            The Employee Salary Prediction application addresses a critical challenge in HR analytics: 
            accurately classifying whether an employee's salary falls above or below the $50,000 threshold 
            based on demographic and professional attributes.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-primary">Business Applications</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Compensation planning and budget forecasting</li>
                <li>• Pay equity analysis across demographics</li>
                <li>• Recruitment strategy optimization</li>
                <li>• Performance evaluation correlation</li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-semibold text-primary">Organizational Benefits</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Data-driven HR decision making</li>
                <li>• Reduced bias in compensation</li>
                <li>• Regulatory compliance support</li>
                <li>• Strategic workforce insights</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Technologies */}
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle>Technologies & Libraries</CardTitle>
          <CardDescription>
            Modern tech stack for machine learning and web development
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {technologies.map((tech, index) => (
              <div key={index} className="p-4 border rounded-lg space-y-2">
                <Badge variant="secondary">{tech.name}</Badge>
                <p className="text-sm text-muted-foreground">{tech.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Workflow */}
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle>Step-by-Step Workflow</CardTitle>
          <CardDescription>
            Complete machine learning pipeline from data to deployment
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {workflow.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="flex gap-4 p-4 border rounded-lg">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <Badge variant="outline">Step {step.step}</Badge>
                      <h4 className="font-semibold">{step.title}</h4>
                    </div>
                    <p className="text-muted-foreground">{step.description}</p>
                    <p className="text-sm text-muted-foreground italic">{step.details}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Key Results */}
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle>Key Results & Model Performance</CardTitle>
          <CardDescription>
            Comprehensive evaluation of our Random Forest classifier
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-success">87.2%</div>
              <div className="text-sm text-muted-foreground">Overall Accuracy</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">82%</div>
              <div className="text-sm text-muted-foreground">Precision (&gt;$50K)</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-warning">78%</div>
              <div className="text-sm text-muted-foreground">Recall (&gt;$50K)</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-secondary">0.89</div>
              <div className="text-sm text-muted-foreground">ROC-AUC Score</div>
            </div>
          </div>

          <div className="mt-8 p-4 bg-muted rounded-lg">
            <h4 className="font-semibold mb-4">Sample Prediction Examples</h4>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <div className="font-medium">High Salary Prediction:</div>
                <div className="text-muted-foreground">
                  Input: Age=39, Education=Masters, Occupation=Tech-support, Hours=40<br/>
                  <span className="text-success font-medium">Prediction: Salary &gt; $50K (Probability: 73%)</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="font-medium">Low Salary Prediction:</div>
                <div className="text-muted-foreground">
                  Input: Age=23, Education=HS-grad, Occupation=Handlers-cleaners, Hours=30<br/>
                  <span className="text-warning font-medium">Prediction: Salary ≤ $50K (Probability: 91%)</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Future Enhancements */}
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle>Future Enhancements</CardTitle>
          <CardDescription>
            Planned improvements and advanced features for the next version
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {futureEnhancements.map((category, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-primary">{category.category}</h4>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* References */}
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle>References & Data Sources</CardTitle>
          <CardDescription>
            Academic sources and datasets used in this project
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold">Primary Dataset</h4>
              <div className="text-sm text-muted-foreground space-y-1">
                <div>• UCI Adult Dataset: Adult Census Income dataset</div>
                <div>• Original Study: Kohavi, R. (1996). Scaling Up the Accuracy of Naive-Bayes Classifiers</div>
                <div>• Archive: https://archive.ics.uci.edu/ml/datasets/adult</div>
              </div>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-semibold">Technical Resources</h4>
              <div className="text-sm text-muted-foreground space-y-1">
                <div>• Scikit-learn Documentation: https://scikit-learn.org/</div>
                <div>• Random Forest Algorithm: Breiman, L. (2001). Random Forests</div>
                <div>• Pandas Documentation: https://pandas.pydata.org/</div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-lg">
            <h4 className="font-semibold text-primary mb-2">Compliance & Ethics</h4>
            <div className="text-sm text-muted-foreground space-y-1">
              <div>• Fair Credit Reporting Act (FCRA): Guidelines for employment screening</div>
              <div>• Equal Employment Opportunity Commission (EEOC): Anti-discrimination regulations</div>
              <div>• General Data Protection Regulation (GDPR): Data privacy compliance</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;