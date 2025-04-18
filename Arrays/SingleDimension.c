#include <stdio.h>

int main() {
    int n[10], i;

    printf("Enter 10 numbers (between 1 to 10):\n");
    for(i = 0; i < 10; i++) {
        scanf("%d", &n[i]);
    }

    printf("You entered: ");
    for(i = 0; i < 10; i++) {
        printf("%d ", n[i]);
    }

    return 0;
}
