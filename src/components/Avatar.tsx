import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export default function Avatar(props: HTMLAttributes<HTMLDivElement>){
  const {className ,children ,...otherprops} = props;
  return (
    <div className={twMerge("size-20 rounded-full overflow-hidden border-4 border-orange-500 p-1 bg-neutral-900" , className)} {...otherprops}>
      {children}
    </div>
  );
}
