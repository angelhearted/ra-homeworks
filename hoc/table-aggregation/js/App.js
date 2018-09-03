'use strict';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
    }

    componentDidMount() {
        axios.get('https://api.myjson.com/bins/l2s9l').then(response => {
            this.setState(response.data);
        });
    }

    render() {
        return (
            <div id="app">
                <MonthTableAdapted list={this.state.list} />
                <YearTableAdapted list={this.state.list} />
                <SortTableDesc list={this.state.list} />
            </div>
        );
    }
}