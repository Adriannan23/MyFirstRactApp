import styles from './List.module.scss';
import Column from './../Column/Column';
import ColumnForm from './../ColumnForm/ColumnForm';
import { useSelector } from 'react-redux';
import { getColumnsByList } from '../../redux/columnsRedux';
import { getListById } from '../../redux/listsRedux';
import { useParams, Navigate } from 'react-router';
import SearchForm from '../SearchForm/SearchForm';

const List = () => {

  const { listId } = useParams();

  const columns = useSelector(state => getColumnsByList(state, listId));

  const listData = useSelector(state => getListById(state, listId));

  if (!listData) return <Navigate to="/" />

  return (
    <div className={styles.list}>
      <header className={styles.header}>
        <h2 className={styles.title}>Things to do<span>soon!</span></h2>
      </header>
      <p className={styles.description}>Interesting things I want to check out</p>
      <SearchForm />
      <section className={styles.columns}>
        {columns.map(column =>
          <Column
            key={column.id}
            {...column} />
        )}
      </section>
      <ColumnForm />
    </div>
  );
};

export default List;