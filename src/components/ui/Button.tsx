import clsx from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: ReactNode;
  className?: string;
  type?: "submit" | "button";
  size?: "sm" | "md" | "lg"; // Optional size prop for different button sizes
}

const Button = ({
  variant = "primary",
  children,
  className,
  type = "button",
  size = "md", // Default size is medium
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        "outline-none cursor-pointer flex items-center gap-2 justify-center rounded-md font-semibold transition-colors duration-200",
        "active:not-disabled:translate-y-[1px] disabled:opacity-70 disabled:cursor-auto",
        variant === "primary" && "bg-blue-500 text-white hover:bg-blue-600/90",
        variant === "secondary" && "bg-gray-200 text-gray-700 hover:bg-gray-300/80",
        size === "sm" && "px-3 py-1 text-sm",
        size === "md" && "px-5 py-1.5 text-base", // Default medium size
        size === "lg" && "px-6 py-2 text-lg",
        "focus:outline-none focus:ring-2 focus:ring-blue-400", // Custom focus styles
        className,
      )}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
