import React from 'react';
import { Store } from 'react-redux';
import { History } from 'history';
interface IProps {
    store?: Store<any>;
    history: History;
}
declare class Root extends React.PureComponent<IProps> {
    render(): JSX.Element;
}
export default Root;
