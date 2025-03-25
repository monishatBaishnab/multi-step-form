"use client";

import Form from "@/components/form/Form";
import Input from "@/components/form/Input";
import { FieldValues, UseFormReset } from "react-hook-form";
import { useState } from "react";
import PasswordInput from "@/components/form/PasswordInput";
import { validationSchemas } from "./_config/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import FormFooter from "./_components/FormFooter";
import ThemeToggle from "@/components/ui/ThemeToggle";

const Home = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const steps = [1, 2, 3];
  const stepsTitle = [
    "Personal Information",
    "Address Details",
    "Account Setup",
  ];

  const handleSubmit = (
    data: FieldValues,
    reset: UseFormReset<FieldValues>,
  ) => {
    console.log(data);
    reset();
    setCurrentStep(1);
  };

  const schema = validationSchemas[currentStep];

  return (
    <div className="bg-gray-50 dark:bg-gray-900 h-screen w-full flex items-center justify-center">
      <div className="w-full sm:w-[600px] mx-auto bg-white dark:bg-gray-800 p-5 border border-gray-100 dark:border-gray-700 rounded-lg space-y-4">
        <div className="border-b pb-5 border-gray-200 dark:border-gray-600 flex items-center justify-between">
          <h3 className="text-2xl font-semibold dark:text-white">Register new account.</h3>
          <ThemeToggle />
        </div>
        <div>
          <div className="text-blue-500 dark:text-blue-400 text-sm bg-blue-100 dark:bg-blue-800 inline-block px-2 py-0.5 rounded-lg border border-blue-200 dark:border-blue-700">
            Step {currentStep}/{steps.length}
          </div>
          <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
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

            <FormFooter
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
              steps={steps}
            />
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Home;
