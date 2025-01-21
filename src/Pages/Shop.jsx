import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Product from '../components/Product'
import Filter from '../components/Filter'


const Shop = () => {
  const [products, setProducts] = useState([]); // All products
  const [categories, setCategories] = useState([]); // Categories list
  const [filteredProducts, setFilteredProducts] = useState([]); // Filtered products
  const [selectedCategory, setSelectedCategory] = useState(''); // Selected category
  const [priceFilter, setPriceFilter] = useState('lowToHigh'); // Selected price filter

  useEffect(() => {
    const controller = new AbortController();

    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
        setFilteredProducts(response.data); // Set all products initially

        // Extract unique categories
        const uniqueCategories = [...new Set(response.data.map(product => product.category))];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
    return () => controller.abort();
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);

    // Filter products based on category or show all if category is empty
    if (category === '') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product => product.category === category);
      setFilteredProducts(filtered);
    }
  };

  const handlePriceChange = (filter) => {
    setPriceFilter(filter);
    let sortedProducts = [...filteredProducts];
    if (filter === 'lowToHigh') {
      sortedProducts.sort((a, b) => a.price - b.price); // Sort by price low to high
    } else if (filter === 'highToLow') {
      sortedProducts.sort((a, b) => b.price - a.price); // Sort by price high to low
    }
    setFilteredProducts(sortedProducts);
  };

  if (products.length === 0)
    return (
      <div 
        className="d-flex justify-content-center align-items-center" 
        style={{ height: "90vh", width: "100%" }}
      >
        <div className="spinner-border" role="status">
          <span className="visually-hidden">
            <span className="loader"></span>
          </span>
        </div>
      </div>
    );

  return (
    <div className="container py-3">
      {/* Render the Filter Component */}
      <Filter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
        onPriceChange={handlePriceChange} 
      />

      <div className="row pt-3">
        {filteredProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop
