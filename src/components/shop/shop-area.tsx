'use client'
import React,{useState,useEffect} from "react";
// internal
import product_data from "@/data/product-data";
import usePagination from "@/hooks/use-pagination";
import { IProduct } from "@/types/product-d-t";
import Pagination from "@/ui/pagination";
import ProductItem from "./product-item";

const ShopArea = () => {
  // State to manage filterable products
  const [filterableProducts, setFilterableProducts] = useState([...product_data]);
  const { currentItems, handlePageClick, pageCount } = usePagination<IProduct>(filterableProducts, 9);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    let updatedProducts = [...product_data]; // Create a copy
    if (value === 'low') {
      updatedProducts = updatedProducts.slice().sort((a, b) => Number(a.price) - Number(b.price));
    } else if (value === 'high') {
      updatedProducts = updatedProducts.slice().sort((a, b) => Number(b.price) - Number(a.price));
    }
    else if (value === 'books') {
      updatedProducts = updatedProducts.filter(item => item.category === 'books');
    }
    else if (value === 'visiting-card') {
      updatedProducts = updatedProducts.filter(item => item.category === 'visiting-card');
    }
    else if (value === 'magazine') {
      updatedProducts = updatedProducts.filter(item => item.category === 'magazine');
    }
    else if (value === 'trending') {
      updatedProducts = updatedProducts.filter(item => item.reviews.some(review => review.rating > 3));
    }
    else if (value === 'new') {
      updatedProducts = updatedProducts.slice(-10);
    }
    setFilterableProducts(updatedProducts);
  };

  useEffect(() => {
  }, [filterableProducts]);
  return (
    <div className="product-section-one mt-150 lg-mt-80 mb-150 lg-mb-60">
      <div className="container">
        <div className="shop-page-header d-lg-flex align-items-center justify-content-between">
          <p className="m0 md-pb-20">
            Showing <span className="fw-500 text-dark">1–{currentItems.length}</span> of{" "}
            <span className="fw-500 text-dark">{product_data.length}</span> results
          </p>
          <ul className="shop-filter-one style-none d-md-flex align-items-center">
            <li className="me-md-3 sm-mb-10">
              <select onChange={handleSelectChange} className="theme-select-menu">
                <option value="price">Price</option>
                <option value="low">Price: low to high</option>
                <option value="high">Price: high to low</option>
              </select>
            </li>
            <li className="me-md-3 sm-mb-10">
              <select onChange={handleSelectChange} className="theme-select-menu">
                <option value="">Category</option>
                <option value="books">Books</option>
                <option value="visiting-card">Visiting Card</option>
                <option value="magazine">Magazine</option>
              </select>
            </li>
            <li>
              <select onChange={handleSelectChange} className="theme-select-menu">
                <option value="">Popularity</option>
                <option value="trending">Trending items</option>
                <option value="new">Newest items</option>
              </select>
            </li>
          </ul>
        </div>

        <div className="products-wrapper mt-40">
          <div className="row gx-xxl-5">
            {currentItems?.map((product,i) => (
              <div
                key={product.id}
                className="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay={`0.${i}s`}
              >
                <ProductItem product={product} />
              </div>
            ))}
          </div>

          <div className="pagination-one mt-30 lg-mt-10">
            <Pagination handlePageClick={handlePageClick} pageCount={pageCount} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopArea;
