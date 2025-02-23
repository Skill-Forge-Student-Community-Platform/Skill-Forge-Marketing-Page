import { ButtonHTMLAttributes} from "react";
import { cva } from "class-variance-authority";

const Classes = cva( 'border  h-12 rounded-full px-6 font-medium', {
      variants: {
          variant: {
            primary: 'bg-sky-600 text-neutral-950 border-lime—400' ,
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
