
import axios from "axios"



const middleware = async (type, navigate) => {
    try {
        const response = await axios.get("http://localhost:4001/api/v1/indentifier/who_i_am")
        if (!response) {
            navigate("/")
        } else {
            if (type !== response.data.type) {
                navigate(response.data.type);
            }
        }
    } catch (error) {
        navigate("/");
    }
}

export default middleware