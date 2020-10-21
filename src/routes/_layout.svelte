<script>
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<style>
	.wrapper {
		display: grid;
    grid-template-rows: auto 1fr auto;
	}
</style>

<div class="min-h-screen wrapper">
	<Header />
	<main class="mx-6 md:mx-auto md:max-w-xl my-8">
		<slot></slot>
	</main>
	<Footer />
</div>