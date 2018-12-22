/**
 * 账号登录业务组件
 * @author Ouyang
 * @version 1.0
*/
import React from 'react';
import CSSModules from 'react-css-modules';
import Styles from './Account.scss';
import { Input, Button, Icon } from 'antd';

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
                <Input prefix={<Icon type='user' style={{ color: 'rgba(0, 0, 0, 0.25)' }} />} placeholder='input Account' />
                <Input prefix={<Icon type='lock' style={{ color: 'rgba(0, 0, 0, 0.25)' }} />} placeholder='input password' />
                <Button type='primary' className='login-btn'>Login in</Button>
                </div>
            </div>
        )
    }
}

export default Account;
