"use client";

import Form from "@/components/form/Form";
import Input from "@/components/form/Input";
import { FieldValues } from "react-hook-form";
import Stepper from "./_components/Stepper";
import { useState } from "react";
import PasswordInput from "@/components/form/PasswordInput";
import { validationSchemas } from "./_config/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import FormFooter from "./_components/FormFooter";

const Home = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const steps = [1, 2, 3];
  const stepsTitle = [
    "Personal Information",
    "Address Details",
    "Account Setup",
  ];

  const handleSubmit = (data: FieldValues) => {
    console.log(data);
  };

  const schema = validationSchemas[currentStep];
  
  return (
    <div className="bg-gray-50 h-screen w-full flex items-center justify-center">
      <div className="w-full sm:w-xl mx-auto bg-white p-5 border border-gray-100 rounded-lg space-y-4">
        <div className="border-b border-gray-200">
          <Stepper steps={steps} currentStep={currentStep} />
        </div>
        <div>
          <div className="text-blue-500 text-sm bg-blue-100 inline-block px-2 py-0.5 rounded-lg border border-blue-200">
            Step {currentStep}/{steps.length}
          </div>
          <h4 className="text-lg font-semibold text-gray-700">
            {stepsTitle[currentStep - 1]}
          </h4>
        </div>
        <Form onSubmit={handleSubmit} resolver={zodResolver(schema)}>
          <div className="space-y-4">
            <div className="space-y-2">
              {currentStep === 1 && (
                <>
                  <Input
                    label="Full Name"
                    name="name"
                    placeholder="Enter your full name"
                  />
                  <Input
                    label="Email"
                    name="email"
                    placeholder="Enter your email"
                  />
                  <Input
                    label="Mobile"
                    name="mobile"
                    placeholder="Enter your mobile number"
                  />
                </>
              )}
              {currentStep === 2 && (
                <>
                  <Input
                    label="Street Address"
                    name="street_address"
                    placeholder="Enter your street address"
                  />
                  <Input
                    label="City"
                    name="city"
                    placeholder="Enter your city"
                  />
                  <Input
                    label="Zip Code"
                    name="zip_code"
                    placeholder="Enter your zip code"
                  />
                </>
              )}
              {currentStep === 3 && (
                <>
                  <Input
                    label="Username"
                    name="user_name"
                    placeholder="Choose a username"
                  />
                  <PasswordInput
                    label="Password"
                    name="password"
                    placeholder="Enter your password"
                  />
                  <PasswordInput
                    label="Confirm Password"
                    name="confirm_password"
                    placeholder="Confirm your password"
                  />
                </>
              )}
            </div>

           <FormFooter currentStep={currentStep} setCurrentStep={setCurrentStep} steps={steps} />
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Home;
