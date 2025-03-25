import clsx from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: ReactNode;
  className?: string;
  type?: "submit" | "button";
}

const Button = ({
  variant = "primary",
  children,
  className,
  type = "button",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        "outline-none cursor-pointer flex items-center gap-2 justify-center min-w-24 px-5 py-1.5 rounded-md font-semibold transition-colors duration-200",
        "active:translate-y-[1px]",
        variant === "primary" && "bg-blue-500 text-white hover:bg-blue-600/90",
        variant === "secondary" &&
          "bg-gray-200 text-gray-700 hover:bg-gray-300/80",
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
