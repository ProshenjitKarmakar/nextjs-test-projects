"use client";

import { BackToHome } from "@/components/backToHome/backToHome";
import { PRODUCTS_DATA } from "@/data/productsData";
import { usePagination } from "@/hooks/usePagination";
import { PaginationControls } from "@/views/products/paginationControls/paginationControls";
import { ProductList } from "@/views/products/productList/productList";
import { ProductModal } from "@/views/products/productModal/productModal";
import React from "react";

export const Products: React.FC = () => {
    const {
        currentPage,
        totalPages,
        selectedProduct,
        paginatedItems: paginatedProducts,
        handlePageChange,
        handleOpenModal,
        handleCloseModal,
    } = usePagination({ items: PRODUCTS_DATA, itemsPerPage: 5 });



    return (
        <div>
            <BackToHome />
            <ProductList products={paginatedProducts} onOpenModal={handleOpenModal} />
            <div className="h-4" />
            <PaginationControls
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
            {selectedProduct && (
                <ProductModal product={selectedProduct} onClose={handleCloseModal} />
            )}
        </div>
    );
};
