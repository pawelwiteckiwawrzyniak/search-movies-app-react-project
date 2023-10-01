import css from './SearchForm.module.css';

const SearchForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <input type="text" name="searchQuery" className={css.form__input} />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
