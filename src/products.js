import { writable } from 'svelte/store';

export let products = writable([
  { id: 1, name: 'Pizza', price: 10 },
  { id: 2, name: 'Lasagne', price: 20 },
  { id: 3, name: 'Spagetti', price: 30 },
]);
