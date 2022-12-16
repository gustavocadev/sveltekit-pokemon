<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;

  $: pokemons = data.pokemons;
</script>

<main class="grid grid-cols-6 gap-6 px-10 py-6">
  {#each pokemons as pokemon, idx}
    <div class="card bg-base-300 shadow-xl p-4">
      <figure>
        <img src={pokemon.img} alt="Shoes" class="mx-auto w-full h-[150px]" />
      </figure>
      <div class="px-0 flex justify-between pt-4 items-center">
        <h2 class="card-title">{pokemon.name}</h2>
        <p>#{idx + 1}</p>
      </div>
    </div>
  {/each}
</main>
