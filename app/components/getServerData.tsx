const api_list = [
  'https://api.mcsrvstat.us/3/neeucraft.ru',
  'https://mcapi.us/server/status?ip=neeucraft.ru'
]

export default async function fetchServerActivity(api: number) {
  try {
    const response = await fetch(api_list[api])
    if (!response.ok) {
      throw new Error('Response error')
    }
    const data = await response.json()
    return data
  } catch (error) {
    return null
  }
  
}