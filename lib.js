'use strict'

const entries =
  obj =>
    Object.keys(obj)
      .map(key => [key, obj[key]])

const listing =
  (name, price) => ({
    name,
    price
  })

const customer =
  (name, shoppingList) => ({
    name,
    shoppingList
  })

const cart =
  (customer, ...items) => ({
    customer,
    items
  })

/**
 * should return an array with the `itemName` repeated `count` number of times
 */
const itemRepeater =
  itemName =>
    count => {
      return Array(count).fill(itemName)
    }

/**
 * should return an array of carts with each given customer's shopping list
 * as an array of items
 */
const constructCarts =
  listings =>
    customers => {
      // TODO
      return customers.reduce(
        (prevReturned,currCustomer) => {
          let myCust = currCustomer.name
          let items = Object.keys(currCustomer.shoppingList).reduce(
            (tempItems,currItem) => {
              let itemName = currItem
              let count = currCustomer.shoppingList[currItem]
              return tempItems.concat(itemRepeater(itemName)(count))
            },[]
          )

          return prevReturned.concat({'customer':myCust,'items':items})
        },[]
      )
    }

module.exports = {
  listing,
  customer,
  constructCarts
}
