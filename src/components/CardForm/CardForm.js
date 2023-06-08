import styles from './CardForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';

const CardForm = props => {
  const [title, setTitle] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    props.action({ title: title });
    setTitle('');
  };

  return (
    <form className={styles.cardForm} onSubmit={handleSubmit}>
      <span className={styles.formContainer}><span className={styles.cardFormTitle} >Title: </span><input type="text" value={title} onChange={e => setTitle(e.target.value)} /></span>
      <Button>Add card</Button>
    </form>
  );
}

export default CardForm;
