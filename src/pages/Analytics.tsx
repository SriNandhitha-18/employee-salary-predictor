import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BarChart3, TrendingUp, Users, Target, Brain, Database } from "lucide-react";

const Analytics = () => {
  const modelMetrics = [
    { label: "Overall Accuracy", value: 87.2, color: "bg-success" },
    { label: "Precision (>$50K)", value: 82.0, color: "bg-primary" },
    { label: "Recall (>$50K)", value: 78.0, color: "bg-warning" },
    { label: "F1-Score", value: 80.0, color: "bg-secondary" }
  ];

  const featureImportance = [
    { feature: "Education Level", importance: 28, description: "Highest predictor of salary category" },
    { feature: "Age", importance: 22, description: "Experience and career progression factor" },
    { feature: "Work Hours", importance: 18, description: "Full-time vs part-time employment impact" },
    { feature: "Occupation Type", importance: 15, description: "Industry and role-specific salary patterns" },
    { feature: "Marital Status", importance: 10, description: "Economic stability indicator" },
    { feature: "Relationship", importance: 7, description: "Household economic factors" }
  ];

  const datasetStats = [
    { label: "Total Records", value: "32,561", icon: Database },
    { label: "Features Used", value: "14", icon: Target },
    { label: "Training Set", value: "22,792", icon: Brain },
    { label: "Test Set", value: "9,769", icon: BarChart3 }
  ];

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary shadow-glow">
          <BarChart3 className="w-8 h-8 text-primary-foreground" />
        </div>
        <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Model Analytics Dashboard
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Comprehensive analysis of our Random Forest classifier's performance and insights
          from the Adult Census Income dataset.
        </p>
      </div>

      {/* Dataset Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {datasetStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="shadow-soft">
              <CardContent className="flex items-center p-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mr-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Model Performance */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5" />
              Model Performance Metrics
            </CardTitle>
            <CardDescription>
              Key performance indicators for salary prediction accuracy
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {modelMetrics.map((metric, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{metric.label}</span>
                  <Badge variant="secondary">{metric.value}%</Badge>
                </div>
                <Progress value={metric.value} className="h-2" />
              </div>
            ))}
            
            <div className="mt-6 p-4 bg-muted rounded-lg">
              <h4 className="font-semibold mb-2">Model Configuration</h4>
              <div className="text-sm text-muted-foreground space-y-1">
                <div>Algorithm: Random Forest Classifier</div>
                <div>Trees: 100 estimators</div>
                <div>Max Depth: 10</div>
                <div>Cross-Validation: 5-fold</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Feature Importance */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Feature Importance Analysis
            </CardTitle>
            <CardDescription>
              Relative importance of each feature in salary prediction
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {featureImportance.map((feature, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{feature.feature}</span>
                  <Badge variant="outline">{feature.importance}%</Badge>
                </div>
                <Progress value={feature.importance} className="h-2" />
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Confusion Matrix & Results */}
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="w-5 h-5" />
            Sample Prediction Results
          </CardTitle>
          <CardDescription>
            Real examples from our test dataset showing model predictions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                input: "Age: 39, Masters, Tech-support, 40hrs",
                prediction: "Above $50K",
                probability: 73,
                actual: "Above $50K",
                correct: true
              },
              {
                input: "Age: 23, HS-grad, Handlers-cleaners, 30hrs",
                prediction: "Below $50K",
                probability: 91,
                actual: "Below $50K",
                correct: true
              },
              {
                input: "Age: 45, Bachelors, Exec-managerial, 50hrs",
                prediction: "Above $50K",
                probability: 89,
                actual: "Above $50K",
                correct: true
              },
              {
                input: "Age: 28, Some-college, Sales, 35hrs",
                prediction: "Below $50K",
                probability: 64,
                actual: "Above $50K",
                correct: false
              },
              {
                input: "Age: 52, Doctorate, Prof-specialty, 45hrs",
                prediction: "Above $50K",
                probability: 95,
                actual: "Above $50K",
                correct: true
              },
              {
                input: "Age: 19, 11th, Farming-fishing, 25hrs",
                prediction: "Below $50K",
                probability: 97,
                actual: "Below $50K",
                correct: true
              }
            ].map((example, index) => (
              <div key={index} className="p-4 border rounded-lg space-y-3">
                <div className="text-sm text-muted-foreground">{example.input}</div>
                <div className="flex items-center justify-between">
                  <span className={`font-medium ${
                    example.prediction === "Above $50K" ? "text-success" : "text-warning"
                  }`}>
                    {example.prediction}
                  </span>
                  <Badge variant={example.correct ? "default" : "destructive"}>
                    {example.correct ? "Correct" : "Incorrect"}
                  </Badge>
                </div>
                <div className="text-sm text-muted-foreground">
                  Confidence: {example.probability}%
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Benefits Section */}
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle>Organizational Benefits</CardTitle>
          <CardDescription>
            How this salary prediction model benefits HR departments and organizations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-primary">Data-Driven Decisions</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Eliminate bias in salary predictions</li>
                <li>• Objective evaluation of compensation levels</li>
                <li>• Evidence-based HR policy development</li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-primary">Cost Optimization</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Better budget planning and resource allocation</li>
                <li>• Identify cost-effective hiring strategies</li>
                <li>• Optimize compensation packages</li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-primary">Compliance & Fairness</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Ensure fair compensation practices</li>
                <li>• Meet regulatory compliance requirements</li>
                <li>• Detect potential pay disparities</li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-primary">Strategic Insights</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Understand workforce patterns</li>
                <li>• Market trend analysis</li>
                <li>• Competitive salary benchmarking</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Analytics;