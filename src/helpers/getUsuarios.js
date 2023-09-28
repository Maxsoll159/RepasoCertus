export const getUsuarios = async() =>{
    const response = await fetch("https://randomuser.me/api?results=100")
    const data = response.json()
    return data
}