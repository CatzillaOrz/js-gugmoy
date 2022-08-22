// Exporting module
/*
const fethUsers = async function () {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');

    const data = await res.json();
    return { title: data.at(-1).title, text: data.at(-1).body };
};
// bad code
// getLastPost().then((last) => console.log(last));

const users = await fethUsers();
console.log(users);
console.log('==== finished fetching user and get Last use');
 */
console.log('Exporting module');

const shippingCost = 10;
const cart = [];

export const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity };
