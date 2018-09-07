'use strict';

const YearTable = props => {

    console.log('YearTable', props);

    return (
        <div>
            <h2>Year Table</h2>
            <table>
                <tr>
                    <th>Year</th>
                    <th>Amount</th>
                </tr>
                {props.list.map(item => (
                    <tr>
                        <td>{item.year}</td>
                        <td>{item.amount}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
};

class YearTableAdapted extends React.Component {

    getYearedList = datesList => {
        const yearedList = [];
        datesList.forEach(p => {
            const year = new Date(p.date).getFullYear();
            // init zero numbers for each year
            yearedList.find(el => el.year === year)
                || yearedList.push({ year, amount: 0 });

            yearedList.find(el => el.year === year).amount += p.amount;
        });
        return yearedList.sort((a, b) => a.year - b.year);
    }

    render = () => <YearTable list={this.getYearedList(this.props.list)} />;
};