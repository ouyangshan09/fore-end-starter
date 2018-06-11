/**
 * Jest 测试工具环境配置
*/
const path = require('path');

module.exports = {
    rootDir: path.resolve(__dirname),
    "setupFiles": [
        "<rootDir>/__jest__/setupFile.ts"
    ],
    "transform": {
        "^.+\\.(js)$": "<rootDir>/node_modules/babel-jest",
        "\\.(ts|tsx)$": "<rootDir>/node_modules/ts-jest/preprocessor.js"
    },
    "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.(ts?|tsx?)$",
    "moduleFileExtensions": [
        "js",
        "ts",
        "tsx",
        "json"
    ],
    "moduleNameMapper": {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.ts",
        ".*\\.(css|less|scss)$": "<rootDir>/__mocks__/styleMock.ts"
    },
    // "globals": {
    //     "ts-jest": {
    //         "tsConfigFile": "tsconfig.json",
    //         "babelConfig": {
    //             "presets": [["env", { "modules": false }]],
    //             "env": {
    //                 "test": {
    //                     "presets": [["env"]]
    //                 }
    //             }
    //         }
    //     }
    // },
    "moduleDirectories": [
        "node_modules",
        "src"
    ]
}