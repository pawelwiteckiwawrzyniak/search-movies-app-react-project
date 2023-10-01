import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import css from './BackLink.module.css';

const BackLink = ({ to, children }) => {
  return (
    <div className={css.box}>
      <FiArrowLeft size={22} />
      <Link to={to} className={css.link}>
        {children}
      </Link>
    </div>
  );
};

export default BackLink;
