"use client";

import Form from "@/components/form/Form";
import Input from "@/components/form/Input";
import { FieldValues } from "react-hook-form";
import Stepper from "./_components/Stepper";
import { useState } from "react";
import Button from "@/components/ui/Button";

const Home = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const steps = [1, 2, 3];
 
  const handleSubmit = (data: FieldValues) => {
    console.log(data);
  };

  const handleNext = () => {
    if (currentStep < steps.length && currentStep !== steps?.length) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <div className="bg-gray-50 h-screen w-full flex items-center justify-center">
      <div className="w-full sm:w-xl mx-auto bg-white p-5 border border-gray-100 rounded-lg space-y-4">
        <div className="border-b border-gray-200">
          <Stepper steps={steps} currentStep={currentStep} />
        </div>
        <div>
          <div className="text-blue-500 text-sm bg-blue-100 inline-block px-2 py-0.5 rounded-lg border border-blue-200">
            Step 1/3
          </div>
          <h4 className="text-lg font-semibold text-gray-700">
            Enter your Name and Email to Begin!
          </h4>
        </div>
        <Form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="space-y-2">
              <Input label="Full Name" name="full_name" />
              <Input label="Email" name="email" />
              <Input label="Mobile" name="mobile" />
            </div>

            <div className="flex items-center justify-end gap-2">
              {currentStep !== 1 && (
                <Button
                  variant="secondary"
                  onClick={handleBack}
                  disabled={currentStep === 1}
                >
                  Back
                </Button>
              )}
              <Button
                type={currentStep === steps?.length ? "submit" : "button"}
                variant="primary"
                onClick={handleNext}
              >
                {currentStep === steps?.length ? "Submit" : "Continue"}
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Home;
