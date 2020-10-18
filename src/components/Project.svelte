<script>
  export const github = "";
  export const link = "";
import Link from "./Link.svelte";

</script>
<article class="flex flex-col mb-5">
  <slot></slot>
  <Link color="orange" href={github}>Code</Link>
  <Link color="orange" href={link}>Link</Link>
</article>