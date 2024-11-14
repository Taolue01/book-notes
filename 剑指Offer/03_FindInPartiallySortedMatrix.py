# Question 3
# 二维数组中的查找
# 在一个二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
# 请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

def findInMatrix(matrix: list, rows: int, columns: int, num: int) -> bool:
    result = False
    a = 0
    b = columns - 1
    loop = True
    
    if (matrix == None or len(matrix) <= 0) or (matrix[0][0] > num) or (matrix[rows - 1][columns - 1] < num) or rows <= 0 or columns <= 0 :
        loop = False

    while (loop):
        if (matrix[a][b] == num):
            result = True
            break
        elif matrix[a][b] > num:
            b = b - 1
            pass
        else:
            a = a + 1
            pass

        if (a >= rows - 1 or  b < 0):
            loop = False


    return result

def findInMatrix2(matrix: list, rows: int, columns: int, num: int) -> bool:
    result = False
    row = rows - 1
    column = 0
    loop = True
    maxRow = rows - 1; maxColumn = columns - 1

    if (matrix == None or len(matrix) <= 0) or (matrix[0][0] > num) or (matrix[maxRow][maxColumn] < num) or rows <= 0 or columns <= 0 :
        loop = False

    while (loop):
        temp = matrix[row][column]
        if (temp == num):
            result = True
            break
        elif temp > num:
            row = row - 1
        else:
            column = column + 1


        if (row < 0 or  column > maxColumn):
            loop = False


    return result

matrix = [
    [1, 2, 8, 9], 
    [2, 4, 9, 12], 
    [4, 7, 10, 13], 
    [6, 8, 11, 15]]
n = 7
rows = 3 
columns = 3

result = findInMatrix2(matrix=matrix, rows=rows, columns=columns, num=n)
print(result)