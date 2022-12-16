<script lang="ts">
  import '../app.css';
</script>

<div class="navbar bg-base-300 flex justify-between">
  <a class="btn btn-ghost normal-case text-xl" href="/">Pokemon!</a>

  <div class="navbar-end">
    <a href="/favoritos" class="btn btn-secondary">Favoritos</a>
  </div>
</div>
<slot />
