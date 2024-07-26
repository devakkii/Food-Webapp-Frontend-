import { createContext, useEffect } from "react";
import axios from 'axios'
import { useState } from "react";

export const StoreContext = createContext(null)

const url = "https://food-webapp-backend-4uph.onrender.com"



const StoreContextProvider = (props) =>{
    const [cartItems,setCartItems] = useState({});
    const[token,setToken] = useState()
    const[food_list,setFoodList] = useState([])

    const addToCart = async (itemId)=>{
        if(!cartItems[itemId]){
            setCartItems(prev => ({...prev,[itemId]:1}))
        }
        else{
            setCartItems(prev => ({...prev,[itemId] : prev[itemId] + 1 }))
        }
        if(token){
               await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
            }
          
    }

    const removeFromCart = async  (itemId) =>{
        setCartItems((prev) => ({...prev,[itemId] : prev[itemId] - 1}))
        if(token){
            const response = await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}});
          
        }
    }

    const getTotalCartAmount = () =>{
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item]>0)
            {
                let itemInfo = food_list.find((product) => product._id===item);
                totalAmount += itemInfo.price* cartItems[item];
            }
         }
         return totalAmount;
       
    }

    const fetchFoodlist = async()=>{
        const response = await axios.get(url+"/api/food/list");
        setFoodList(response.data.data)
    }
    const loadCartData = async (token) =>{
        const response = await axios.post(url+"/api/cart/get",{},{headers:{token}});
        setCartItems(response.data.cartData)
        
    }
    useEffect(()=>{
        async function loadData(){
            await fetchFoodlist()
            const storedToken = localStorage.getItem('token')
            if (storedToken) {
                setToken(storedToken);
                await loadCartData(storedToken);
                
    
            }
        }
       loadData();
    },[])

const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken,

}
return(
    <StoreContext.Provider value={contextValue} >
        {props.children}
    </StoreContext.Provider>
)

}

export default StoreContextProvider
