import { useEffect, useState } from 'react'
import { dbBlogs } from "../firebase";
import productsActions from '../store/redux/slice-products';

export const useHttp = () => {
    const [list, setList] = useState([]);
    useEffect(() => {
        let mounted = true;
        dbBlogs.once('value').then((snapshot) => { return snapshot.val() ? snapshot.val() : new Error('Request failed') }).then((data) => {
            if (mounted) {


                setList(Object.entries(data))
            }
        })

    }, [])

    return list;
}

export const useSendRequest = (requestConfig) => {

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);

    const SendRequest = async () => {
        setIsLoading(true);
        setError(null);

        try {

            const response = await fetch(requestConfig.url, {
                method: requestConfig.method ? requestConfig.method : 'GET',
                headers: requestConfig.headers ? requestConfig.headers : {},
                body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
            });
            if (!response.ok) {
                throw new Error('Request failed!');
            }

            const data = await response.json();
            if (requestConfig.id) {
                return data.filter(item => item.id === requestConfig.id);
            }
            if (requestConfig.category) {

                return data.filter(item => item.category === requestConfig.category);
            }
            return data;
        } catch (err) {
            setError(err.message || 'Something went wrong!');
        }
        setIsLoading(false);
    }
    useEffect(() => {
        const data = SendRequest();
        data.then(function (result) {
            setData(result)
        });

    }, [requestConfig.category])

    return {
        isLoading,
        error,
        data
    };

}



