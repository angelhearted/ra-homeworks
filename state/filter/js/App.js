'use strict';

class App extends React.Component {
  constructor(props) {
    super(props);
    const {filters, allProjects} = props;

    this.state = {
      selected: 'All',
      projects: allProjects
    };
  }

  selection(newSelect) {
    this.setState({
      selected: newSelect,
      projects: newSelect === 'All' ? allProjects : allProjects.filter(p => p.category === newSelect)
    });
  }

  render() {
    return (
      <div>
        <Toolbar
          filters={filters}
          selected={this.state.selected}
          onSelectFilter={this.selection.bind(this)} />
        <Portfolio projects={this.state.projects} />
      </div>
    );
  }
}
