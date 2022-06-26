import { useState, useCallback } from 'react';

export const useHttp = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const request = useCallback(async (url, method = 'GET', body = null, headers = { 'Content-Type': 'application/json' }) => {

        setLoading(true);

        try {
            const response = await fetch(url, { method, body, headers });

            if (!response.ok) {
                throw new Error(`Coluld not fetch ${url}, status: ${res.status}`);
            }

            const data = await response.json();

            setLoading(false);
            return data;

        } catch (err) {
            setLoading(false);
            setError(err.message);
            throw err;
        }

    }, [])

    const clearError = useCallback(() => setError(null), []);

    return { loading, request, error, clearError };
}