import React from 'react';

interface IProps {
    name?: string;
    gridFriend: string;
};

class TestComponent extends React.PureComponent<IProps> {
    static displayName = 'TestComponent';

    static defualtProps = {};

    render () {
        return (
            <div>
                <span>{this.props.name}</span>
                <span>{this.props.gridFriend}</span>
            </div>
        )
    }
}

export default TestComponent;
