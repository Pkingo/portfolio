<script>
  import { fade } from 'svelte/transition';
  export let href;
  export let target = "_self";
</script>

<style>
  .code {
    color: transparent;
    transition: color 0.3s ease-out;
  }

  .link:hover .code {
    color: white;
  }
</style>

<a class="link" target={target} href={href}>
  <span transition:fade class="code">{"<"}</span>
    <slot></slot>
  <span transition:fade class="code">{"/>"}</span>
</a>