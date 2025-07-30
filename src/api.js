export const fetchData = async () => {
    const response = await fetch('https://dummyjson.com/products/category/fragrances');
    const result = await response.json();
    return result;
};