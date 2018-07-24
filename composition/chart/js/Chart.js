const Types = {
  SERIE: 0,
  STACKED: 1,
  LAYERED: 2,
  HORIZONTAL: 3
};

class Chart extends React.Component {
  static get Types() {
    return Types;
  }

  /*constructor(props) {
    super(props);
  }*/

  getClass() {
    return this.props.type === Types.STACKED
      ? 'stacked'
      : this.props.type === Types.LAYERED
      ? 'layered'
      : '';
  }

  getParams() {
    const p = {};
    const t = this.props.type;

    p.classOut = 'Charts' + (t === Types.HORIZONTAL ? ' horizontal' : '');
    p.classIn = 'Charts--serie ' + this.getClass();
    p.height = t === Types.HORIZONTAL ? 'auto' : 250;

    return p;
  }

  compareNumbers(a, b) {
    return a - b;
  }

  render() {
    const {data, series, labels, colors, max, type} = this.props;
    const p = this.getParams();

    return (<div className={p.classOut}>
      { data.map((serie, serieIndex) => {
        
        const sortedSerie = type === Types.LAYERED ? serie.slice(0).sort(this.compareNumbers) : undefined;
        return (
          <div className={p.classIn} key={serieIndex} style={{height: p.height}}>
          <label>{ type === Types.HORIZONTAL ? series[serieIndex] : labels[serieIndex] }</label>
          { serie.map((item, itemIndex) => {

            const color = colors[itemIndex];
            // if stacked - sum, else - max
            const divider = type === Types.STACKED
              ? serie.reduce((carry, current) => carry + current, 0)
              : max;
            const size = item / divider * 100;
            const style = {
              backgroundColor: color,
              opacity: type === Types.STACKED ? 1 : item / this.props.max + .05,
              zIndex: item
            };

            style[type === Types.HORIZONTAL ? 'width' : 'height'] = size + '%';
            if (type === Types.LAYERED) {
              style.right = ((sortedSerie.indexOf(item) / (serie.length + 1)) * 100) + '%';
            }

            return (
              <div className={`Charts--item ${this.getClass()}`} style={ style } key={ itemIndex }>
                <b style={{ color: color }}>{ item }</b>
              </div>
            );
          }) }
          </div>
        );
      }) }
    </div>);
  }
}