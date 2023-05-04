const products = [
{
    description: 'Laptop',
    brand: 'ASUS',
    price: 1500,
    numberAvailable: 15
},
{
    description: 'PS5',
    brand: 'Sony',
    price: 1000,
    numberAvailable: 0
},
{
    description: 'Monitor',
    brand: 'Samsung',
    price: 200,
    numberAvailable:7
}
]

// const getBrand = (product) => {
//     return product.brand
// }

// const brands = []
// for(let x = 0; x < products.length; x++){
// const currentProduct = products[x]
// brands.push(getBrand(currentProduct))
// }

// const brands = products.map(getBrand)

const brands = products.map((product) => product.brand)

console.log(brands)







// const lodash = require('lodash')

// const myArr = [ 1, 1, 1 ]

// const newArr = lodash.uniq(myArr)

// console.log('Whats up')

// console.log(newArr)

//              Using the for loop 
//
// const brands = []
// for(let x = 0; x < products.length; x++){
// const currentProduct = products[x]
// brands.push(currentProduct.brand)
// }

// console.log(brands)


//          Using the for loop with a function
// 
// const getBrand = (product) => {
//     return product.brand
// }

// const brands = []
// for(let x = 0; x < products.length; x++){
// const currentProduct = products[x]
// brands.push(getBrand(currentProduct))
// }

// console.log(brands)


//                  Using map
// 
// const getBrand = (product) => {
//     return product.brand
// }

// // const brands = []
// // for(let x = 0; x < products.length; x++){
// // const currentProduct = products[x]
// // brands.push(getBrand(currentProduct))
// // }

// const brands = products.map(getBrand)

// console.log(brands)




//              Using map without external function
// 
// const brands = products.map((product) => {
//     return product.brand
// })



//              Using Map single line without return
// 
// const brands = products.map((product) => product.brand)