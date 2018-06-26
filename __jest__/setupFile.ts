/**
 * Jest配置文件
 * @author Ouyang
*/
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import 'babel-core';
// import 'babel-polyfill';

configure({ adapter: new Adapter() });
