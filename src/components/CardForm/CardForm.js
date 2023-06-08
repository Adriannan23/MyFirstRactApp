import styles from './CardForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from './../TextInput/TextInput';
// import List from './../List/List';

const CardForm = props => {
  const [title, setTitle] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    props.action({ title: title }, props.columnId);
    setTitle('');
  };

  return (
    <form className={styles.cardForm} onSubmit={handleSubmit}>
      <TextInput value={title} onChange={e => setTitle(e.target.value)} />
      <Button>Add card</Button>
      {/* <CardForm columnId={props.id} action={addCard} /> */}
    </form>

  );
};

export default CardForm;
