import './Button.scss';
import clsx from 'clsx';

export default function Button(props: any) {
   const classes = [
      'border-[1px]',
      'shadow-sm',
      'btn',
      'btn-animate',
      props.primary && 'primary',
      props.border && 'border',
   ];
   return (
      <div>
         <a href="#" className={clsx(...classes)}>
            {props.children}
         </a>
      </div>
   );
}
