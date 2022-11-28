export async function requestGetProducts() {
    return await fetch('http://localhost:3030/product/')
        .then(res => res.json())
        .then(data => data);
};

export async function requestPostProduct(data) {
    return await fetch('http://localhost:3030/product',{
        method:'post',
        headers:{
            'Content-type':'application/json',
            'x-authorization':data.AccessToken
        },
        body:JSON.stringify(data.productData)
    })
    .then(res => res.json())
    .then(data => data);
};

export async function requestPurchaseProduct(accessToken,itemId) {
    return await fetch(`http://localhost:3030/product/purchase/${itemId}`,{
        method:'get',
        headers:{
            'Content-type':'application/json',
            'x-authorization':accessToken
        },
    })
    .then(res => res.json())
    .then(data => data);
};