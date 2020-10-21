<script>
  let isExpanded = false;
  import Link from './Link.svelte';

  const toggleExpand = () => isExpanded = !isExpanded;
</script>

<nav class="flex items-center justify-between flex-wrap bg-teal-900 p-6">
  <div class="flex items-center flex-shrink-0 mr-6">
    <Link href="/">
      <span class="font-semibold text-xl tracking-tight">Philip Andreas Kingo</span>
    </Link>
  </div>
  <div class="block md:hidden">
    <button on:click={toggleExpand} class="flex items-center px-3 py-2 border rounded text-teal-500 border-teal-700 hover:text-white hover:border-white">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div class="w-full block flex-grow md:flex md:items-center md:w-auto {isExpanded ? '': 'hidden'}">
    <div class="md:flex md:justify-end md:flex-grow gap-4">
      <Link href="/pasta" classes="block md:inline-block">
        Copy/Paste
      </Link>
      <Link href="/contact" classes="block md:inline-block">
        Contact
      </Link>
    </div>
  </div>
</nav>