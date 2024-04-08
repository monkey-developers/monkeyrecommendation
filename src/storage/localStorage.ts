import { userDataInterface } from "./interfaces"

export const loginUser = (userData: userDataInterface) => {
    localStorage.setItem("user", JSON.stringify(userData))
}

export const logoutUser = () => {
    localStorage.removeItem("user")
}

export function getUser(): {id: number, email: string, password: string, name: string, username: string} | false {
    const user = localStorage.getItem("user")
    if(user){
        return JSON.parse(user)[0]
    }
    return false
}