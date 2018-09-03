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

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May',
    'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const MonthTableAdapted = props => {
    const monthedProps = {};

    // init zero numbers for each month
    monthedProps.list = months.map(m => ({month: m, amount: 0}));

    // current year
    const year = new Date().getFullYear();

    props.list.forEach(p => {
        // exclude other years
        if (!p.date.startsWith(year)) {
            return;
        }

        const month = months[(new Date(p.date)).getMonth()];
        monthedProps.list[months.indexOf(month)].amount += p.amount;
    });

    return MonthTable(monthedProps);
};