import PropTypes from 'prop-types';
import css from './SearchForm.module.css';

const SearchForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <input type="text" name="searchQuery" className={css.form__input} />
      <button type="submit">Search</button>
    </form>
  );
};

SearchForm.propTypes = {
  handleSubmit: PropTypes.func,
};

export default SearchForm;
