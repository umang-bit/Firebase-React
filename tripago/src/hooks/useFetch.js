import {useState , useEffect } from 'react'
const useFetch = (url)=>{
    const [data,setData] = useState(null)//this state we declare to store the data.
    //then we are going to use useEffect hook which will fire the function in its arguement once atleast as empty dependency array
    useEffect(()=>{
        const fetchData = async ()=>{
            const response = await fetch(url);
            const json = await response.json();
            setData(json);//then we just set our data as json.
        }
        fetchData();//also remember to invoke the function
    },[url])
    return {data : data}
}
export default useFetch;