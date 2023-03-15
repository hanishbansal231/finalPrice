

let btn = document.querySelector('.btn');

const itemsName = () => {
    let itemNameBox = document.querySelector('.itemNameBox');
    let name = document.querySelector('#name').value;

    if (name === "") {
        alert("Enter a value")
    } else {
        let li = document.createElement('li');
        li.innerHTML = name;
        itemNameBox.append(li);
    }
};

const itemPrice = () => {
    let itemPriceBox = document.querySelector('.itemPriceBox');
    let price = document.querySelector('#price').value;
    if (price === "") {
        alert("Enter a value")
    } else {
        let li = document.createElement('li');
        li.innerHTML = price;
        itemPriceBox.append(li);
    }
};

const totalPrice = () => {
    let itemPriceBox = document.querySelector('.itemPriceBox');
    let prices = itemPriceBox.querySelectorAll('li');
    let total = 0;
    for (let i = 0; i < prices.length; i++) {
        let price = Number(prices[i].textContent);
        total += price;
    }
    let h1 = document.querySelector('h1');
    h1.innerText = `Total Price: ${total}/-`
}

btn.addEventListener('click', itemsName)
btn.addEventListener('click', itemPrice)
btn.addEventListener('click', totalPrice)