const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']

products.forEach(
    function(producto){
        if(producto.includes("Camiseta")){
            console.log(producto);
        }
});