import { Link } from 'react-router-dom';
import './Button.css';

function Button({ to, children, variant = 'primary' }) {
  return (
    <Link to={to} className={`btn btn-${variant}`}>
      {children}
    </Link>
  );
}

export default Button;
