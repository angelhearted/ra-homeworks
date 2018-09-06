class SubscribeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isValid: false,
      isError: false
    }
  }

  handleInput(e) {
    if (e.target.value === '') {
      this.setState({
        isValid: false,
        isError: false
      });
    } else if (e.target.validity.valid) {
      this.setState({
        isValid: true,
        isError: false
      });
    } else {
      this.setState({
        isValid: false,
        isError: true
      });
    }
  };

  render() {
    return (
      <div className="subscribe__form">
        <form className={`form form--subscribe ${this.state.isValid ? 'is-valid' : ''} ${this.state.isError ? 'is-error' : ''}`}
          ref={el => this.form = el}>
          <h4 className="form-title">Подписаться:</h4>
          <div className="form-group">
            <label htmlFor="input-email" className="sr-only">Email</label>
            <input type="email" id="input-email" placeholder="Email" className="form-control" onChange={this.handleInput.bind(this)}/>
            <div className="form-error">Пожалуйста, проверьте корректность адреса электронной почты</div>
            <button type="submit" className="form-next">
              <i className="material-icons">keyboard_arrow_right</i>
            </button>
          </div>
        </form>
      </div>
    )
  }
}