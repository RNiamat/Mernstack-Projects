import { createContext, useEffect, useState } from "react";
import { useNavigate} from "react-router-dom";
export const AppContext = createContext(null);
import { dummyProducts } from "../assets/assets";


const AppContextProvider = ({children}) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [isSeller, setIsSeller] = useState(null);
    const [showUserLogin, setShowUserLogin] = useState(false);
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {

        setProducts(dummyProducts);
    }
    useEffect(() =>{
        fetchProducts();
    }, [])
    const value = {navigate, user, setUser, isSeller, setIsSeller, showUserLogin, setShowUserLogin, products, setProducts};

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;