import React, { useState } from "react";
import Headers from "../header/header";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import "./shop.css";
import Footer from "../footer/footer";

export default function Shopper({ adicionarAoCarrinho }) {
  const [count, setCount] = useState(0);
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleIncrement = () => {
    setCount(count + 1);
    const product = { produto: "your product data here" }; // Replace with actual product data
    setSelectedProducts([...selectedProducts, product]);
    adicionarAoCarrinho(product); // Call the function with the product data
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <Headers />
      <div className="maismenos">
        <IconButton color="primary" onClick={handleDecrement}>
          <RemoveIcon />
        </IconButton>
        <Typography variant="body1">{count}</Typography>
        <IconButton color="primary" onClick={handleIncrement}>
          <AddIcon />
        </IconButton>
      </div>

      <div className="selected-products">
        <h2>Selected Products:</h2>
        <ul>
          {selectedProducts.map((product, index) => (
            <li key={index}>{product.produto}</li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
}
