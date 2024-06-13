import { useEffect } from "react"

export default function useFetchApi(url) {
    const [loadedData,setLoadedData] = useState(null)
    const [isLoading,setisLoading] = useState(false)
    const [error,setError] = useState(null)

   useEffect(()=>{
    const fetchApi = async()=>{

        try{
            const res = await fetch(url);
            setisLoading(true)
            if(!res.ok){
                throw new Error('Failed to Fetch Data ... ')
            }
            const data = res.json();
            setLoadedData(data)
            setisLoading(false)
        }catch(error){
            setError(error)
        }
    }

    fetchApi(url)


   })

   return {loadedData, error, isLoading}
}
