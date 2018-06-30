function Calendar({date}) {
  const mainHeader = (
    <div className="ui-datepicker-material-header">
      <div className="ui-datepicker-material-day">{getWeekDay()}</div>
      <div className="ui-datepicker-material-date">
        <div className="ui-datepicker-material-day-num">{date.getDate()}</div>
        <div className="ui-datepicker-material-month">{getMonthName()}</div>
        <div className="ui-datepicker-material-year">{date.getFullYear()}</div>
      </div>
    </div>);
  const monthYearHeader = (
    <div className="ui-datepicker-header">
      <div className="ui-datepicker-title">
        <span className="ui-datepicker-month">{getMonthName()}
        </span>&nbsp;<span className="ui-datepicker-year">{date.getFullYear()}</span>
      </div>
    </div>);

  const weekColumns = (
    <colgroup>
      <col />
      <col />
      <col />
      <col />
      <col />
      <col className="ui-datepicker-week-end" />
      <col className="ui-datepicker-week-end" />
    </colgroup>);
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
    </thead>);
  
  const today = date.getDate();
  const displayedDates = (() => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstMonthDay = new Date(year, month, 1);

    // if Sunday (0) - set 7
    const weekDaysBefore1stDay = (firstMonthDay.getDay() || 6) - 1;
    const firstDisplayedDay = new Date(year, month, 1 - weekDaysBefore1stDay);
    const lastMonthDate = new Date(year, month + 1, 0).getDate();

    const result = [[]];
    let i = firstDisplayedDay.getDate();
    // for other months days are added with minus
    let monthMult = weekDaysBefore1stDay === 0 ? 1 : -1;
    for (; result[0].length < 7; i++) {
      result[0].push(monthMult * i);
      if (weekDaysBefore1stDay === result[0].length) {
        monthMult = 1;
        i = 0;
      }
    }

    let lastRow;
    for (; i <= lastMonthDate; i++) {
      lastRow = result[result.length - 1];
      lastRow.length < 7 ? lastRow.push(i) : result.push([i]);
    }

    lastRow = result[result.length - 1];
    for (i = 1; lastRow.length < 7; i++)  {
      lastRow.push(-i);
    }

    return result;
  })();


  return (
    <div className="ui-datepicker">
      {mainHeader}
      {monthYearHeader}
      <table className="ui-datepicker-calendar">
        {weekColumns}
        {weekDaysHeader}
        <tbody>
          {displayedDates.map(week => getWeekTr(week))}
        </tbody>
      </table>
    </div>
  );

  function getWeekTr(week) {
    return (
    <tr>
      {week.map(d => {
        const isOtherMonth = d < 0;
        const td = <td className={isOtherMonth && 'ui-datepicker-other-month'
          || d === today && 'ui-datepicker-today'}>{isOtherMonth ? -d : d}</td>;
        return td;
      })}
    </tr>);
  }

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