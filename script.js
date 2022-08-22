// importing  module

// import { totalPrice, totalQuantity } from './shoppingCarts.js';
// import * as ShoppingCart from './shoppingCarts.js';
// console.log('Imported Shopping Cart');

// console.log('My totalPrice is', ShoppingCart.totalPrice);
// console.log('My totalQuantity is', ShoppingCart.totalQuantity);

/**
 * Top level await defer script In JS await async
 *
 * @type {*} */
/*
// await async
const res = await fetch('https://jsonplaceholder.typicode.com/posts');

const data = await res.json();
console.log(data);
 */

/**
 *  get Last element
 *
 */
/*
const getLastPost = async function () {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');

    const data = await res.json();
    return { title: data.at(-1).title, text: data.at(-1).body };
};
// bad code
// getLastPost().then((last) => console.log(last));
const lastPost = getLastPost();
const lastPost2 = await getLastPost();
console.log(lastPost2);
 */

/**
 * await Block code, should use carefully
 */

import * as Shopping from './shoppingCarts.js';

console.log(Shopping.totalPrice);
