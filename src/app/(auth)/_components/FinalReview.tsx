import { useFormContext } from "react-hook-form";

const FinalReview = () => {
  const { watch } = useFormContext();
  return (
    <div className="space-y-2 mt-4">
      <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
        Review Your Information
      </h4>
      <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="space-y-4">
          {/* Personal Information */}
          <div>
            <h5 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
              Personal Information
            </h5>
            <div>
              <p className="block text-gray-600 dark:text-gray-400">
                <span className="font-medium text-gray-800 dark:text-white">
                  Full Name:
                </span>{" "}
                {watch("name")}
              </p>
              <p className="block text-gray-600 dark:text-gray-400">
                <span className="font-medium text-gray-800 dark:text-white">
                  Email:
                </span>{" "}
                {watch("email")}
              </p>
              <p className="block text-gray-600 dark:text-gray-400 col-span-2">
                <span className="font-medium text-gray-800 dark:text-white">
                  Mobile:
                </span>{" "}
                {watch("mobile")}
              </p>
            </div>
          </div>

          {/* Address Details */}
          <div>
            <h5 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
              Address Details
            </h5>
            <div>
              <p className="block text-gray-600 dark:text-gray-400">
                <span className="font-medium text-gray-800 dark:text-white">
                  Street:
                </span>{" "}
                {watch("street_address")}
              </p>
              <p className="block text-gray-600 dark:text-gray-400">
                <span className="font-medium text-gray-800 dark:text-white">
                  City:
                </span>{" "}
                {watch("city")}
              </p>
              <p className="block text-gray-600 dark:text-gray-400 col-span-2">
                <span className="font-medium text-gray-800 dark:text-white">
                  Zip Code:
                </span>{" "}
                {watch("zip_code")}
              </p>
            </div>
          </div>

          {/* Account Setup */}
          <div>
            <h5 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
              Account Setup
            </h5>
            <div>
              <p className="block text-gray-600 dark:text-gray-400">
                <span className="font-medium text-gray-800 dark:text-white">
                  Username:
                </span>{" "}
                {watch("user_name")}
              </p>
              <p className="block text-gray-600 dark:text-gray-400">
                <span className="font-medium text-gray-800 dark:text-white">
                  Password:
                </span>{" "}
                {watch("password")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalReview;
