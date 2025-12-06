import { Link } from 'react-router-dom';

const Button = ({ 
  children, 
  variant = 'primary', 
  to, 
  onClick, 
  className = '',
  type = 'button',
  disabled = false 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-2 rounded-full font-medium transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-amber-700 text-white hover:bg-amber-800 shadow-md hover:shadow-lg",
    secondary: "border-2 border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white",
    dark: "bg-stone-900 text-white hover:bg-stone-800 shadow-md hover:shadow-lg",
    outline: "border-2 border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white"
  };

  const buttonStyles = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={buttonStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonStyles}
    >
      {children}
    </button>
  );
};

export default Button;

