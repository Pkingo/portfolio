<script>
	import GlobalStyle from "../components/GlobalStyle.svelte";
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<style>
	.wrapper {
		display: grid;
    grid-template-rows: auto 1fr auto;
	}
</style>
<GlobalStyle />
<div class="min-h-screen wrapper">
	<Header />
	<main class="m-10">
		<slot></slot>
	</main>
	<Footer />
</div>