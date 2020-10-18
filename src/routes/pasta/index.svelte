<script>
	import pastas from '../../pastas';
</script>

<style>
	a {
		text-decoration: none;
		color: black;
  }
</style>

<svelte:head>
	<title>Copy/Paste</title>
</svelte:head>

<div class="p-3">
	<h1>Copy/Paste 🍝</h1>
	<p>This is a collection of code snippet that I find myself use often or code snippet that I find neat. These snippets are not "novice" but code I often find myself thinking "how is it you do that thing" or small code snippet that is done in a cool/inspiring way. I often copy code from here, feel free to do the same</p>
	<br />
	<p><strong>Disclaimer</strong>: I have not written all of these code snippet myself, but often found some code online that I developed further and decide to keep, so that I could easily find them agani</p>
</div>

{#each pastas as pasta}
<article class="border-transparent border-l-4 hover:border-orange-700 p-2 max-w-xs">
	<a href={`/pasta/${pasta.permalink}`}>
		<p class="font-bold">{pasta.title}</p>
		<p class="font-light text-gray-600 truncate max-w-2xl">{pasta.summary}</p>
	</a>
</article>
{/each}