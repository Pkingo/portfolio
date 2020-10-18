<script context="module">
  import { findPasta } from '../../pastas';

  export function preload(page) {
    const pasta = findPasta(page.params.permalink);
    return { pasta };
  }
</script>

<svelte:head>
	<title>Copy/Paste</title>
</svelte:head>

<script>
  export let pasta;
  let isShowingOtherText = false
  const copyCode = () => {
    const codeSnippet = document.getElementsByTagName("code")[0].textContent;
    if (codeSnippet) {
      navigator.clipboard.writeText(codeSnippet).then(() => {
        isShowingOtherText = true;
        setTimeout(() => isShowingOtherText = false, 2000);
      });
    }
  }
</script>

<style>
  :global(code) {
    background: #f4f4f4;
    border: 1px solid #ddd;
    border-left: 3px solid #C05621;
    color: #666;
    page-break-inside: avoid;
    font-family: monospace;
    font-size: 15px;
    line-height: 1.6;
    margin-bottom: 1.6em;
    max-width: 100%;
    overflow: auto;
    padding: 1em 1.5em;
    display: block;
    word-wrap: break-word;
    margin-top: 2rem;
  }

  :global(a) {
    text-decoration: underline;
    color: #C05621;
  }
</style>

<a class="font-light text-gray-600 truncate max-w-2xl" href="/pasta">{"<-"}Back</a>
<div class="flex justify-between pb-8 flex-col sm:flex-row gap-4">
  <h1>
    {pasta.title}
  </h1>
  <button
    class={`bg-transparent hover:bg-teal-500 text-teal-700 font-semibold hover:text-white py-2 border border-teal-500 hover:border-transparent rounded px-${isShowingOtherText ? 10 : 4}`} on:click={copyCode}>
    {isShowingOtherText ? 'Copied' : 'Copy snippet'}
  </button>
</div>

{@html pasta.html}