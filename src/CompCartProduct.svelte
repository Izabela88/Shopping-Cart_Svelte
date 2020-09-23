<script>
  import { products } from './cart.js';
  export let product;

  let disabled = false;

  const addOne = () => {
    product.quantity++;
    $products = $products;
    if (product.quantity == 0) disabled = false;
  };

  const substractOne = () => {
    product.quantity--;
    $products = $products;
    if (product.quantity == 0) disabled = true;
  };

  const deleteProduct = () => {
    $products = $products.filter((item) => product.id != item.id);
  };
</script>

<style>
</style>

<div class="product">
  Name: {product.name} Price: {product.price} Units: {product.quantity}
  <button on:click={addOne}>+</button>
  <button on:click={substractOne} {disabled}>-</button>
  <button on:click={deleteProduct}>Remove</button>
</div>
