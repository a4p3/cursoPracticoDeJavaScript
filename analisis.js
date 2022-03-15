// Helpers
function esPar(numerito) {
    return (numerito % 2 === 0);
  }
  
  function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
      function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
      }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
  }
  
  // Calculadora de mediana
  function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);
  
    if (esPar(lista.length)) {
      const personitaMitad1 = lista[mitad - 1];
      const personitaMitad2 = lista[mitad];
  
      const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
      return mediana;
    } else {
      const personitaMitad = lista[mitad];
      return personitaMitad;
    }
  }
  
  // Mediana General
  const colombia =[] ;
  colombia.push({
    name: "Camila",
    salary: 500,
  });
  colombia.push({
    name: "Nath",
    salary: 1500,
  });
  colombia.push({
    name: "Luisa",
    salary: 1800,
  });
  colombia.push({
    name: "Laura",
    salary: 1000,
  });
  colombia.push({
    name: "Daniela",
    salary: 2200,
  });
  colombia.push({
    name: "Esperancita",
    salary: 200,
  });
  colombia.push({
    name: "Carla",
    salary: 500,
  });
  colombia.push({
    name: "Antonieta",
    salary: 1500,
  });
  colombia.push({
    name: "Alicia",
    salary: 1300,
  });
  colombia.push({
    name: "Ana",
    salary: 2400,
  });
  colombia.push({
    name: "Julia",
    salary: 3400,
  });
  colombia.push({
    name: "Rosa",
    salary: 400,
  });
  colombia.push({
    name: "Angélica",
    salary: 400,
  });
  colombia.push({
    name: "Tatiana",
    salary: 400,
  });
  colombia.push({
    name: "Lorena",
    salary: 600,
  });
  colombia.push({
    name: "Carolina",
    salary: 1600,
  });
  colombia.push({
    name: "Fernanda",
    salary: 2600,
  });
  colombia.push({
    name: "Nora",
    salary: 1000,
  });
  colombia.push({
    name: "Gisselle",
    salary: 2000,
  });
  colombia.push({
    name: "Bill Gates",
    salary: 100000000,
  });

  const salariosCol = colombia.map (
    function (personita) {
      return personita.salary;
    }
  );
  
  const salariosColSorted = salariosCol.sort(
    function (salaryA, salaryB) {
      return salaryA - salaryB;
    }
  );
  
  const medianaGeneralCol = medianaSalarios(salariosColSorted);
  
  // Mediana del top 10%
  const spliceStart = (salariosColSorted.length * 90) / 100;
  const spliceCount = salariosColSorted.length - spliceStart;
  
  const salariosColTop10 = salariosColSorted.splice(
    spliceStart,
    spliceCount,
  );
  
  const medianaTop10Col = medianaSalarios(salariosColTop10);
  
  console.log({
    medianaGeneralCol,
    medianaTop10Col,
  });


  