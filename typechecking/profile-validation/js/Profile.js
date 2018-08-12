'use strict';

const profileStyle = {
  border: '1px solid #cccccc',
  borderRadius: '5px',
  width: '100%',
  height: '100%',
  margin: '5px'
};

const imageStyle = {
  width: '200px',
  height: '200px'
};

const Profile = props => {
  return (
    <div className="col-md-4 text-center" style={{marginBottom: '10px'}}>
      <div style={profileStyle}>
        <h2>{props.first_name} {props.last_name}</h2>
        <div>
          <img src={props.img} className="img-thumbnail" style={imageStyle}/>
        </div>
        <p>vk: <a href={props.url}>{props.url}</a></p>
        <p>birthday: <a href={props.birthday}>{props.birthday}</a></p>
      </div>
    </div>
  );
};

Profile.defaultProps = {
  img: './images/profile.jpg',
  birthday: '<empty>'
}

Profile.propTypes = {
  img: PropTypes.string,
  url: urlPropType,
  birthday: birthdayPropType
}

function urlPropType(props) {
  const {url} = props;
  const isValid = (typeof url === 'string')
    && /^https:\/\/vk\.com\/(id[0-9]+|[A-Za-z0-9_-]+)$/.test(url);

  return isValid
    ? null
    : new Error(`'url' is not valid: ${url}`);
}

const getCurrentDateStr = () => {
  const today = new Date();
  const year = today.getFullYear();
  let month = (today.getMonth() + 1).toString().replace(/^(\d)$/, '0$1');
  let date = today.getDate().toString().replace(/^(\d)$/, '0$1');

  return `${year}-${month}-${date}`;
}

function birthdayPropType(props) {
  const {birthday} = props;
  const isValid = (typeof birthday === 'string')
    && /\d{4}-\d{2}-\d{2}/.test(birthday)
    && birthday < getCurrentDateStr();

  return isValid
    ? null
    : new Error(`'birthday' is not valid: ${birthday}`);
}