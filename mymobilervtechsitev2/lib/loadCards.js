export async function loadCards() {
  const baseUrl = process.env.DB_URL_CARD;
  const fields = ['title', 'subtitle', 'body1', 'body2'].join(',');
  const queryParams = new URLSearchParams({
    where: '(Id,lt,4)',
    fields: fields,
  });

  // Append queryParams to the base URL
  const urlWithParams = `${baseUrl}?${queryParams.toString()}`;

  let options = {
    method: 'GET',
    headers: {
      'xc-auth': process.env.DB_AUTH_TOKEN
    }
  };

  try {
    const res = await fetch(urlWithParams, options);
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error fetching card data:', error);
    return null;
  }
}
