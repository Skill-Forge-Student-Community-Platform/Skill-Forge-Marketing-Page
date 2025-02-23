import { ButtonHTMLAttributes} from "react";
import { cva } from "class-variance-authority";

const Classes = cva( 'border  h-12 rounded-full px-6 font-medium', {
      variants: {
          variant: {
            primary: 'bg-blue-500 text-neutral-950 border-blue-500',
            secondary: 'border-white text-white bg-transparent',
          }
      }
  });

export default function Button(props:
  {variant: "primary" | "secondary" }
   & ButtonHTMLAttributes<HTMLButtonElement>){
    const { variant, className, ...otherProps} = props;
  return(
   <button
    className={Classes({
      variant,
      className
      })}
      {...otherProps}
    />
  );
}
