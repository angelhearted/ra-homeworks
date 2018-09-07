'use strict';

const MonthTable = props => {

    console.log('MonthTable', props);

    return (
        <div>
            <h2>Month Table</h2>
            <table>
                <tr>
                    <th>Month</th>
                    <th>Amount</th>
                </tr>
                {props.list.map(item => (
                    <tr>
                        <td>{item.month}</td>
                        <td>{item.amount}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
};

class MonthTableAdapted extends React.Component {
    months = ['Jan', 'Feb', 'Mar', 'Apr', 'May',
        'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    getMonthedList = () => {
        // init zero numbers for each month
        const monthedList = this.months.map(m => ( {month: m, amount: 0} ));

        // current year
        const year = new Date().getFullYear();

        this.props.list.forEach(p => {
            // exclude other years
            if (!p.date.startsWith(year)) {
                return;
            }

            const month = this.months[(new Date(p.date)).getMonth()];
            monthedList[this.months.indexOf(month)].amount += p.amount;
        });

        return monthedList;
    }

    render = () => <MonthTable list={this.getMonthedList()} />;
};