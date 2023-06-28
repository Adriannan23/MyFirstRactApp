import styles from './SearchForm.module.scss'
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const SearchForm = () => {

  const [inputValue, setInputValue] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'UPDATE_SEARCHSTRING', payload: inputValue });
  };

  const handleInputChange = e => {
    setInputValue(e.target.value);
  };
  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>

      <TextInput placeholder="Search..." value={inputValue} onChange={handleInputChange} />
      <Button>
        <span className="fa fa-search" />
      </Button>
    </form>
  );
};
export default SearchForm;