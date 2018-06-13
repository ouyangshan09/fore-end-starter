/**
 * Hello world2测试文件
 * @author Ouyang
*/

function remove(a: number, b: number): number {
    return a + b;
}

test('remove 1 + 2 to equal 3', () => {
    // console.log('hello world');
    expect(remove(1, 2)).toBe(3);
})