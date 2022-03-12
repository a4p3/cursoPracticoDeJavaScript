/*  const precioOriginal =  120;
const descuento = 18; */

function  calcularPrecioConDescuento(precio, descuento)  {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)
 / 100;

 return precioConDescuento;
}

function onClickbuttonPriceDiscount()  {
const inputPrice = document.getElementById("inputPrice");
const  priceValue = inputPrice.value;

const inputDescount =  document.getElementById("inputDiscount");
const discountValue =  inputDescount.value;

const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);
 
const resultP  = document.getElementById("resultP")
resultP.innerText =  "El precio con descuento son: $ " +  precioConDescuento;
}

/* console.log({
     precioOriginal,
     descuento,
     porcentajePrecioConDescuento,
     precioConDescuento,
 }); */