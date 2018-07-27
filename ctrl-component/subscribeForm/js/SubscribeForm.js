const SubscribeForm = () => {
  let form;

  const handleInput = e => {
    if (e.target.value === '') {
      form.classList.remove('is-valid');
      form.classList.remove('is-error');
    } else if (e.target.validity.valid) {
      form.classList.remove('is-error');
      form.classList.add('is-valid');
    } else {
      form.classList.remove('is-valid');
      form.classList.add('is-error');
    }
  }

  return (
    <div className="subscribe__form">
      <form className='form form--subscribe' ref={el => form = el}>
        <h4 className="form-title">Подписаться:</h4>
        <div className="form-group">
          <label htmlFor="input-email" className="sr-only">Email</label>
          <input type="email" id="input-email" placeholder="Email" className="form-control" onChange={handleInput}/>
          <div className="form-error">Пожалуйста, проверьте корректность адреса электронной почты</div>
          <button type="submit" className="form-next">
            <i className="material-icons">keyboard_arrow_right</i>
          </button>
        </div>
      </form>
    </div>
  );
};