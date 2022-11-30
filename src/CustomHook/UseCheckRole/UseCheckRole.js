import { useEffect, useState } from 'react';

const UseCheckRole = email => {
    const [useRole, setUseRole] = useState(false);
    const [isloading, setLoading] = useState(true)

    useEffect(() => {
        if(email){
            fetch(`https://mobile-mart-server-iota.vercel.app/user?email=${email}`)
            .then(res => res.json())
            .then(data =>{
                setUseRole(data?.role)
                setLoading(false)
            })
        }
    }, [email])
    return [useRole, isloading]
};

export default UseCheckRole;