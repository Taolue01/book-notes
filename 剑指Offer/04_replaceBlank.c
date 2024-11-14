#include <stdio.h>
#include <string.h>
#include <stdlib.h>

char * replaceBlank(char * string);

int main(int argc, char const *argv[])
{
    char * string = (char *)malloc(sizeof(char)*50);
    // strcpy(string, "hello world");
    strcpy(string, "We are happy");
    printf("%s \n", string);
    printf("result: %s", replaceBlank(string));

    return 0;
}

char * replaceBlank(char * str) {
    char blank = ' ';
    int index = 0;
    int loop = 1;

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

