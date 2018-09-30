'use strict';

function cleanField(e) {
  const fld = e.target;
  const invalidChars = fld.name === "name"
    ? /[^\w\d_-]/g
    : fld.name === "email"
    ? /[^\w\d@._-]/g
    : /[^\w\d_]/g;
  fld.value = fld.value.replace(invalidChars, '');
}

function AuthForm({onAuth}) {
  const handleSubmit = e => onAuth({
    name: e.target.name.value,
    email: e.target.email.value,
    password: e.target.password.value
  });

  return (
    <form className="ModalForm" action="/404/auth/" method="POST" onSubmit={handleSubmit}>
      <div className="Input">
        <input required type="text" placeholder="Имя" name='name' onChange={cleanField}/>
        <label></label>
      </div>
      <div className="Input">
        <input type="email" placeholder="Электронная почта" name='email' onChange={cleanField}/>
        <label></label>
      </div>
      <div className="Input">
        <input required type="password" placeholder="Пароль" name='password' onChange={cleanField}/>
        <label></label>
      </div>
      <button type="submit">
        <span>Войти</span>
        <i className="fa fa-fw fa-chevron-right"></i>
      </button>
    </form>
  );
}