import { writable } from 'svelte/store';

export let categories = writable([
  { id: 1, name: 'Italian' },
  { id: 2, name: 'Chinese' },
]);
