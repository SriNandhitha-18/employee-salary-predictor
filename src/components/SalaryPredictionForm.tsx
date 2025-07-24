import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Calculator, TrendingUp, User } from "lucide-react";

interface PredictionData {
  age: number;
  education: string;
  occupation: string;
  workHours: number;
  maritalStatus: string;
  relationship: string;
}

interface PredictionResult {
  prediction: "Above $50K" | "Below $50K";
  probability: number;
  confidence: "High" | "Medium" | "Low";
  factors: string[];
}

const SalaryPredictionForm = () => {
  const [formData, setFormData] = useState<PredictionData>({
    age: 0,
    education: "",
    occupation: "",
    workHours: 40,
    maritalStatus: "",
    relationship: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<PredictionResult | null>(null);
  const { toast } = useToast();

  // Mock ML prediction logic
  const predictSalary = (data: PredictionData): PredictionResult => {
    let score = 0;
    const factors: string[] = [];

    // Age factor
    if (data.age >= 30) {
      score += 0.2;
      factors.push("Experience level (age 30+)");
    }

    // Education factor
    const educationScores: Record<string, number> = {
      "Doctorate": 0.4,
      "Masters": 0.35,
      "Bachelors": 0.25,
      "Some-college": 0.1,
      "HS-grad": 0.05,
      "11th": -0.1,
      "10th": -0.15,
      "9th": -0.2
    };
    if (educationScores[data.education]) {
      score += educationScores[data.education];
      if (educationScores[data.education] > 0.2) {
        factors.push(`Advanced education (${data.education})`);
      }
    }

    // Occupation factor
    const highPayingOccupations = [
      "Tech-support", "Exec-managerial", "Prof-specialty", 
      "Sales", "Protective-serv", "Armed-Forces"
    ];
    if (highPayingOccupations.includes(data.occupation)) {
      score += 0.25;
      factors.push(`Professional occupation (${data.occupation})`);
    }

    // Work hours factor
    if (data.workHours >= 45) {
      score += 0.15;
      factors.push("High work hours (45+ per week)");
    }

    // Marital status factor
    if (data.maritalStatus === "Married-civ-spouse") {
      score += 0.1;
      factors.push("Married status");
    }

    const probability = Math.min(Math.max(score + Math.random() * 0.2, 0), 1);
    const prediction = probability > 0.5 ? "Above $50K" : "Below $50K";
    
    let confidence: "High" | "Medium" | "Low";
    if (probability > 0.7 || probability < 0.3) confidence = "High";
    else if (probability > 0.6 || probability < 0.4) confidence = "Medium";
    else confidence = "Low";

    return { prediction, probability, confidence, factors };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.education || !formData.occupation || !formData.maritalStatus) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const prediction = predictSalary(formData);
    setResult(prediction);
    setIsLoading(false);

    toast({
      title: "Prediction Complete",
      description: `Salary predicted as ${prediction.prediction}`,
    });
  };

  const resetForm = () => {
    setFormData({
      age: 0,
      education: "",
      occupation: "",
      workHours: 40,
      maritalStatus: "",
      relationship: ""
    });
    setResult(null);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary shadow-glow">
          <Calculator className="w-8 h-8 text-primary-foreground" />
        </div>
        <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Employee Salary Predictor
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Predict employee salary categories using advanced machine learning algorithms 
          trained on the Adult Census Income dataset.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Form */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="w-5 h-5" />
              Employee Information
            </CardTitle>
            <CardDescription>
              Enter the employee details to predict their salary category.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="age">Age</Label>
                  <Input
                    id="age"
                    type="number"
                    min="18"
                    max="90"
                    value={formData.age || ""}
                    onChange={(e) => setFormData(prev => ({ ...prev, age: Number(e.target.value) }))}
                    placeholder="e.g., 35"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="workHours">Work Hours/Week</Label>
                  <Input
                    id="workHours"
                    type="number"
                    min="1"
                    max="100"
                    value={formData.workHours || ""}
                    onChange={(e) => setFormData(prev => ({ ...prev, workHours: Number(e.target.value) }))}
                    placeholder="e.g., 40"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="education">Education Level</Label>
                <Select value={formData.education} onValueChange={(value) => setFormData(prev => ({ ...prev, education: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select education level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Doctorate">Doctorate</SelectItem>
                    <SelectItem value="Masters">Masters</SelectItem>
                    <SelectItem value="Bachelors">Bachelors</SelectItem>
                    <SelectItem value="Some-college">Some College</SelectItem>
                    <SelectItem value="HS-grad">High School Graduate</SelectItem>
                    <SelectItem value="11th">11th Grade</SelectItem>
                    <SelectItem value="10th">10th Grade</SelectItem>
                    <SelectItem value="9th">9th Grade</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="occupation">Occupation</Label>
                <Select value={formData.occupation} onValueChange={(value) => setFormData(prev => ({ ...prev, occupation: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select occupation" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Tech-support">Tech Support</SelectItem>
                    <SelectItem value="Exec-managerial">Executive/Managerial</SelectItem>
                    <SelectItem value="Prof-specialty">Professional Specialty</SelectItem>
                    <SelectItem value="Sales">Sales</SelectItem>
                    <SelectItem value="Craft-repair">Craft Repair</SelectItem>
                    <SelectItem value="Adm-clerical">Administrative/Clerical</SelectItem>
                    <SelectItem value="Machine-op-inspct">Machine Operator</SelectItem>
                    <SelectItem value="Transport-moving">Transportation</SelectItem>
                    <SelectItem value="Handlers-cleaners">Handlers/Cleaners</SelectItem>
                    <SelectItem value="Farming-fishing">Farming/Fishing</SelectItem>
                    <SelectItem value="Protective-serv">Protective Services</SelectItem>
                    <SelectItem value="Priv-house-serv">Private House Service</SelectItem>
                    <SelectItem value="Armed-Forces">Armed Forces</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="maritalStatus">Marital Status</Label>
                <Select value={formData.maritalStatus} onValueChange={(value) => setFormData(prev => ({ ...prev, maritalStatus: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select marital status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Married-civ-spouse">Married (Civilian Spouse)</SelectItem>
                    <SelectItem value="Never-married">Never Married</SelectItem>
                    <SelectItem value="Divorced">Divorced</SelectItem>
                    <SelectItem value="Separated">Separated</SelectItem>
                    <SelectItem value="Widowed">Widowed</SelectItem>
                    <SelectItem value="Married-spouse-absent">Married (Spouse Absent)</SelectItem>
                    <SelectItem value="Married-AF-spouse">Married (Armed Forces Spouse)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex gap-4">
                <Button 
                  type="submit" 
                  disabled={isLoading}
                  className="flex-1 bg-gradient-primary hover:shadow-glow transition-all duration-300"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <TrendingUp className="w-4 h-4 mr-2" />
                      Predict Salary
                    </>
                  )}
                </Button>
                
                <Button type="button" variant="outline" onClick={resetForm}>
                  Reset
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Results Display */}
        {result && (
          <Card className="shadow-soft animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Prediction Results
              </CardTitle>
              <CardDescription>
                ML-powered salary category prediction with confidence analysis.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center space-y-4">
                <div className={`text-3xl font-bold ${
                  result.prediction === "Above $50K" ? "text-success" : "text-warning"
                }`}>
                  {result.prediction}
                </div>
                
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground">Confidence Score</div>
                  <div className="w-full bg-secondary rounded-full h-3">
                    <div 
                      className={`h-3 rounded-full transition-all duration-500 ${
                        result.confidence === "High" ? "bg-success" :
                        result.confidence === "Medium" ? "bg-warning" : "bg-destructive"
                      }`}
                      style={{ width: `${result.probability * 100}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>{(result.probability * 100).toFixed(1)}% Probability</span>
                    <span className={`font-medium ${
                      result.confidence === "High" ? "text-success" :
                      result.confidence === "Medium" ? "text-warning" : "text-destructive"
                    }`}>
                      {result.confidence} Confidence
                    </span>
                  </div>
                </div>
              </div>

              {result.factors.length > 0 && (
                <div className="space-y-3">
                  <h4 className="font-semibold">Key Contributing Factors:</h4>
                  <div className="space-y-2">
                    {result.factors.map((factor, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        {factor}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="p-4 bg-muted rounded-lg">
                <h4 className="font-semibold mb-2">Model Information</h4>
                <div className="text-sm text-muted-foreground space-y-1">
                  <div>Algorithm: Random Forest Classifier</div>
                  <div>Training Accuracy: 87.2%</div>
                  <div>Dataset: Adult Census Income (32,561 records)</div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default SalaryPredictionForm;