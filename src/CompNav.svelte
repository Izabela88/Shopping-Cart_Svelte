<script>
  import { products } from './cart.js';
  let itemsInCart = 0;
  $: {
    let count = 0;
    for (let item of $products) {
      count += item.quantity;
    }
    itemsInCart = count;
  }
</script>

<style>
</style>

<nav>
  <a href="/">Menu</a>
  <a href="/">Categories</a>
  <a href="/">Products</a>
  <a href="/">Shopping Cart</a> Items in cart {itemsInCart}
</nav>
