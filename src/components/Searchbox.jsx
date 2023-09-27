export const Searchbox = ({ value, onChange }) => {
  return (
    <input
      type="text"
      onChange={event => {
        onChange(event.target.value);
      }}
    />
  );
};
