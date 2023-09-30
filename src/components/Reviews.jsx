import { useOutletContext } from 'react-router-dom';

const Reviews = ({ review }) => {
  review = useOutletContext();
  return (
    <ul>
      {review.map(item => (
        <li key={item.id}>
          <h3>{item.author}</h3>
          <span>{item.content}</span>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
