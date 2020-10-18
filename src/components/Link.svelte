<script>
  import { fade } from 'svelte/transition';
  export let black;
  export let href;
  export let target = "_self";
  export let classes;
</script>

<style>
  .code {
    color: transparent;
    transition: color 0.3s ease-out;
  }

  .link:hover .code {
    color: white;
  }
  .link:hover .black {
    color: black;
  }
</style>

<a class={classes + " link"} target={target} href={href}>
  <span transition:fade class="code {black ? "black" : ''}">{"<"}</span>
    <slot></slot>
  <span transition:fade class="code {black ? "black" : ''}">{"/>"}</span>
</a>