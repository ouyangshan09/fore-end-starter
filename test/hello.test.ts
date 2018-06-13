/**
 * Hello world测试文件
 * @author Ouyang
*/

function add  (a: number, b: number): number {
    return a + b;
}

test('adds 1 + 2 to equal 3', () => {
    // console.log('hello world');
    expect(add(1, 2)).toBe(4);
})
