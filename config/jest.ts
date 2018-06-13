/**
 * Jest 测试工具环境配置
*/
import jest from 'jest';
import JsetConfig from '../jest.config';

const argv = process.argv.slice(2);

argv.push('--config', JSON.stringify(JsetConfig));

jest.run(argv);

