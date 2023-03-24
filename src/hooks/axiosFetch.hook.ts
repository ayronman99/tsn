import axios from "axios";
import { useEffect, useState } from "react";


//commenting for revertion if failed
const axsFetchHandlerHook = <T> ({url, method = "get", headers = {}, data = {}, initialData }: axiosFetchTypeProps<T>) => {
    const [fetchData, setFetchData] =  useState<T | null>(initialData ?? null);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true);
        const fetchAxsPosts = async () => await axios({ url, method, headers, data })
            // .then((resData) => console.log(resData.data.data))
            .then((resData) => { 
                if (resData.data.data) return setFetchData(resData.data.data)
                if (resData) return setFetchData(resData.data)
            })
            .catch(e => console.error(e))
            .finally(() => setLoading(false))
        fetchAxsPosts();
    }, [url])

    return {fetchData, loading};
}

export default axsFetchHandlerHook;


