import React from 'react';
import { Provider } from 'react-redux';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';

interface IProps {
    store: any,
    history: any
};

class Root extends React.PureComponent<IProps> {
    render () {
        return (
            <LocaleProvider locale={zhCN}>
                <Provider store={this.props.store} />
            </LocaleProvider>
        )
    }
}

export default Root;
