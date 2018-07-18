/**
 * 账号登录业务组件
 * @author Ouyang
 * @version 1.0
*/
import React from 'react';
import './Account.scss';
// import CSSModules from 'react-css-modules';
// import Styles from './Account.scss';

interface IProps {

}

// @CSSModules(Styles)
class Account extends React.PureComponent<IProps, any> {
    static displayName = 'Account';

    constructor (props: IProps) {
        super(props);
        this.state = {};
    }

    render () {
        const wrapProps = {
            styleName: 'Account',
            className: 'Account'
        }
        return (
            <div styleName='Account' className='Account'>
                <div className='inner'>
                    account2
                </div>
            </div>
        )
    }
}

export default Account;
