<script>
  export let github = "";
  export let link = "";
import Link from "./Link.svelte";

</script>
<article class="flex flex-col mb-5">
  <slot></slot>
  <section>
    <Link color="orange" href={github}>Code</Link>
    <Link color="orange" href={link}>Link</Link>
  </section>
</article>