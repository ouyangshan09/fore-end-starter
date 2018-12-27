/**
 * 页面根组件, 提供Redux-store, history, 国际化, ... 注入
 * @author Ouyang
*/
import React from 'react';
import { Provider, Store } from 'react-redux';
// import { LocaleProvider } from 'antd';
import Antd from 'antd';
import moment from 'moment';
import lodash from 'lodash';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import { Router } from 'react-router';
import { History } from 'history';

console.log('antd:', Antd);
console.log('moment:', moment);
console.log('lodash:', lodash);

interface IProps {
    store?: Store<any>,
    history: History
}

class Root extends React.PureComponent<IProps> {
    render () {
        return (
            1
            // <LocaleProvider locale={zhCN}>
            //     <Provider store={this.props.store}>
            //         <Router history={this.props.history} children={this.props.children} />
            //     </Provider>
            // </LocaleProvider>
        )
    }
}

export default Root;
