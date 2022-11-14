export async function requestGetProducts() {
    return await fetch('http://localhost:3030/product/')
        .then(res => res.json())
        .then(data => data);
};