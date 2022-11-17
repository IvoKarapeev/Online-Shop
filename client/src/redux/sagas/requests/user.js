export async function requestPostUser(userData) {
    return await fetch('http://localhost:3030/user/register',{
        method:'post',
        headers:{
            'Content-type':'application/json',
        },
        body:JSON.stringify(userData)
    })
    .then(res => res.json())
    .then(data => data);
};

export async function requestLoginUser(userData) {
    return await fetch('http://localhost:3030/user/login',{
        method:'post',
        headers:{
            'Content-type':'application/json',
        },
        body:JSON.stringify(userData)
    })
    .then(res => res.json())
    .then(data => data);
};
