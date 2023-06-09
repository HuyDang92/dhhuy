import './Button.scss';
import classNames from 'classNames/bind';
import { Link } from 'react-router-dom';

export default function Button(props: any) {
   return (
      <div>
         <a href="#" className="border-[1px] shadow-sm text-purple btn btn-white btn-animate">
            {props.children}
         </a>
      </div>
   );
}
