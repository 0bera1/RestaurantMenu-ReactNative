import { createContext, useState } from "react";

export const favContext = createContext({
    ids: [],
    addFav: (id) => { },
    removeFav: (id) => { },
});

function FavContextProvider({ children }) {
    const [favIds, setFavIds] = useState([]);

    function addFav(id) {
        setFavIds((current) => [...current, id])
    }
    function removeFav(id) {
        setFavIds((current) => current.filter((foodId) =>
            foodId !== id))
    }
    const value = {
        ids:favIds,
        addFav:addFav,
        removeFav:removeFav
    }


    return <favContext.Provider value={value}>{children}</favContext.Provider>;
}
export default FavContextProvider;