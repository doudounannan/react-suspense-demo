export async function fetchApi(uri) {
  const res = await fetch(uri);
  const data = await res.json();

  return data;
}
