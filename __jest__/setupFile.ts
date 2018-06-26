/**
 * Jest配置文件
 * @author Ouyang
*/
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
