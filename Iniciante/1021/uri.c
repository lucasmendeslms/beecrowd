#include <stdio.h>
#include <math.h>

int main (void){

    double troco;
    scanf("%lf", &troco);

    float cedulas[12] = {100.00, 50.00, 20.00, 10.00, 5.00, 2.00, 1.00, 0.50, 0.25, 0.10, 0.05, 0.01};
    int notas[12] = {0, 0 , 0, 0, 0, 0, 0, 0 , 0, 0, 0, 0};

    for(int i = 0; i < 12; i++){

        if(troco >= cedulas[i]) {
            notas[i] = floor((troco/cedulas[i]));
            troco = troco - cedulas[i] * notas [i];
        }
    }

    printf("NOTAS:\n");

    for (int i = 0; i < 6; i++){
        printf("Tá entrando aqui");
        printf("%i", notas[i] + "notas(s) de R$ %f\n", cedulas[i]);
    }

    return 0;
    

}