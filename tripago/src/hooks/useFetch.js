import {useState , useEffect } from 'react'
export const useFetch = (url)=>{
    const [data,setData] = useState(null)//this state we declare to store the data.
    const [isPending,setIsPending]=useState(false)//initially we set it as false.
    //then we are going to use useEffect hook which will fire the function in its arguement once atleast as empty dependency array
    useEffect(()=>{
        const fetchData = async ()=>{
            //right here we will make it true
            setIsPending(true)
            const response = await fetch(url);
            const json = await response.json();
            setIsPending(false)//right here fetching is complete so we make it false
            setData(json);//then we just set our data as json.
        }
        fetchData();//also remember to invoke the function
    },[url])
    return {data : data , isPending}
}
