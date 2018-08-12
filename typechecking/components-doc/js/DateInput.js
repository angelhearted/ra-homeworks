'use strict';

const DateInput = props => {
  return (
    <div className="form-group">
      <label>{props.label}</label>
      <input type="text" className="form-control" name={props.name} onChange={props.onChange}
        value={props.value} required={props.required} placeholder="YYYY-MM-DD"/>
    </div>
  )
};

DateInput.propTypes = {
  value: PropTypes.string
};

DateInput.defaultProps = {
  value: currDateFormat()
};

function currDateFormat() {
  const today = new Date();
  const year = today.getFullYear();
  let month = (today.getMonth() + 1).toString().replace(/^(\d)$/, '0$1');
  let date = today.getDate().toString().replace(/^(\d)$/, '0$1');

  return `${year}-${month}-${date}`;
}
