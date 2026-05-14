const api = {
  async get(url) {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`)
    }

    return {
      data: await response.json(),
    }
  },
}

export default api
