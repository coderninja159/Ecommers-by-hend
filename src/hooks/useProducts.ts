import { useEffect, useState } from "react";
import axios from "axios";
import { type Product } from "../types/index"

interface UseProductsResult {
    product: Product[];
    loading: boolean;
    error: string | null;
    refetch: () => void;
}

export const useProduct = (): UseProductsResult => {
    const [product, setProduct] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const refetch = () => {
        setLoading(true);
        setError(null);
    }

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get<Product[]>("/api/products");
                setProduct(response.data);
            }
            catch (err) {
                setError("Xato");
            }
            finally {
                setLoading(false);
            }
        }
        fetchProducts();
           
    },[refetch])



    return { product, loading, error, refetch };

}