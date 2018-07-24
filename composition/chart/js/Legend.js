class Legend extends React.Component {
  render() {
    return (<div className="Legend">
      { this.props.labels.map((label, labelIndex) => {
        return (
        <div>
          <span className="Legend--color" style={{ backgroundColor: this.props.colors[labelIndex % this.props.colors.length] }} />
          <span className="Legend--label">{ label }</span>
        </div>
        );
      }) }
    </div>);
  }
}