import { HTMLAttributes, DOMAttributes } from 'react';

declare module '*.scss' {
    const content: any;
    export default content;
}

declare module '*.png' {
    const content: any;
    export default content
}

declare module 'jest' {
    const run: any;
}

// export declare namespace React {
//     interface HTMLAttributes<T> extends DOMAttributes<T> {
//         styleName?: string;
//         ouyang?: string;
//     }
// }

// interface CommonElement {
//     styleName?: string;
//     [propName: string]: any;
// }

// export declare namespace JSX {
//     interface IntrinsicElements {
//         div: CommonElement
//         [elementName: string]: any;
//     }
// }

// declare module 'react' {
//     interface HTMLAttributes<T> extends DOMAttributes<T> {
//         styleName?: string;
//     }
// }

// declare interface HTMLAttributes<T> extends DOMAttributes<T> {
//     styleName?: string;
// }

// interface CommonElement {
//     styleName?: string;
//     [propName: string]: any;
// }

// declare namespace JSX {
//     interface IntrinsicElements {
//         // 给div元素增加styleName属性，为了兼容 react-css-modules 库
//         div: CommonElement;
//         [elemName: string]: any;
//     }

//     interface HTMLAttributes<T> extends DOMAttributes<T> {
//         styleName?: string;
//     }
// }
