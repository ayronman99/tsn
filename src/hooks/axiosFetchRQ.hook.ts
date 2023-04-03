import axios from "axios";

const axsFetchHandlerRQHook = async (url: string) => {
    const dataToReturn =  await axios.get(`${url}`, {
        headers: {
            "app-id": "641bfd322d98bfb1c606c923"
        }
    })
        .then(resposne => {
            return resposne.data
        }).catch(error => console.error(error))
    return dataToReturn;
}

export default axsFetchHandlerRQHook;