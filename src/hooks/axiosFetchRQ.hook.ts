import axios from "axios";

const axsFetchHandlerRQHook = async (url: string) => {
    return await axios.get(`${url}`, {
        headers: {
            "app-id": "641bfd322d98bfb1c606c923"
        }
    })
        .then(res => {
            if(res.data.data) return res.data.data
            if(res.data) return res.data
        })
}

export default axsFetchHandlerRQHook;