import { cva, type VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { MoonLoader } from "react-spinners";

const variants = cva(
  [
    "flex",
    "justify-center",
    "items-center",
    "text-white",
    "font-medium",
    "rounded-[6px]",
    "gap-[4px]",
    "shadow-1",
    "active:shadow-none",
    "cursor-pointer",
    "w-full",
  ],
  {
    variants: {
      variant: {
        primary: [
          "bg-primary-main",
          "hover:bg-primary-hover",
          "active:bg-primary-pressed",
          "focus:outline-primary-focus",
          "border-primary-main",
        ],
        secondary: [
          "bg-white",
          "hover:bg-white",
          "active:bg-neutral-10",
          "focus:outline-primary-focus",
          "border-[#E0E0E0]",
        ],
        info: [
          "bg-info-main",
          "hover:bg-info-hover",
          "active:bg-info-pressed",
          "focus:outline-info-focus",
          "border-info-main",
        ],
        danger: [
          "bg-danger-main",
          "hover:bg-danger-hover",
          "active:bg-danger-pressed",
          "focus:outline-danger-focus",
          "border-danger-main",
        ],
        warning: [
          "bg-warning-main",
          "hover:bg-warning-hover",
          "active:bg-warning-pressed",
          "focus:outline-warning-focus",
          "border-warning-main",
        ],
        success: [
          "bg-success-main",
          "hover:bg-success-hover",
          "active:bg-success-pressed",
          "focus:outline-success-focus",
          "border-success-main",
        ],
      },
      size: {
        sm: ["h-[32px]", "px-[16px]", "py-[6px]", "text-sm"],
        md: ["h-[40px]", "px-[16px]", "py-[8px]"],
        lg: ["h-[48px]", "px-[16px]", "py-[6px]"],
      },
      outline: {
        true: [],
        false: [],
      },
    },
    compoundVariants: [
      {
        variant: "primary",
        outline: true,
        class:
          "!bg-neutral-10 !text-primary-main !border !border-primary-main hover:!bg-primary-hover hover:!text-white active:!bg-primary-pressed focus:!outline-primary-focus",
      },
      {
        variant: "secondary",
        outline: true,
        class:
          "!bg-neutral-10 !text-neutral-100 !border !border-neutral-40 hover:!bg-neutral-40",
      },
      {
        variant: "info",
        outline: true,
        class:
          "!bg-neutral-10 !text-info-main !border !border-info-main hover:!bg-info-hover hover:!text-white active:!bg-info-pressed focus:!outline-info-focus",
      },
      {
        variant: "danger",
        outline: true,
        class:
          "!bg-neutral-10 !text-danger-main !border !border-danger-main hover:!bg-danger-hover hover:!text-white active:!bg-danger-pressed focus:!outline-danger-focus",
      },
      {
        variant: "warning",
        outline: true,
        class:
          "!bg-neutral-10 !text-warning-main !border !border-warning-main hover:!bg-warning-hover hover:!text-white active:!bg-warning-pressed focus:!outline-warning-focus",
      },
      {
        variant: "success",
        outline: true,
        class:
          "!bg-neutral-10 !text-success-main !border !border-success-main hover:!bg-success-hover hover:!text-white active:!bg-success-pressed focus:!outline-success-focus",
      },
    ],
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

type ButtonVariantProps = VariantProps<typeof variants>;

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariantProps {
  // outline?: boolean;
  text?: boolean;
  loading?: boolean;
}

function LoadingPlaceholder() {
  return (
    <p className="flex items-center justify-center gap-[4px]">
      <MoonLoader size={14} />
      <span>loading...</span>
    </p>
  );
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      type = "button",
      disabled = false,
      loading = false,
      children,
      className,
      variant,
      size,
      outline,
      ...rest
    },
    ref
  ) => {
    const disabledClassName =
      "!cursor-not-allowed bg-neutral-40 hover:bg-neutral-40 active:bg-neutral-40 text-neutral-60 hover:text-neutral-60 border-none";

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        className={twMerge(
          variants({ variant, size, outline }),
          disabled && disabledClassName,
          className
        )}
        style={{ outline: "none" }}
        {...rest}
      >
        {loading ? <LoadingPlaceholder /> : children}
      </button>
    );
  }
);

Button.displayName = "Button";
