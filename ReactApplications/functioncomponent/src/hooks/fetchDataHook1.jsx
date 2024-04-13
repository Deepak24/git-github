import {useEffect, useState} from "react";
const useFetchData = (url) => {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(resdata => setData(resdata))
        .catch(err => console.log(err))
    }, [url]);
    return data;
}

export default useFetchData;