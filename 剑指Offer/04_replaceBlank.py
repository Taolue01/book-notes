# Question 4 
# 替换字符串
# 
def replaceSpace(strOrigin: str) -> str:
    blank = ' '

    loop = True
    index = 0
    strlist = list(strOrigin)
    while (loop):
        char = strlist[index]
        if (char == blank):
            length = len(strlist)
            j = length - 1
            strlist.extend(['', ''])
            while (j > index):
                strlist[j + 2] = strlist[j]
                j = j - 1
            strlist[index] = '%'
            strlist[index + 1] = '2'
            strlist[index + 2] = '0'

        index += 1
        if (index >= len(strlist)):
            loop = False
            break

    return ''.join(strlist)


if __name__ == '__main__': 
    string1 = 'hello word'
    print(replaceSpace(string1))

 