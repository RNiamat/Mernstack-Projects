import { createContext, useEffect, useState } from "react";
import { useNavigate} from "react-router-dom";
export const AppContext = createContext(null);
import { dummyProducts } from "../assets/assets";
import  toast  from "react-hot-toast";

const AppContextProvider = ({children}) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [isSeller, setIsSeller] = useState(null);
    const [showUserLogin, setShowUserLogin] = useState(false);
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState({});
    const [searchQuery, setSearchQuery] = useState({});

    const fetchProducts = async () => {

        setProducts(dummyProducts);
    }

    // Add to cart function

    const addToCart = (itemId)=>
        {
            let cartData = structuredClone(cartItems);
            if(cartData[itemId]){
                cartData[itemId] += 1;
            }else{
                cartData[itemId] = 1;
            }
            setCartItems(cartData);
            toast.success("Item added to cart");
        }

    const cartCount = () => {
        let totalCount = 0;
        for(const item in cartItems) {
            totalCount += cartItems[item];
        }
        return totalCount; 
    }

    const updateCartItem = (itemId, quantity) =>
    {
        let cartData = structuredClone(cartItems);
        cartData[itemId] = quantity;

        setCartItems(cartData);
        toast.success("Cart item updated");
    }

   const totalCartAmount = () => {
  let totalCartAmount = 0;
  for (const itemId in cartItems) {
    const itemInfo = products.find((product) => String(product._id) === String(itemId));
    if (itemInfo) {
      totalCartAmount += cartItems[itemId] * itemInfo.offerPrice;
    }
  }
  return Math.floor(totalCartAmount * 1000) / 1000;
};

    const removeFromCart = (itemId) =>
    {
        let cartData = structuredClone(cartItems)
        if(cartData[itemId])
            {
                cartData[itemId] -= 1;
                if(cartData[itemId]=== 0)
                {
                    delete cartData[itemId];
                }
                toast.success("Removed from cart")
                setCartItems(cartData);
            }
    }

    useEffect(() =>{
        fetchProducts();
    }, [])
    const value = {navigate, user, setUser, isSeller,
         setIsSeller, showUserLogin, setShowUserLogin, 
         products, setProducts, cartItems, setCartItems,
          addToCart, updateCartItem, totalCartAmount, 
          removeFromCart, cartItems, cartCount, searchQuery, setSearchQuery};

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;