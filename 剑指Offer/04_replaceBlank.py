# Question 4 
# 替换字符串
# 


# 时间复杂度O（n2）
def replaceSpaceOn2(strOrigin: str) -> str:
    if (strOrigin == None or len(strOrigin) ==0):
        return strOrigin
    
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


# 时间复杂度为O(n)
def replaceSpaceOn(string: str) -> str:
    blankCount = 0
    blank = ' '
    originLength = len(string)
    strlist = list(string)

    if (string == None or len(string) ==0):
        return string

    for index in range(originLength):
        if (string[index] == blank):
            blankCount += 1

    exendlist = []
    for index in range(blankCount):
        exendlist.extend(['', ''])
    
    strlist.extend(exendlist)

    originIndex = originLength - 1
    loop = True
    index = len(strlist) - 1
    while (loop):
        if (strlist[originIndex] == blank):
            strlist[index] = '0'
            strlist[index - 1] = '2'
            strlist[index - 2] = '%'
            index -= 3
            pass
        else:
            strlist[index] = strlist[originIndex]
            index -= 1

        originIndex -= 1

        if (index < 0):
            loop = False
            break

    return ''.join(strlist)


if __name__ == '__main__': 
    string1 = 'hello word'
    string1 = 'we are happy'
    print(replaceSpaceOn2(string1))
    print(replaceSpaceOn(string1))

 