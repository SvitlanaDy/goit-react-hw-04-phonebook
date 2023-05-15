import PropTypes from 'prop-types';
import css from 'components/filter/Filter.module.css';



const Filter = ({ value, onChange }) => {
  return (
    <div className={css.filter}>
      <label htmlFor="filterInput">
        Filter contacts by name: 
        </label>
      <input
        type="text"
        id="filterInput"
        name="filter"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;