import PropTypes from 'prop-types';
import { useOutletContext } from 'react-router-dom';
import css from './Reviews.module.css';

const Reviews = ({ context }) => {
  context = useOutletContext();
  if (context.review.length === 0) {
    return <span className={css.blank}>No reviews</span>;
  }
  return (
    <ul>
      {context.review.map(item => (
        <li key={item.id}>
          <h4 className={css.author}>{item.author}</h4>
          <span>{item.content}</span>
        </li>
      ))}
    </ul>
  );
};

Reviews.propTypes = {
  context: PropTypes.shape({
    review: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        author: PropTypes.string,
        content: PropTypes.string,
      })
    ),
  }),
};

export default Reviews;
