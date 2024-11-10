"use client";

import { PaginationConfig, PaginationResult, Product } from "@/types";
import { calculateTotalPages } from "@/utils/pagination/calculateTotalPages";
import { getNextPage } from "@/utils/pagination/getNextPage";
import { getPaginatedItems } from "@/utils/pagination/getPaginatedItems";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";

export const usePagination = <T>({
    items,
    itemsPerPage,
    initialPage = 1,
}: PaginationConfig<T>): PaginationResult<T> => {
    const router: AppRouterInstance = useRouter();
    const searchParams = useSearchParams();
    const productId = searchParams.get('product-id');
    const [currentPage, setCurrentPage] = useState<number>(initialPage);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const totalPages = useMemo(
        () => calculateTotalPages(items.length, itemsPerPage),
        [items, itemsPerPage]
    );

    const paginatedItems = useMemo(
        () => getPaginatedItems(items, currentPage, itemsPerPage),
        [items, currentPage, itemsPerPage]
    );

    useEffect(() => {
        if (productId) {
            const getProduct: Product | undefined = (paginatedItems as Product[]).find((item: Product) => item.id === productId);
            console.log("======getProduct====", getProduct);
            setSelectedProduct(getProduct as Product);
        }
    }, [productId])

    const handleOpenModal = useCallback((product: Product) => {
        if (product?.id) {
            setSelectedProduct(product);
            const url = `/products?product-id=${product?.id}`;
            router.push(url);
        } else {
            console.log('Product not found!')
        }
    }, []);

    const handleCloseModal = useCallback(() => {
        setSelectedProduct(null);
        const url = `/products`;
        router.push(url);
    }, []);

    const handlePageChange = useCallback(
        (direction: "next" | "prev") => {
            setCurrentPage((prevPage) =>
                getNextPage(prevPage, direction, totalPages)
            );
        },
        [totalPages]
    );

    return {
        currentPage,
        totalPages,
        paginatedItems,
        selectedProduct,
        handlePageChange,
        handleOpenModal,
        handleCloseModal,
    };
};
