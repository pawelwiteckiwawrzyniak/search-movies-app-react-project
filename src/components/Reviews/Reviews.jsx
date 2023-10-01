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

export default Reviews;
