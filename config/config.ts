/**
 * Created by Ouyang on 2018/3/29.
 * 项目配置
 * @author Ouyang
 */
import Path from 'path';

const root = Path.join(__dirname, '../');

export default {
    root: root,
    src: Path.join(root, 'src'),
    lib: Path.join(root, 'lib'),
    dist: Path.join(root, 'dist'),
    port: 80,
    protocol: 'http',
    host: 'starter.oy.ecaicn.com'
};
