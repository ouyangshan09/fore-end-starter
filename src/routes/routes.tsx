/**
 * 路由控制器
 * @author Ouyang
*/

import React from 'react';
import { Route, withRouter, RouteComponentProps } from 'react-router';
import AuthorizedRoute from '../components/AuthorizedRoute';
import AccountAuthorized from './account';

interface IProps extends RouteComponentProps<any> {
    //
}

class A extends React.PureComponent {
    constructor (props: any) {
        super(props)
        console.log('A ctr');
    }

    componentWillMount () {
        console.log('A Component WillMount');
    }

    componentDidMount () {
        console.log('A Component DidMount');
    }

    render () {
        return (
            <div>A</div>
        )
    }
}

class RouteControl extends React.PureComponent<IProps, any> {
    static displayName = 'IndexRoute';

    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <AuthorizedRoute exact path='/' component={A} />
                <Route path='/account' component={AccountAuthorized} />
            </div>
        )
    }
}

export default withRouter<IProps>(RouteControl);
