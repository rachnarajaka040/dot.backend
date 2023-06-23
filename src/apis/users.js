import axios from "axios";

export const filterUsers = async (type, updater) => {
    try {
        const response = await axios.get(`http://localhost:4000/api/v1/user/getusers/${type}`)
        !response ?
            console.error("there is an error") :
            updater(response.data)
    } catch (error) {
        console.error(error)
    }
} 