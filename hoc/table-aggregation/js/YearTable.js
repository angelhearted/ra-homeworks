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

const YearTableAdapted = props => {
    const yearedProps = {};
    yearedProps.list = [];

    props.list.forEach(p => {
        const year = new Date(p.date).getFullYear();
        // init zero numbers for each year
        yearedProps.list.find(el => el.year === year)
            || yearedProps.list.push({year: year, amount: 0});

        yearedProps.list.find(el => el.year === year).amount += p.amount;
    });

    // sort by year
    yearedProps.list = yearedProps.list.sort((a, b) => a.year - b.year);

    return YearTable(yearedProps);
};