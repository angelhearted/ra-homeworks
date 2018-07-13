'use strict';

const App = ({items}) => (
  <main>
    {items.map(item => <Item item={item} />)}
  </main>
);
