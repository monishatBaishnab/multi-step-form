import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";

export type PasswordInputProps = {
  label?: string;
  name: string;
  required?: boolean;
  placeholder?: string;
  disabled?: boolean;
  autoFocus?: boolean;
  successMessage?: string;
  clearable?: boolean;
  hidden?: boolean;
};

const PasswordInput = ({
  label,
  name,
  required = false,
  placeholder = "Enter your password",
  disabled = false,
  hidden = false,
  autoFocus = false,
  successMessage,
}: PasswordInputProps) => {
  // Accessing form context from react-hook-form
  const { control, trigger } = useFormContext();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div className="w-full space-y-2">
          {label && !hidden && (
            <label
              htmlFor={name}
              className={`block text-sm font-medium ${
                error ? "text-red-500" : "text-gray-700 dark:text-gray-300"
              }`}
            >
              {label} {required && <span className="text-red-500">*</span>}
            </label>
          )}

          <div className="relative">
            <input
              {...field}
              id={name}
              value={field.value ? field.value : ""}
              onChange={(e) => {
                field.onChange(e);
                trigger(name);
              }}
              onBlur={() => {
                trigger(name);
              }}
              type={showPassword ? "text" : "password"}
              hidden={hidden}
              disabled={disabled}
              required={required}
              placeholder={placeholder}
              autoFocus={autoFocus}
              autoComplete="new-password"
              className={`w-full px-3 py-2 border rounded-md transition-all duration-200 ease-in-out outline-none focus:outline-none ${
                error
                  ? "border-red-500 focus:ring-2 focus:ring-red-300 focus:ring-offset-1"
                  : "border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
              } ${
                disabled
                  ? "bg-gray-100 cursor-not-allowed text-gray-500 dark:bg-gray-700 dark:text-gray-400"
                  : "bg-white dark:bg-gray-800 dark:text-white"
              } placeholder-gray-400 dark:placeholder-gray-500`}
            />

            {/* Right section icons */}
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center space-x-2">
              {/* Password visibility toggle */}
              {field.value && (
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="text-gray-500 hover:text-gray-700 focus:outline-none cursor-pointer"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              )}
            </div>
          </div>

          {/* Error or Success Message */}
          {error?.message ? (
            <p className="mt-1 text-sm text-red-500">{error.message}</p>
          ) : successMessage ? (
            <p className="mt-1 text-sm text-green-500">{successMessage}</p>
          ) : null}
        </div>
      )}
    />
  );
};

export default PasswordInput;
