export function publicUrl(relativePath) {
  const base = import.meta.env.BASE_URL;
  const path = relativePath.replace(/^\//, '');
  return encodeURI(`${base}${path}`);
}
