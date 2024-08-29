import React, { ReactNode } from "react";

interface AlertProps {
  children: ReactNode;
  variant?: "default" | "destructive";
}

export const Alert = ({ children, variant = "default" }: AlertProps) => {
  return (
    <div
      className={`p-4 rounded-lg flex items-start space-x-3",
        ${variant === "destructive" ? "bg-red-100 text-red-700" : "bg-gray-100 text-gray-700"}
      `}
    >
      {children}
    </div>
  );
};

interface AlertTitleProps {
  children: ReactNode;
  className?: string;
}

export const AlertTitle = ({ children, className }: AlertTitleProps) => {
  return (
    <h3 className={`text-lg font-semibold", ${className}`}>{children}</h3>
  );
};

interface AlertDescriptionProps {
  children: ReactNode;
  className?: string;
}

export const AlertDescription = ({
  children,
  className,
}: AlertDescriptionProps) => {
  return (
    <div className={`text-sm", ${className}`}>{children}</div>
  );
};
