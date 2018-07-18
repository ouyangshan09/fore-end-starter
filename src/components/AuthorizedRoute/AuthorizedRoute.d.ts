/// <reference types="react-redux" />
import React from 'react';
import { RouteProps } from 'react-router';
interface IProps extends RouteProps {
    visitory?: any;
    authorize?: boolean;
    hasAuthorize?: boolean;
    getAuthorize?: Function;
}
declare const ConnectComponent: React.ComponentClass<Pick<IProps, "children" | "location" | "visitory" | "authorize" | "hasAuthorize" | "getAuthorize" | "component" | "render" | "path" | "exact" | "sensitive" | "strict"> & IProps> & {
    WrappedComponent: React.ComponentType<IProps>;
};
export default ConnectComponent;
