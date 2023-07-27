import styles from './ListForm.module.scss';
import { addListForm } from '../../redux/listsRedux';
import { useState } from 'react';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';


const ListForm = props => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addListForm({ title, description }));
    setTitle('');
    setDescription('');
  };
  // posrednik do wlaczenia reducera
  const dispatch = useDispatch();

  return (
    <form className={styles.listForm} onSubmit={handleSubmit}>
      <span className={styles.formContainer}><span className={styles.listFormTitle} >Title: </span><input type="text" value={title} onChange={e => setTitle(e.target.value)} /></span>
      <span className={styles.formContainer}><span className={styles.listFormTitle}>Description: </span><input type="text" value={description} onChange={e => setDescription(e.target.value)} /> </span>
      <Button>Add list</Button>

    </form>
  );
};

export default ListForm;