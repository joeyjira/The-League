import React from 'react';

class PlayerRank extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { name, total, west, east } = this.props

        return (
            <div>
                {name}: {total}
            </div>
        )
    }
}

export default PlayerRank;