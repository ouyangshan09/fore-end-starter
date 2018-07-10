/**
 * 账号登录业务组件
 * @author Ouyang
 * @version 1.0
*/
import React from 'react';
import './Account.scss';

interface IProps {

}

class Account extends React.PureComponent<IProps, any> {
    static displayName = 'Account';

    constructor (props: IProps) {
        super(props);
        this.state = {};
    }

    render () {
        return (
            <div>account</div>
        )
    }
}

export default Account;
