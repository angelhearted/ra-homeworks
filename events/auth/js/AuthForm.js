'use strict';

function AuthForm({onAuth}) {
  let form;
  return (
    <form className="ModalForm" action="/404/auth/" method="POST"
      onSubmit={() => onAuth({name: form.name.value, email: form.email.value, password: form.password.value})} ref={f => form = f}>
      <div className="Input">
        <input required type="text" placeholder="Имя" name='name' onChange={e => e.target.value = e.target.value.replace(/[^\w\d_-]/g, '')}/>
        <label></label>
      </div>
      <div className="Input">
        <input type="email" placeholder="Электронная почта" name='email' onChange={e => e.target.value = e.target.value.replace(/[^\w\d@._-]/g, '')}/>
        <label></label>
      </div>
      <div className="Input">
        <input required type="password" placeholder="Пароль" name='password' onChange={e => e.target.value = e.target.value.replace(/[^\w\d_]/g, '')}/> />
        <label></label>
      </div>
      <button type="submit">
        <span>Войти</span>
        <i className="fa fa-fw fa-chevron-right"></i>
      </button>
    </form>
  );
}