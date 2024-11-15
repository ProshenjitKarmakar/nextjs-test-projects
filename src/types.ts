import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export type Product = {
    name: string;
    description: string;
    price: string;
    id: string;
};

export interface PaginationConfig<T> {

    items: T[];
    itemsPerPage: number;
    initialPage?: number;
}

export interface PaginationResult<T> {
    currentPage: number;
    totalPages: number;
    selectedProduct: Product | null
    paginatedItems: T[];
    handlePageChange: (direction: "next" | "prev") => void;
    handleOpenModal: (product: Product) => void,
    handleCloseModal: () => void,
}
