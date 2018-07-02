'use strict';

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://neto-api.herokuapp.com/etsy');
xhr.addEventListener('load', () => {
  const items = JSON.parse(xhr.responseText);
  ReactDOM.render(
    <Listing items={items} />,
    document.getElementById('root')
  );
});
xhr.send();

function Listing({items}) {
  function getPrice({price, currency_code}) {
    return currency_code === 'USD'
      ? '$' + price
      : currency_code === 'EUR'
      ? '€' + price
      : price + ' ' + currency_code;
  }

  return (
    <div className="item-list">
      {items.map(item => (
        <div className="item">
          <div className="item-image">
            <a href={item.url}>
              <img src={item.MainImage.url_570xN} />
            </a>
          </div>
          <div className="item-details">
            <p className="item-title">{item.title.length > 50 ? item.title.substring(0, 50) + '…' : item.title}</p>
            <p className="item-price">{getPrice(item)}</p>
            <p className={'item-quantity level-' + (item.quantity <= 10 ? 'low' : item.quantity <= 20 ? 'medium' : 'high')}>{item.quantity} left</p>
          </div>
        </div>
      ))}
    </div>
  );
}
