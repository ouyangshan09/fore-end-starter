/**
 * 页面入口
 * @author Ouyang
*/
import React from 'react';
import {  Route } from 'react-router';

interface IProps {
    //
}

class IndexRoute extends React.PureComponent<IProps, any> {
    static displayName = 'IndexRoute';

    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Route exact path='/' component={() => <div>根路由</div>}></Route>
                <Route path='/account' component={() => <div>账号路由</div>} ></Route>
            </div>
        )
    }
}

export default IndexRoute;
