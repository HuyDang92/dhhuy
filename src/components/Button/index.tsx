import './Button.scss';
import clsx from 'clsx';

export default function Button(props: any) {
   const Comp = 'a';

   const classes = [
      'border-[1px]',
      'shadow-sm',
      'btn',
      'btn-animate',
      'text-[10px]',
      'lg:text-lg',
      props.primary && 'primary',
      props.border && 'border',
   ];
   return (
      <div>
         <Comp href="#" className={clsx(...classes)}>
            {props.children}
         </Comp>
      </div>
   );
}
