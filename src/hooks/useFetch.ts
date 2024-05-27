'use client'

import { useState, useEffect } from 'react';

type FetchResult<T> = {
    data: T | null;
    isLoading: boolean;
    error: string | null;
};

const useFetch = <T>(url: string): FetchResult<T> => {
    const [data, setData] = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3333' + url);
                if (!response.ok) {
                    throw new Error('Erro ao carregar os dados.');
                }
                const fetchedData: T = await response.json();
                setData(fetchedData);
                setIsLoading(false);
            } catch (error: any) {
                setError(error.message);
                setIsLoading(false);
            }
        };

        fetchData();

        return () => {
            setData(null);
            setIsLoading(true);
            setError(null);
        };
    }, [url]);

    return { data, isLoading, error };
};

export default useFetch;
