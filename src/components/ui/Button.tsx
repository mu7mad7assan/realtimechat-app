import { ButtonHTMLAttributes, FC } from 'react';
import { cva, VariantProps } from  'class-variance-authority';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const button = cva(
  ["font-semibold", "border", "rounded"],
  {
    variants: {
      intent: {
        primary: [
          "bg-blue-500",
          "text-white",
          "border-transparent",
          "hover:bg-blue-600",
        ],
        // **or**
        // primary: "bg-blue-500 text-white border-transparent hover:bg-blue-600",
        secondary: [
          "bg-white",
          "text-gray-800",
          "border-gray-400",
          "hover:bg-gray-100",
        ],
      },
      size: {
        small: ["text-sm", "py-1", "px-2"],
        medium: ["text-base", "py-2", "px-4"],
      },
    },
    compoundVariants: [
      {
        intent: "primary",
        size: "medium",
        class: "uppercase",
        // **or** if you're a React.js user, `className` may feel more consistent:
        // className: "uppercase"
      },
    ],
    defaultVariants: {
      intent: "primary",
      size: "medium",
    },
  }
);

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof button> {
  isLoading?: boolean
}

const Button: FC<ButtonProps> = ({
  className,
  children,
  intent,
  isLoading,
  size,
  ...props
}) => {
  return (
    <button className={cn(button({intent, size, className}))} aria-disabled={isLoading} {...props}>
      {isLoading ? <Loader2 className='mr-2 h-4 w-4 animate-spin'/> : null}
      {children}
    </button>
  );
}

export default Button;
