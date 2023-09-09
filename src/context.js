//context < API ></ >
//useContext hooks
//Context (warehouse)
//Provider (delivery)
//consumer / (useContext())
import React, { useContext, useEffect, useState } from "react";
const API_URL ='http://www.omdbapi.com/?apikey=32eb50a2&s=Blade Runner 2049';
const AppContext = React.createContext();
//we need to cratre a Provider fun
const AppProvider = ({ children }) => {
    const[isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const[isError, setIsError] = useState({ show: "false", msg: "" });
    const getMovies = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            if (data.Response === "True") {
                setIsLoading(false);
                setMovie(data.Seacrh);
            } else {
                setIsError({
                })
            }
        } catch (error) {
         console.log(error); 
        }
     };
    useEffect(() => {
        getMovies(API_URL);
    }, []);
    return <AppContext.Provider value={{isLoading, isError, movie}}>
        {children}
    </AppContext.Provider>;
};
//global custom hooks
const useGlobalContext = () => {
    return useContext(AppContext);
}
export { AppContext, AppProvider, useGlobalContext };

