'use strict';

const SortTable = props => {

    console.log('SortTable', props);

    return (
        <div>
            <h2>Sort Table</h2>
            <table>
                <tr>
                    <th>Date</th>
                    <th>Amount</th>
                </tr>
                {props.list.map(item => (
                    <tr>
                        <td>{item.date}</td>
                        <td>{item.amount}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
};

class SortTableDesc extends React.Component {
    dateSort = (a, b) => a.date > b.date ? 1 : -1;
    render = () => SortTable({list: this.props.list.sort(this.dateSort)});
};