class SearchBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = { fixed: false };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.setPosition.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.setPosition.bind(this));
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.fixed !== nextState.fixed;
  }

  render() {
    return <SearchBoxView fixed={this.state.fixed} />
  }

  isFixed() {
    return ReactDOM.findDOMNode(this).getBoundingClientRect().top <= 0;
  }

  setPosition() {
    return this.setState({ fixed: this.isFixed() });
  }
}
