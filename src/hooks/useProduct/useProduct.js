import { useEffect, useState } from "react";

const useProduct = () =>{
    const [myComputers, setMyComputers] = useState([]);

useEffect(() =>{
    const url = "https://dry-mountain-03904.herokuapp.com/computers";
    fetch(url)
    .then(res =>res.json())
    .then(data => setMyComputers(data));
},[])
return [myComputers, setMyComputers];
}
export default useProduct;

