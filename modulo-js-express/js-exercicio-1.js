function calculaPreco(name, price) {
    let shipping = 0;
    let total = 0;

    if (price <= 2000 && price >= 1) {
        shipping = 300
    } else if (price <= 4000) {
        shipping = 450
    } else {
        shipping = 700
    }

    total = price + shipping
    

    return console.log(`O produto ${name} custa ${price}. Seu custo de envio ${shipping}. Portando o preco final é ${total}`)
}

calculaPreco('Macbook', 2500);
calculaPreco('Celular', 500);
calculaPreco('Playstation', 4500);