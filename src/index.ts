/**
 * Created by Ouyang on 2018/3/29.
 * 项目入口
 * @author Ouyang
 */
import Styles from './index.scss';

 class Hello {
     private value1: string = '';

     constructor (value: string) {
        this.value1 = value;
     }

     static create() {
         return 'null';
     }
 }

console.log('Hello ts starter');
console.log('Index scss object:', Styles);
