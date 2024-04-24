void hanoi(int n, std::string origen, std::string destino, std::string medio){
    if (n == 1){
        cout << ("Mover disco 1, desde: "+ origen+ " hasta "+ destino) << endl;
        return ;
    }
    else{
        hanoi(n - 1, origen, medio, destino);
        cout << ("Mover disco: "+ n + " desde: "+ origen+ " hasta: "+ destino) << endl;
        hanoi(n - 1, medio, destino, origen );
    }
        
}

execute hanoi(2,"A", "C", "B");