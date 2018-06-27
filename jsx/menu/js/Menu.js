function Menu({items, opened = false}) {
  const divClass = 'menu' + (opened ? ' menu-open' : '');
  const nav = opened
    ? (<nav>
        <ul>
          { items.map( item => <li><a href={item.href}>{item.title}</a></li>) }
        </ul>
      </nav>)
    : '';
  
  return (
    <div className={divClass}>
      <div className="menu-toggle"><span></span></div>
      {nav}
    </div>
  );
}