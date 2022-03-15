const lista1 = [
    100,
    200,
    300,
    500,
];

function calcularMediaAritmetica(lista)
{
//Ejemplo 1 con variable  


    /* let sumaLista = 0;
    for ( let i = 0; i <  lista.length; i++)
    {
        sumaLista  = sumaLista +
        lista[i];
    }  */

//Ejemplo 2  con una funcion

    const  sumaLista  = lista .reduce(
        function  (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado  + nuevoElemento;
        }
    );
    
    const promedioLista = sumaLista  / lista.length;

    return promedioLista;
}
