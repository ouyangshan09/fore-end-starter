/**
 * 授权登录验证路由组件
 * 无登录权限跳转至 /account 路由下
 * 有登录权限继续访问组件内容
 * @author Ouyang
 * @version 1.0
*/

import React from 'react';
import {
    Route,
    RouteProps,
    RouteComponentProps,
    Redirect,
    withRouter
} from 'react-router';
import {
    connect
} from 'react-redux';

interface IProps extends RouteProps {
    visitory?: any;
    authorize?: boolean;
    hasAuthorize?: boolean;
    getAuthorize?: Function;
}

class AuthorizedRoute extends React.PureComponent<IProps, any> {
    constructor (props: IProps) {
        super(props);
        this.state = {
            authorize: false,
            hasAuthorized: false
        };
    }

    componentDidMount () {
        //
    }

    renderAuthor = (props: RouteComponentProps<any>): React.ReactNode => {
        const Component = this.props.component;
        if (this.props.authorize === true) {
            // 已经登录, 显示私有组件
            return <Component {...props} />
        }
        return <Redirect to='/account' />;
    }

    render () {
        const {
            component: Component,
            ...reset
        } = this.props;
        console.log('authorized.props:', this.props);
        return (
            <Route {...reset} render={(props) => {
                if (this.props.authorize === true) {
                    return <Component {...props} />
                }
                return <Redirect to='/account' />
            }} />
        )
    }
}

// export default AuthorizedRoute;

const ConnectComponent = connect<any, Function, IProps>(
    (store, ownProps) => {
        return {};
    },
    (dispatch, ownProps) => {
        return {};
    }
)(AuthorizedRoute);

export default ConnectComponent;
