<script>
  import { categories } from './categories.js';
  import CompCategory from './CompCategory.svelte';
</script>

<style>
</style>

<h1>CATEGORIES</h1>
{#each $categories as category}
  <CompCategory {category} />
{/each}
