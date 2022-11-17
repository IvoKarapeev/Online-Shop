import { useState } from "react";


const useLocalStorige = (key,defaultValue) => {

    const [data,setData] = useState(() => {

        const storigeData = localStorage.getItem(key);

        if (storigeData) {
            return JSON.parse(storigeData);
        }else{
            return defaultValue;
        }

    });

    const setStorigeData = (newValue) => {

        localStorage.setItem(key,JSON.stringify(newValue));

        setData(newValue);
    };

    return [
        data,
        setStorigeData
    ];

};

export default useLocalStorige;