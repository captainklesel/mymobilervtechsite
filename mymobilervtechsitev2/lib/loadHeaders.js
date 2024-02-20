export async function loadHeaders() {
    const baseUrl = process.env.DB_URL_HEADER
    const fields = ['title', 'subtitle'].join(',')
    const queryParams = new URLSearchParams({
      where: '(Id,eq,1)',
      fields: fields,
    });
  
    // Append queryParams to the base URL
    const urlWithParams = `${baseUrl}?${queryParams.toString()}`
  
    let options = {
      method: 'GET',
      headers: {
        'xc-auth': process.env.DB_AUTH_TOKEN
      }
    };
  
    try {
      const res = await fetch(urlWithParams, options)
      if (!res.ok) {
        throw new Error('Network response was not ok')
      }
      const data = await res.json()
  
      // If data.list is empty or undefined, return default header data
      if (!data.list || data.list.length === 0) {
        return null
      }
  
      // Return header data
      return data

    } catch (error) {
      console.error('Error fetching header data:', error)
      return null
    }
  }
  