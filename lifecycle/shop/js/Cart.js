class Cart extends React.Component {
  shouldComponentUpdate(nextProps) {
    return this.props.isOpen !== nextProps.isOpen
      || nextProps.isOpen;
  }

  render() {
    return (
      <CartView {...this.props} />
    );
  }

}
