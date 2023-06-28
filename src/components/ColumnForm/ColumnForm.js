import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/store';


const ColumnForm = props => {
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addColumn({ title, icon }));
    setTitle('');
    setIcon('');
  };
  // posrednik do wlaczenia reducera
  const dispatch = useDispatch();

  return (
    <form className={styles.columnForm} onSubmit={handleSubmit}>
      <span className={styles.formContainer}><span className={styles.columnFormTitle} >Title: </span><input type="text" value={title} onChange={e => setTitle(e.target.value)} /></span>
      <span className={styles.formContainer}><span className={styles.columnFormTitle}>Icon: </span><input type="text" value={icon} onChange={e => setIcon(e.target.value)} /> </span>
      <Button>Add column</Button>

    </form>
  );
};

export default ColumnForm;






