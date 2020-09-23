<script>
  import { products } from './products.js';
  import CompProduct from './CompProduct.svelte';
</script>

<style>
</style>

<h1>PRODUCTS</h1>

{#each $products as product}
  <CompProduct {product} />
{/each}
