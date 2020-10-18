import all from './*.md'

function transform({filename, html, metadata}) {
  const permalink = filename.replace(/\.md$/, '')
  return {...metadata, filename, html, permalink}
}

export const findPasta = (permalink) =>
  pastas.find(pasta => pasta.permalink === permalink);
  


const pastas = all.map(transform);

export default pastas;