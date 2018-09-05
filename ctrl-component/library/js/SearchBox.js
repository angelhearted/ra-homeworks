const SearchBox = props => {
  return (
    <input type="text" placeholder="Поиск по названию или автору" value={props.value}
      onChange={e => typeof props.filterBooks === 'function' && props.filterBooks(e.target.value)} />
  );
};