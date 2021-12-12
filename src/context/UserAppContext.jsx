import React, { useState,useEffect } from "react"
import { data, filteringData } from "../utils/utils"
import { insertUser,getUsers } from "../api/api"

export const UsersContext = React.createContext(null);

export const UsersContextProvider = ({ children }) => {

    const [isOpen, setOpen] = useState(false)
    const [users, setUsers] = useState(data)
    const [searchQuery,search] = useState("")
    const [checkboxData, setCheckboxData] = useState(filteringData)
    
    const toggleModal = () => {
        setOpen(!isOpen)
    }

    useEffect(async() => {
        const res = await getUsers()
        setUsers({"table1":res,"table2":res})
        console.log("res",res)
    }, [])

    const addUser = async(userObj) => {
        const currentUsers = {...users}
        const tables = Object.keys(currentUsers)

        const newUsers = await insertUser(userObj)
        console.log("newUsers", newUsers)

        tables.forEach(table => {
            currentUsers[table] = [...currentUsers[table],userObj]
        })
        setUsers(currentUsers)
    }
    
    return (
        <UsersContext.Provider value={{
            isOpen,
            users,
            checkboxData,
            searchQuery,
            toggleModal,
            addUser,
            search,
            setCheckboxData,

        }}>
            {children}
        </UsersContext.Provider>
    );
}


export default UsersContextProvider

