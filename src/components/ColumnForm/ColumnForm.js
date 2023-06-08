import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';


const ColumnForm = props => {
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    props.action({ title: title, icon: icon });
    setTitle('');
    setIcon('');
  };

  return (
    <form className={styles.columnForm} onSubmit={handleSubmit}>
      <span className={styles.formContainer}><span className={styles.columnFormTitle} >Title: </span><input type="text" value={title} onChange={e => setTitle(e.target.value)} /></span>
      <span className={styles.formContainer}><span className={styles.columnFormTitle}>Icon: </span><input type="text" value={icon} onChange={e => setIcon(e.target.value)} /> </span>
      <Button>Add column</Button>

    </form>
  );
};

export default ColumnForm;






