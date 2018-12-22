/**
 * 账号登录业务组件
 * @author Ouyang
 * @version 1.0
*/
import React from 'react';
import CSSModules from 'react-css-modules';
import Styles from './Account.scss';
// import './Account.scss';

interface IProps {

}

@CSSModules(Styles)
class Account extends React.PureComponent<IProps, any> {
    static displayName = 'Account';

    constructor (props: IProps) {
        super(props);
        this.state = {};
    }

    render () {
        return (
            <div styleName='Account' className='Account'>
                <div className='wrapper'>
                    account2
                </div>
            </div>
        )
    }
}

export default Account;
