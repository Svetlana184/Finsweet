import { useState, useEffect } from 'react';
import axios from 'axios';

const useMetrics = (url = 'http://localhost:3000/api/metrics') => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.get(url);
                setData(response.data);
                setError(null);
            } catch (err) {
                console.error('Error fetching metrics:', err);
                setError(err.message);
                setData(null);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, loading, error };
};

export default useMetrics;