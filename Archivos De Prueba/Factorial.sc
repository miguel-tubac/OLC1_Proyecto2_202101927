EXECUTE main();

int var1 = 0;

void Principal(){
    cout << ("-----------Factorial Iterativo---------") << endl;
    cout << ("8! = " + factorialIterativo(8)) << endl;
    cout << ("-----------Factorial Recursivo---------") << endl;
    cout << ("8! = " + factorialRecursivo(8)) << endl;
}

int factorialIterativo(int n){
    int resultado = 1;
    for (int i = 1; i <= n; i++) {
        resultado = resultado * i;
    }
    return resultado;
}

int factorialRecursivo(int n) {
    if (n == 0) {
        return 1;
    }
    return (n * factorialRecursivo(n - 1));
}

execute Principal();

/*
--------------------SALIDA ESPERADA-----------------
-----------Factorial Iterativo---------
8! = 40320
-----------Factorial Recursivo---------
8! = 40320
*/