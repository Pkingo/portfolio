<script>
import Project from "../components/Project.svelte";

</script>
<svelte:head>
	<title>Philip Andreas Kingo</title>
	<meta name="description" content="Front-end JavaScript developer with a passion for React and Svelte">
</svelte:head>

<h1 class="text-3xl mb-4">Hi! I'm Philip, and I'm a web developer</h1>
<p>I'm from Denmark, but currently I live in Czech Republic with my girlfriend to experience life abroad and learn from the talented people I get to work with here.</p>
<br />
<p>I'm a JavaScript/TypeScript software developer who focuses on front-end frameworks such as Reacrt and Svelte. I have a passion for Web Accessibility and preferment applications.
	I have experience working large and complex React web applications that require cross-team collaboration and global state management (Redux) in Agile and Kanban settings. I've also worked on smaller web applications such as admin dashboards and user forms.
	I also develop back-end services done in NodeJS and making scripts for automating tasks. I'm not afraid to take on a hard challenge and dive into unknown territory.</p>
<img class="rounded-full mx-auto my-8" src="images/profile.png" alt="Profile" width="450" height="450" />

<h2 class="text-2xl">Projects</h2>
<Project github="https://github.com/Pkingo/shopping-list" link="https://xn--brtspilsministeriet-mxb.dk/">
	<h3 class="text-xl">Shopping list</h3>
	<p>Small smalling list web-app using svelte, TailwindCSS and Google Firebase. It has authentication, you can create new shopping lists, and delete, finish and add new items to a shopping list</p>
</Project>
<Project github="https://github.com/Pkingo/portfolio" link="/">
	<h3 class="text-xl">Portfolio</h3>
	<p>This is acutlly this site. It is made using Sapper, TailwindCSS and Markdown files for each copy-pasta post made. </p>
</Project>

<br />
