import React from 'react';

export interface IProps {
    name?: string;
    gridFriend: string;
};

class TestComponent extends React.PureComponent<IProps, any> {
    static displayName = 'TestComponent';

    static defualtProps = {
        gridFriend: 'lc'
    };

    constructor (props: IProps) {
        super(props);
        this.state = {};
    }

    render () {
        return (
            <div>
                {this.props.name && <span>{this.props.name}</span>}
                {this.props.gridFriend && <span>{this.props.gridFriend}</span>}
            </div>
        )
    }
}

export default TestComponent;
