import Button from "@/components/ui/Button";
import React, { Dispatch, SetStateAction } from "react";
import { useFormContext } from "react-hook-form";

const FormFooter = ({
  currentStep,
  steps,
  setCurrentStep,
}: {
  currentStep: number;
  steps: number[];
  setCurrentStep: Dispatch<SetStateAction<number>>;
}) => {
  const { trigger } = useFormContext(); // Access formState and trigger validation
  const names =
    currentStep == 1
      ? ["name", "email", "mobile"]
      : currentStep === 2
      ? ["street_address", "city", "zip_code"]
      : ["user_name", "confirm_password", "password"];
  const handleNext = async () => {
    // Trigger validation for the current step before moving to the next step
    const isValid = await trigger(names); // This will trigger validation for all fields
    if (isValid) {
      if (currentStep < steps.length && currentStep !== steps?.length) {
        setTimeout(() => {
          setCurrentStep((prev) => prev + 1); // Move to next step if no errors
        }, 50);
      }
    } else {
      // You can handle invalid form behavior here, like showing a message or doing something else
      console.log("Validation failed. Cannot proceed to the next step.");
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <div className="flex items-center justify-end gap-2">
      <Button
        variant="secondary"
        onClick={handleBack}
        disabled={currentStep === 1}
      >
        Back
      </Button>

      {currentStep < steps?.length ? (
        <Button type={"button"} variant="primary" onClick={handleNext}>
          Continue
        </Button>
      ) : (
        <Button type={"submit"} variant="primary">
          Submit
        </Button>
      )}
    </div>
  );
};

export default FormFooter;
