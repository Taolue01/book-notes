#include <stdio.h>
#include <string.h>
#include <stdlib.h>

/**
 * 时间复杂度 O(n2)
 */
char * replaceBlankOn2(char * string);
/**
 * 时间复杂的 O(n)
*/
char * replaceBlankOn(char * string);

// test
void test();

int main(int argc, char const *argv[])
{
    char * string = (char *)malloc(sizeof(char)*50);
    strcpy(string, "hello world");
    printf("%s \n", string);
    printf("result: %s \n", replaceBlankOn2(string));
    printf("result: %s \n", replaceBlankOn(string));

    test();
    return 0;
}

void test() {
    char * string = (char *)malloc(sizeof(char)*50);
    strcpy(string, "We are happy");
    printf("replaceBlankOn result: %s \n", replaceBlankOn(string));
    printf("replaceBlankOn2 result: %s \n", replaceBlankOn2(string));

    char * string1 = (char *)malloc(sizeof(char)*50);
    strcpy(string1, " We are  happy  ");
    printf("replaceBlankOn result: %s \n", replaceBlankOn(string1));
    printf("replaceBlankOn2 result: %s \n", replaceBlankOn2(string1));

    char * string2 = (char *)malloc(sizeof(char)*50);
    printf("replaceBlankOn result: %s \n", replaceBlankOn(string2));
    printf("replaceBlankOn2 result: %s \n", replaceBlankOn2(string2));


    char * string3 = (char *)malloc(sizeof(char)*50);
    strcpy(string3, "");
    printf("replaceBlankOn result: %s \n", replaceBlankOn(string3));
    printf("replaceBlankOn2 result: %s \n", replaceBlankOn2(string3));

}

/**
 * 时间复杂度O(n2)
*/
char * replaceBlankOn2(char * str) {
    char blank = ' ';
    int index = 0;
    int loop = 1;
    if (str == NULL || strlen(str) == 0) {
        return str;
    }

    while (loop) {
        char temp = str[index];

        if (temp == blank) {
            int length = strlen(str);
            int j = length - 1;
            while (j > index) {
                str[j + 2] = str[j];
                j--;
            }
            str[index] = '%';
            str[index + 1] = '2';
            str[index + 2] = '0';
        }
        index++;
        if (index > strlen(str)) {
            loop = 0;
            break;
        }
    }
    
    return str;
}

/**
 * 时间复杂度O(n)
*/
char * replaceBlankOn(char * str) {
    char blank = ' ';
    int  blankCount = 0;
    int  length = strlen(str);

    if (str == NULL || strlen(str) <= 0) {
        return str;
    }

    for (int i = 0; i < length; i++) {
        if (str[i] == blank) {
            blankCount++;
        }
    }

    int resultLength = length + 2*blankCount;

    int originIndex = length - 1;
    int resultIndex = resultLength - 1;
    while(1) {
        if (str[originIndex] == blank) {
            str[resultIndex] = '0';
            str[resultIndex - 1] = '2';
            str[resultIndex - 2] = '%';
            resultIndex -= 3;
        } else {
            str[resultIndex] = str[originIndex];
            resultIndex--;
        } 
        originIndex--;
        if (originIndex < 0) {
            break;
        }
    }

    return str;
}
