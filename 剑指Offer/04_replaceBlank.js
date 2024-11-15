// Question 4 
/**
 * 请实现一个函数，把字符串中的每个空格替换成"%20"。
 * 例如输入“We are happy.”​，
 * 则输出“We%20are%20happy.”​。 
 */
function replaceBlank(obj) {
    const blank = ' ';
    let str = obj.str;

    let loop = true;
    let index = 0;

    while (loop) {
        let char = str[index];

        if (char === blank) {
            j = str.length - 1;
            while (j > index) {
                str[j + 2] = str[j];
                j--;
            }
            str[index] = '%';
            str[index + 1] = '2';
            str[index + 2] = '0';
        }
        index++;
        if (index > str.length) {
            loop = false;
            break;
        }

    }

    return str;
}
let string = 'hello world';
console.log(replaceBlank({str: 'hello world'}));



