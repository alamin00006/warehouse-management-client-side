import { useEffect, useState } from "react";

const useProduct = () =>{
    const [myComputers, setMyComputers] = useState([]);

useEffect(() =>{
    const url = "http://localhost:5000/computers";
    fetch(url)
    .then(res =>res.json())
    .then(data => setMyComputers(data));
},[])
return [myComputers, setMyComputers];
}
export default useProduct;

