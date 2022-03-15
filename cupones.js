
function  calcularPrecioConDescuento(precio, descuento)  {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)
 / 100;

 return precioConDescuento;
}
function onClickbuttonPriceDiscount(){
const coupon= [
    {
        name: "JuanDC_es_Batman",
        discount: 15,
    },
    {
        name: "pero_no_le_digas_a_nadie",
        discount: 30,
    },
    {
        name: "es_un_secreto",
        discount: 25,
    },
];

const isCouponValueValid = function (coupon) {
    return coupon.name === couponValue;
};

const userCoupon = coupons.find(isCouponValueValid);

if (!userCoupon) {
    alert("El cupón " + userCouponValue + "no es válido");
}

if (!userCoupon) {
    alert("El cupón " + userCouponValue + "no es válido");
} 
else {
    const descuento = userCoupon.discount;
    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}
}