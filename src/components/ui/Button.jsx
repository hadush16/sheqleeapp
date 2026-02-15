import PropTypes from "prop-types";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
  disabled = false,
  ...props
}) {
  // Base classes that apply to all buttons
  const baseClasses =
    "font-medium rounded-[8px] md:rounded-[11px] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  // Variant styles
  const variants = {
    primary: "text-white ",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    outline: "border text-purple-600 hover:bg-purple-50 ",
    danger: "bg-red-600 text-white hover:bg-red-700 ",
    success: "bg-green-600 text-white hover:bg-green-700 ",
    ghost: "bg-transparent text-purple-600 hover:bg-purple-50 ",
  };

  // Size styles
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
    xl: "px-8 py-4 text-xl",
  };

  // Combine all classes
  const buttonClasses = `${baseClasses} ${
    variants[variant] || variants.primary
  } ${sizes[size] || sizes.md} ${className}`;

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

// PropTypes validation
Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "outline",
    "danger",
    "success",
    "ghost",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
  className: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  disabled: PropTypes.bool,
};

// Default props
Button.defaultProps = {
  variant: "primary",
  size: "md",
  className: "",
  type: "button",
  disabled: false,
};
