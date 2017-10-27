import React from 'react';

class UserRank extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { name, total, west, east } = this.props

        return (
            <div className='user-rank'>
                {name}: {total}
            </div>
        )
    }
}

export default UserRank;