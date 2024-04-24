void Principal() {
    cout << ("----------Ackermann---------") << endl;
    cout << (ack2(3, 4)) << endl;
}

int ack2(int m, int n) {
    if (m == 0) {
        return n+1;
    } else if (n == 0){
      return ack2(m- 1, 1);
    } else {
      return ack2(m - 1, ack2(m, n - 1));
    }
}

execute Principal();

/*
Salida Esperada para (3,4)
----------Ackermann---------
125
Salida Esperada para (0,0)
----------Ackermann---------
1
Salida Esperada para (1,2)
----------Ackermann---------
4
*/