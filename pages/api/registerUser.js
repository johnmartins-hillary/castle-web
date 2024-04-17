import {BASE_URL} from "../../constants/index"
const registerUser =async(data,setLoading)=>{
    try {
        const headers = {
            "Content-Type": "application/json",
            Accept: "application/json"
          };
        const response = await fetch(`${BASE_URL}auth/register`,{method:"POST",body:JSON.stringify(data),headers})
        console.log("Register User Data",response)
        if (response.status === 200) {
            const responseData = await response.json();
            console.log("sign in response",responseData)
            localStorage.setItem("token",responseData?.authorization)
            setLoading(false)
        }
    } catch (error) {
        console.error("Register User Error",error)
        setLoading(false)
        // throw Error(error)
    }
}

export default registerUser