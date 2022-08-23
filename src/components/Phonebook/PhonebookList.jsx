import { useSelector } from 'react-redux';
import { useGetContactsQuery } from 'redux/services/contacts';
import PhonebookListElement from './PhonebookListElement';

export default function PhonebookList() {
  const filter = useSelector(state => state.filter.filter);
  const { data, error, isLoading } = useGetContactsQuery();

  const filterListByName = () => {
    return data.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredItems = data ? filterListByName() : [];

  return (
    <ul
      style={{
        listStyle: 'none',
        width: '500px',
        padding: '0',
      }}
    >
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        filteredItems.map(el => (
          <PhonebookListElement filteredeItem={el} key={el.id} />
        ))
      ) : null}
    </ul>
  );
}
