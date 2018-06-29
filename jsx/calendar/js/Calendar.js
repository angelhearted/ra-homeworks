function Calendar({date}) {
  const weekDayHeaderTop = (
    <div className="ui-datepicker-material-header">
      <div className="ui-datepicker-material-day">{getWeekDay()}</div>
      <div className="ui-datepicker-material-date">
        <div className="ui-datepicker-material-day-num">{date.getDate()}</div>
        <div className="ui-datepicker-material-month">{getMonthName()}</div>
        <div className="ui-datepicker-material-year">{date.getFullYear()}</div>
      </div>
    </div>
  );
  const currentDateHeader = (
    <div className="ui-datepicker-header">
      <div className="ui-datepicker-title">
        <span className="ui-datepicker-month">{getMonthName()}
        </span>&nbsp;<span className="ui-datepicker-year">{date.getFullYear()}</span>
      </div>
    </div>
  );

  const weekColumns = (
    <colgroup>
      <col />
      <col />
      <col />
      <col />
      <col />
      <col className="ui-datepicker-week-end" />
      <col className="ui-datepicker-week-end" />
    </colgroup>
  );
  const weekDaysHeader = (
    <thead>
      <tr>
        <th scope="col" title="Понедельник">Пн</th>
        <th scope="col" title="Вторник">Вт</th>
        <th scope="col" title="Среда">Ср</th>
        <th scope="col" title="Четверг">Чт</th>
        <th scope="col" title="Пятница">Пт</th>
        <th scope="col" title="Суббота">Сб</th>
        <th scope="col" title="Воскресенье">Вс</th>
      </tr>
    </thead>
  );

  return (
    <div className="ui-datepicker">
      {weekDayHeaderTop}
      {currentDateHeader}
      <table className="ui-datepicker-calendar">
        {weekColumns}
        {weekDaysHeader}
        <tbody>
          
          <tr>
            <td className="ui-datepicker-other-month">27</td>
            <td className="ui-datepicker-other-month">28</td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
          </tr>
          <tr>
            <td>6</td>
            <td>7</td>
            <td className="ui-datepicker-today">8</td>
            <td>9</td>
            <td>10</td>
            <td>11</td>
            <td>12</td>
          </tr>

        </tbody>
      </table>
    </div>
  );

  function getWeekDay() {
    const weekDays = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    return weekDays[date.getDay()];
  }

  function getMonthName() {
    const monthNames = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
      'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    return monthNames[date.getMonth()];
  }
}