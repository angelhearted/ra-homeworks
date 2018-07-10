'use strict';

const viewModes = {
  LIST: 'view_list',
  CARD: 'view_module'
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.layouts = props.layouts;
    this.state = {
      viewMode: viewModes.CARD,
      layout: { md: this.layouts['md'] }
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    const w = window.innerWidth;
    console.log(w)
    this.setState({
      layout: w < 320
        ? { xs: this.layouts['xs'] }
        : w < 460
        ? { sm: this.layouts['sm'] }
        : w < 800
        ? { md: this.layouts['md'] }
        : { lg: this.layouts['lg'] }
    });
  }

  render() {
    return (
      <div>
        <div className="toolbar">
          <IconSwitch
            icon={this.state.viewMode}
            onSwitch={this.setNextViewMode.bind(this)} />
        </div>
        {this.renderLayout()}
      </div>
    );
  }

  renderLayout() {
    return (
      this.state.viewMode === viewModes.CARD
      ? <CardsView
        layout={this.state.layout}
        cards={this.getShopItems(this.props.products)} />
      : <ListView items={this.getShopItems(this.props.products)} />
    );
  }

  getShopItems(products) {
    return products.map(product => {
      let cardProps = {
        title: product.name,
        caption: product.color,
        img: product.img,
        price: `$${product.price}`
      };

      return (
        this.state.viewMode === viewModes.CARD
          ? <ShopCard {...cardProps} />
          : <ShopItem {...cardProps} />
      );
    });
  }

  setNextViewMode() {
    this.setState({viewMode: this.state.viewMode === viewModes.CARD ? viewModes.LIST : viewModes.CARD});
  }
}
