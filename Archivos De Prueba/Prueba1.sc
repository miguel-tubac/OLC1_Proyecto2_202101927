
// Primera forma de vectores
//int b = 2;  //ya
//int dato [] = new int [3];  //ya
//int dato2 [] = new int [b];  //ya
//int dato3 [] = new int [2,3,4];  //ya
//int dato4 [] = new int [b,5,b];  //ya

//int nuevo1;  //ya
//nuevo1 = dato3[2];  //ya
//int nuevo2 = dato3[5];  //ya
//cout << nuevo1 << endl;  //ya
//cout << nuevo2; //ya

//int nuevo3; // ya
//int a = 2; // ya 
//nuevo3 = dato3[a]; // ya
//int nuevo4 = dato3[a]; //ya
//cout << nuevo3; // ya
//cout << nuevo4; //ya

//cout << dato << endl; //ya
//cout << dato2 << endl; //ya
//cout << dato3 << endl; //ya
//cout << dato4 << endl; //ya

// Reasignacion
int a = 2; // ya
int b; //ya
int dato3 [] = new int [2,3,4]; //ya
//dato3 [a] = b; //ya
dato3 [1] = dato3[1]; -------------------------Aca me quede, ReasignarVector.js
//dato3 [a] = dato3[a]; 
cout << dato3; //ya


// Segunda forma de vectores
/*
int a = 3;
int c = 2;
int dato [][] = new int [a][c];
*/








//-----Incremento o decremento
/*
int as = 2;
as ++;
cout << as << endl;
as --;
as --;
cout << as;
*/

//---- Casteos:
// Int a Doble
/*
int dato = 18;
double edad = 12.5;
double edad2;
edad = (double) dato;
cout << edad;
*/

// Doble a Int
/*
double dato = 18.9;
int edad = 12;
double edad2;
edad = (int) dato;
cout << edad;
*/

// Int a String
/*
int dato = 18;
std::string edad = "hola";
edad = (std::string) dato;
cout << edad;
*/

// Int a Char
/*
int dato = 70;
char edad = 'e';
edad = (char) dato;
cout << edad;
*/

// Double a String
/*
double dato = 70.7;
std::string edad = "hola";
edad = (std::string) dato;
cout << edad;
*/

// Char a Int
/*
char dato = 'F';
int edad = 23;
edad = (int) dato;
cout << edad;
*/

// Char a Double
/*
char dato = 'A';
double edad = 23.2;
edad = (double) dato;
cout << edad;
*/




/*
//---------Variables Generales:
// Int:
int a = 12;
int b = a;
cout << b << endl;
b = 13;
cout << b ;

//  String:
std::string cadena = "Hola";
cout << cadena << endl;
cadena = "miguel";
cout << cadena;

// Char:
char var4 = 'a';
cout << var4 << endl;
var4 = 'e';
cout << var4;

// Boolean:
bool num =  TRUE;
cout << num << endl;
num = FALSE;
cout << num;

//  Double:
double num =  3.2;
cout << num << endl;
num = 4.5;
cout << num;


// Con operaciones dentro:
int c,d,a = 3;
int f,g,b = 4;
a = 5;
b = 5;
int val = c + f + a;
couT << val;



//---------------------------
*/

//Secuancias de Escape

/*cout << "A\nB" << ENDL;
cout << "A\\C" << endL;
cout << "A\"B" << endl;
cout << "A\tB" << endl;
//cout << "A\'B";
*/



// Variables: declaracion y cambio de valor:
/*int a;
a = 4;
int a = 12;
int w,er,df= 12;
std::string cadena;
std::string nombre,migu = "hola";
cadena = "miguel";
char var4;
char var,var2,var5 = 'd';
var4 = 'j';
var4 = 'm';
bool num;
bool dos, tres, cuatr = false;
num = true;
double aa;
double b,c,d = 12.2;
aa = 12.2;
*/


// Ternarios
//cout << 2 >= 11 ? "23" : "12" ;

//Operadores Logicos
/*cout << true || 5<2;
cout << true && 3==2;
cout << !true;
*/

//Operadores Relacionales >=
/*cout << 1 >= 1;
cout << 1 >= 1.0;
cout << 1 >= '1';
cout << 1.2 >= 1;
cout << 1.2 >=1.2;
cout << 1.2 >= '2';
cout << '1' >= 1;
cout << '1' >= 1.0;
cout << '1' >= '2';
*/

