interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'destructive';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}: ButtonProps) => {
  
  const baseStyles = "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/20",
    outline: "border border-slate-700 bg-transparent text-slate-300 hover:bg-slate-800 hover:text-white",
    ghost: "text-slate-400 hover:bg-slate-800 hover:text-white",
    destructive: "bg-rose-500/10 text-rose-500 hover:bg-rose-500 hover:text-white border border-rose-500/20"
  };

  const sizes = {
    sm: "h-8 px-3 text-xs",
    md: "h-10 px-4 text-sm",
    lg: "h-12 px-6 text-base"
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <button className={combinedClasses} {...props} />
  );
};