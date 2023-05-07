import { useState,useEffect } from 'react'

export const useFetch = ( url ) =>{
    const [data, setdata] = useState(null)
    const [isPending, setisPending] = useState(true)
    const [error, seterror] = useState(null)

    useEffect(() => {
        const getData = async (url) => {
            try {
                let res = await fetch(url)
                if (!res.ok) {
                    // eslint-disable-next-line no-throw-literal
                    throw {
                        err:true,status:res.status,statusText:!res.statusText?"Ocurrio un error":res.statusText
                    }
                }
                let data = await res.json();
                setisPending(false)
                setdata(data)
                seterror({err:false})
            } catch (err) {
                setisPending(true)
                seterror({err:err})
            }      
          };
      
          getData(url);
    }, [url])

    return {data,isPending,error}
    
}

