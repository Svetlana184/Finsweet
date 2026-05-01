import { useState, useEffect } from 'react';
import axios from 'axios';

const useSteps = (type) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.get('http://localhost:3000/api/steps/' + type);
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
    }, [type]);

    return { data, loading, error };
};

export default useSteps;