import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { X, Info } from "lucide-react";

export type FormInputProps = {
  label?: string;
  name: string;
  required?: boolean;
  placeholder?: string;
  disabled?: boolean;
  autoFocus?: boolean;
  successMessage?: string;
  clearable?: boolean;
  type?: string;
  hidden?: boolean;
};

const Input = ({
  label,
  name,
  required = false,
  type = "text",
  placeholder,
  disabled = false,
  hidden = false,
  autoFocus = false,
  clearable = true,
  successMessage,
}: FormInputProps) => {
  // Accessing form context from react-hook-form
  const { control, setValue, trigger } = useFormContext();

  const [isFocused, setIsFocused] = useState(false);

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
              value={field.value ? field.value : ""}
              onChange={(e) => {
                field.onChange(e);
                trigger(name);
              }}
              id={name}
              type={type}
              hidden={hidden}
              disabled={disabled}
              required={required}
              placeholder={placeholder}
              autoFocus={autoFocus}
              autoComplete="off"
              onFocus={() => setIsFocused(true)}
              onBlur={() => {
                setIsFocused(false);
                trigger(name);
              }}
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
            {(clearable || error) && (
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                {error ? (
                  <Info className="w-5 h-5 text-red-500" />
                ) : field.value && isFocused ? (
                  <X
                    onMouseDown={() => {
                      setValue(name, "");
                      trigger(name);
                    }}
                    className="w-5 h-5 text-gray-400 cursor-pointer hover:text-gray-600"
                  />
                ) : null}
              </div>
            )}
          </div>

          {/* Error or Success Message */}
          {error ? (
            <p className="mt-1 text-sm text-red-500">{error.message}</p>
          ) : successMessage ? (
            <p className="mt-1 text-sm text-green-500">{successMessage}</p>
          ) : null}
        </div>
      )}
    />
  );
};

export default Input;
