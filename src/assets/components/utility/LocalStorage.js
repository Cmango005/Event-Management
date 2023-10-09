const getStoredProduct =()=>{
    const storedProduct = localStorage.getItem('product-store');
    if(storedProduct){
        return JSON.parse(storedProduct);
    }
    return [];
}
const saveProduct =id =>{
 const storedProducts= getStoredProduct();
 const exists = storedProducts.find(productId=> productId===id);
 if(!exists){ 
    storedProducts.push(id);
    localStorage.setItem('product-store', JSON.stringify(storedProducts));
 }
}
export {getStoredProduct,saveProduct}