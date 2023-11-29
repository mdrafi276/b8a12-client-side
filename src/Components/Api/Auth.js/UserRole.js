import { useContext } from "react"
import { AuthContext } from "../../Provider/AuthProvider"
import { useState } from "react"
import { useEffect } from "react"
import { getRole } from "./Auth"

const useRole = () =>{
    const {user, lodding} = useContext(AuthContext)
    const [role, setRole] = useState(null)
    useEffect(() =>{
        getRole(user?.email)
        .then(data => setRole(data))
    }, [user])
    return [role, lodding];
}
export default useRole