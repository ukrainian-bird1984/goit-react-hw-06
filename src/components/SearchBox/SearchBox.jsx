import css from './SearchBox.module.css';

const SearchBox = ({ value, handleFilter }) => {
  return (
    <div className={css.name}>
      <h4>Find contact by name</h4>
      <input
        className={css.input}
        type="text"
        placeholder="Enter name..."
        value={value}
        onChange={handleFilter}
      />
    </div>
  );
};

export default SearchBox;