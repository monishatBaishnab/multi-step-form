
  const Stepper = ({
    steps,
    currentStep,
  }: {
    steps: number[];
    currentStep: number;
  }) => {
    return (
      <div className="flex items-center w-full justify-center my-8 max-w-64 mx-auto">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`flex items-center w-full relative ${
            index === 0 ? "justify-end" : ""
          }`}
        >
          {/* Step Circle */}
          <div
            className={`flex items-center justify-center w-8 h-8 rounded-full absolute left-0 right-0 mx-auto ${
              currentStep >= step
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-400"
            }`}
          >
            {step}
          </div>

          {/* Progress Bar */}
          {index < steps.length - 1 && (
            <div
              className={`h-1 mx-2 ${
                currentStep >= step ? "bg-blue-500" : "bg-gray-200"
              } w-full`}
            ></div>
          )}
        </div>
      ))}
    </div>
    );
  };
  export default Stepper;
