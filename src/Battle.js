var React = require('react');



class Battle extends React.Component {
    render() {
        return (
            <div className='battleBox'>
                <div className='battlegrounds'>

                </div>
                <table>
                    <tr>
                        <td className='td_left_top'>Move 1</td>
                        <td className='td_right_top'>Move 2</td>
                        <td className='run_option' rowSpan='2'>Run Away</td>
                    </tr>
                    <tr>
                        <td className='td_left_bot'>Move 3</td>
                        <td className='td_right_bot'>Move 4</td>
                    </tr>
                </table>
            </div>
        )
    }
}

module.exports = Battle;