import React, { createContext, useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import cards from '../fakers/cards'

const Context = createContext();

export const StateContext = ({ children }) => {
    const [showCart, setShowCart] = useState(false);
    const [showKit, setShowKit] = useState(false);
    const [kitItems, setKitItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantities, setTotalQuantities] = useState(0);
    const [kittotalPrice, setKitTotalPrice] = useState(0);
    const [kittotalQuantities, setKitTotalQuantities] = useState(0);

    let foundProduct;

    const onAdd = (product) => {
        const checkProductInCart = cartItems.find((item) => item.id === product.id);
        setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price);
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);
        if (checkProductInCart) {
            cartItems.map((cartProduct) => {
                if (cartProduct.id === product.id)
                    cartProduct.qty = cartProduct.qty + 1;
            })
        } else {
            setCartItems([...cartItems, { ...product }]);
        }
    }
    const onAddKit = (product) => {
        const checkProductInCart = kitItems.find((item) => item.id === product.id);
        if (checkProductInCart) {
            return;
        } else {
            setKitTotalPrice((prevTotalPrice) => prevTotalPrice + product.price);
            setKitTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);
            setKitItems([...kitItems, { ...product }]);
        }
    }
    const onRemove = (product) => {
        foundProduct = cartItems.find((item) => item.title === product.title);
        const newCartItems = cartItems.filter((item) => item.title !== product.title);
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price * foundProduct.qty);
        setTotalQuantities(prevTotalQuantities => prevTotalQuantities - foundProduct.qty);
        setCartItems(newCartItems);
    }
    const Checkout = () => {
        toast.success(`${totalQuantities} item added to your account.`);
    }
    const status = () => {
        setKitItems((prevKitItems) => {
            const newKitItems = prevKitItems.map((item1) => {
                const matchingItem = cards.find((item2) => item1.id === item2.id);
                if (matchingItem) {
                    return { ...item1, status: matchingItem.status };
                } else {
                    return item1;
                }
                
            });
            return newKitItems;
        });
        toast.success(`the status updated`);
    }

    return (
        <Context.Provider
            value={{
                showCart,
                setShowCart,
                cartItems,
                showKit,
                setShowKit,
                kitItems,
                setKitItems,
                totalPrice,
                totalQuantities,
                kittotalPrice,
                kittotalQuantities,
                onAdd,
                onAddKit,
                onRemove,
                setCartItems,
                setTotalPrice,
                setTotalQuantities,
                setKitTotalPrice,
                Checkout,
                status,
                setKitTotalQuantities
            }}
        >
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);