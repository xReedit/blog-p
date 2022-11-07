import { PUBLIC_API_KEY } from '$env/static/public'

export const login = async (formData) => {    
    const url = `${PUBLIC_API_KEY}/login`
    localStorage.setItem('token', '');
    return await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },     
        body: formData
    })    
}

//verify login status
export const verifyLogin = async () => {
    // try {        
        const url = `${PUBLIC_API_KEY}/verify-login`
        
        const params = {
            token: localStorage.getItem('token') || ''
        }
        
        return await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(params)
            }
        )    
        
}
