import React from 'react'

const Filter = ({ categories, selectedCategory, onCategoryChange,onPriceChange }) => {
  return (
    <div className="d-flex gap-3">
  <div className="filter-section mb-4 flex-fill">
    <label 
      htmlFor="category-select" 
      className="me-2 py-2 fw-semibold fs-5" 
      style={{ color: "#020f5f" }}
    >
      Filter by Category
    </label>
    <select
      id="category-select"
      value={selectedCategory}
      onChange={(e) => onCategoryChange(e.target.value)}
      className="form-select w-100"
    >
      <option value="">All Categories</option>
      {categories.map((category, index) => (
        <option key={index} value={category}>
          {category}
        </option>
      ))}
    </select>
  </div>

  <div className="filter-section mb-4 flex-fill">
    <label 
      htmlFor="price-select" 
      className="me-2 py-2 fw-semibold fs-5" 
      style={{ color: "#020f5f" }}
    >
      Filter by Price
    </label>
    <select 
      id="price-select"
      onChange={(e) => onPriceChange(e.target.value)}
      className="form-select w-100"
    >
      <option value="lowToHigh">Low to High</option>
      <option value="highToLow">High to Low</option>
    </select>
  </div>
</div>

  )
}

export default Filter
