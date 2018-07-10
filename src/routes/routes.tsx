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
            <div><B /></div>
        )
    }
}

class B extends React.PureComponent {
    constructor(props: any) {
        super(props)
        console.log('B ctr');
    }

    componentWillMount() {
        console.log('B Component WillMount');
    }

    componentDidMount() {
        console.log('B Component DidMount');
    }

    render() {
        return (
            <div><C /></div>
        )
    }
}

class C extends React.PureComponent {
    constructor(props: any) {
        super(props)
        console.log('C ctr');
    }

    componentWillMount() {
        console.log('C Component WillMount');
    }

    componentDidMount() {
        console.log('C Component DidMount');
    }

    render() {
        return (
            <div>C</div>
        )
    }
}

class D extends React.PureComponent {
    render () {
        return (
            <div>D</div>
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
