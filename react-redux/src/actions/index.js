export const increment = (products) => {
    return{
        type:"INCREMENT",
        
        payload:products
    };
};
export const decrement = () => {
    return{
        type:"DECREMENT"
    };
};