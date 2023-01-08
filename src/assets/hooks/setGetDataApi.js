import axios, { Axios } from "axios"
import { useEffect, useState } from "react"

function setGetDataApi(url, hookParameter) {
    const [data, setData] = useState([]);
    const [isTry, setisTry] = useState(true);

    const getData = async () => {
        try {
            const reply = await axios.get(url, {
                params: {
                    s: hookParameter
                }
            })

            if (reply.data.drinks.length > 0) {
                setData(reply.data.drinks);
                setisTry(true);
            }
        } catch (error) {
            setData([]);
            setisTry(false);
        }
    }

    useEffect(() => {
        getData()
    }, [hookParameter])

    return {
        data,
        isTry
    }
}

export default setGetDataApi;