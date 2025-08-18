export default async function fetchServerActivity() {
  try {
    const response = await fetch('https://api.mcsrvstat.us/3/neeucraft.ru')
    if (!response.ok) {
      throw new Error('Response error')
    }
    const data = await response.json()
    return data
  } catch (error) {
    return null
  }
  
}