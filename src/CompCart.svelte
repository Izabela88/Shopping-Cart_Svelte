<script>
  import { products } from './cart.js';
  import CompCartProduct from './CompCartProduct.svelte';
</script>

<style>
</style>

<h1>CART</h1>

{#each $products as product}
  <CompCartProduct {product} />
{/each}
