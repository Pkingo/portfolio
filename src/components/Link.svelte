<script>
  import { fade } from 'svelte/transition';
  export let href;
  export let target = "_self";
  export let classes = "";
  export let color = "white"
</script>

<style>
  a {
    text-decoration: none;
  }
  
  .link-white {
    color: white;
  }
  .link-orange {
    color: #ED8936;
  }
  .code {
    color: transparent;
    transition: color 0.3s ease-out;
  }

  .link:hover .code-white {
    color: white;
  }
  .link:hover .code-orange {
    color: #ED8936;
  }
</style>

<a class={`link link-${color} ${classes}`} target={target} href={href}>
  <span transition:fade class={`code code-${color}`}>{"<"}</span>
    <slot></slot>
  <span transition:fade class={`code code-${color}`}>{"/>"}</span>
</a>