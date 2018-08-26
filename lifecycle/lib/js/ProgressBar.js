class ProgressBar extends React.Component {
  componentDidMount() {
    this.draw();
  }

  componentDidUpdate() {
    this.draw();
  }

  draw() {
    this.canvas.width = this.canvas.width;
    const context = this.canvas.getContext('2d');

    const centerX = this.canvas.width / 2;
    const centerY = this.canvas.height / 2;
    const pi2 = 2 * Math.PI;
    const progress = this.props.completed / this.props.total;

    context.beginPath();
    context.lineWidth = 7;
    context.arc(centerX, centerY, 52, 0, pi2);
    context.strokeStyle = '#4ca89a';
    context.stroke();
    context.closePath();

    context.beginPath();
    context.arc(centerX, centerY, 45, 0, progress * pi2);
    context.strokeStyle = '#96d6f4';
    context.stroke();
    context.closePath();

    context.font = "30px sans-serif";
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(Math.round(progress * 100) + '%', centerX, centerY);
  }

  render() {
    return (
      <canvas id="progressCanvas" className="progress" ref={el => this.canvas = el}
              width="180px" height="120px"/>
    );
  }
}
