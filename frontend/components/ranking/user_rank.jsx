import React from 'react';

class UserRank extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { name, total, west, east, eastStandings, westStandings } = this.props
        const standings = []
        eastStandings.forEach(element => {
            standings.push(element)
        });
        westStandings.forEach(element => {
            standings.push(element)
        });

        return (
            <div className='user-rank'>
                {name}: {total}
                <div className="modal">
                    {eastStandings}
                    {westStandings}
                </div>
            </div>
        )
    }
}

export default UserRank;