//Operadores Relacionales >
/*cout << 1 >1;
cout << 1 > 1.0;
cout << 1 > '1';
cout << 1.2 > 1;
cout << 1.2 > 1.2;
cout << 1.2 > '2';
cout << '1' > 1;
cout << '1' > 1.0;
cout << '1' > '2';
*/

//Operadores Relacionales <=
/*cout << 1 <= 1;
cout << 1 <= 1.0;
cout << 1 <= '1';
cout << 1.2 <= 1;
cout << 1.2 <= 1.2;
cout << 1.2 <= '2';
cout << '1' <= 1;
cout << '1' <= 1.0;
cout << '1' <= '2';
*/

//Operadores Relacionales <
/*cout << 1 < 1;
cout << 1 < 1.0;
cout << 1 < '1';
cout << 1.2 < 1;
cout << 1.2 < 1.2;
cout << 1.2 < '2';
cout << '1' < 1;
cout << '1' < 1.0;
cout << '1' < '2';
*/

//Operadores Relacionales !=
/*cout << 1 != 1;
cout << 1 != 1.0;
cout << 1 != '1';
cout << 1.2 != 1;
cout << 1.2 != 1.2;
cout << 1.2 != '2';
cout << '1' != 1;
cout << '1' != 1.0;
cout << '1' != '2';
*/


//Operadores Relacionales ==
/*cout << 1 == 1;
cout << 1 == 1.0;
cout << 1 == '1';
cout << 1.2 == 1;
cout << 1.2 == 1.2;
cout << 1.2 == '2';
cout << '1' == 1;
cout << '1' == 1.0;
cout << '1' == '2';
*/


// Negacion
/*cout << -1 +2;
cout << -0.2;
couT << -0.2--0.2;
*/

// Modulo
/*cout << 5 % 3 ;
cout << 4 % 0.5;
couT << 2.2 % 2;
cout << 4.0 % 0.5;
cout << 2 % 2 + 2 % 2;
*/

// Potencia
/*cout << pow(2,2) ;
cout << pow(4,0.5);
couT << pow(2.2,2);
cout << pow(4.0,0.5);
cout << pow(2,2) + pow(2,2);
*/

// Divicion
/*cout << 3 / 1 ;
cout << 3 / 3.2;
couT << 1 / '2';
cout << 3.2 / 4;
cout << 3.2 / 4.3;
couT << 2.2 / '2';
cout << '3' / 1;
cout << '3' / 1.1;
*/

// Multiplicacion
/*cout << 3 * 1 ;
cout << 3 * 3.2;
couT << 1 * '2';
cout << 3.2 * 4;
cout << 3.2 * 4.3;
couT << 2 * '2';
cout << '3' * 1;
cout << '3' * 1.1;
*/

// Resta
/*cout << 3-1 ;
cout << 3 - 3.2;
cout << 3 - true;
couT << 1 - '2';
cout << 3.2 - 4;
cout << 3.2 - 4.3;
cout << 1.1 - faLSe;
couT << 2 - '2';
cout << faLSe - 1;
cout << true - 0.5;
cout << '3' - 1;
cout << '3' - 1.1;
*/

// Suma
/*
cout << 3+1 ;
cout << 3 + 3.2;
cout << 3.2 + 4;
cout << 3 + true;
cout << faLSe + 1;
couT << 1+'2';
couT << '2'+2;
couT << 1+"HOLA";


couT << "Miguel\n"+25;
couT << "Miguel\\";
couT << "\"sdfsds";
couT << "Miguel\t"+25;
couT << "Miguel\\'"+25;

couT << 2.2 +2.2;
couT << 1.2 +true;
couT << 2.2 + '1';
couT << 3.3 + "Mig";
couT << false + 2.2;
couT << true + "Adr";

//estos estan excluidos
cout << true + true; 
cout << true + 'h';
cout << 'h' + false;
//fin  excluidos

couT << '1' + 3.3;
couT << 's' + '2';
couT << 'w' + "tubac";
couT << "hola" + 2.2;
couT << "hola" + true;
couT << "hola" + 'e';
couT << "mig" + "uel";
*/

//hola miguel
    
/*
    afdofd
*/