//Definir el conjunto de números junto al peso de cada elemento
const notes = [
    {
        course:  "Educacion Fisica",
        note: 10,
        credit: 2,
    },

    {
        course: "Programacion",
        note: 8,
        credit: 5,
    },

    {
        course: "Finanzas personales",
        note: 7,
        credit: 5,
    },
];

//Multiplicar cada número de la lista por su peso
const notesWithCredit  = notes.map(function(noteObject)
{
    return noteObject.note  * noteObject.credit;
});

//Sumar todos los elementos del arreglo de elementos 
//multiplicados por su peso

const sumOfNotesWithCredit = notesWithCredit.reduce(
    function(sum = 0, newVa1){
        return  sum + newVa1;
    }
);

//Sumar todos los pesos (créditos)

const  credits  = notes.map(function(noteObject){
    return noteObject.credit;
});

const sumOfCredits = credits.reduce(
    function (sum =  0, newVa1){
        return  sum + newVa1;
    }
);

//Hacer la división entre ambas “sumas”
const promedioPonderadoNotasConCreditos  = 
sumOfNotesWithCredit / sumOfCredits;