<script>
  let isExpanded = false;
  import Link from './Link.svelte';

	const toggleExpand = () => isExpanded = !isExpanded
</script>

<nav class="flex items-center justify-between flex-wrap bg-teal-900 p-6">
  <div class="flex items-center flex-shrink-0 text-white mr-6">
    <Link href="/">
      <span class="font-semibold text-xl tracking-tight">Philip Andreas Kingo</span>
    </Link>
  </div>
</nav>