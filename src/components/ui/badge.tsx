import React from "react";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: 'default' | 'secondary' | 'outline' | 'destructive' | 'success';
}


export const Badge = ({
    variant = "default",
    className = '', 
  ...props
}: BadgeProps)=> {
    const baseStyles = "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider w-fit whitespace-nowrap transition-colors";
  
  const variants = {
    default: "border-transparent bg-blue-600 text-white",
    secondary: "border-transparent bg-slate-800 text-slate-300",
    outline: "border-slate-700 text-slate-400 bg-transparent",
    destructive: "border-transparent bg-rose-500/10 text-rose-500",
    success: "border-transparent bg-emerald-500/10 text-emerald-500" // Variante extra para KPI positivos
  };
const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

return (
    <span className={combinedClasses} {...props}/>
    //el spread operator toma todas la funciones que agreguemos a la bolsa como un id o title :D
)
}