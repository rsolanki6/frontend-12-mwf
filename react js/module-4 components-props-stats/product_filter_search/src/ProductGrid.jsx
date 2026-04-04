import React, { useState } from "react";
import { Container,Row} from "react-bootstrap";
import Data from "./Data";

function ProductGrid() {
    const [filteredData, setFilteredData] = useState(Data);

    const tShirts = () => {
        const result = Data.filter((item) => item.category === "Tshirt");
        setFilteredData(result);
    };

    const shorts = () => {
        const result = Data.filter((item) => item.category === "Short");
        setFilteredData(result);
    };

    const jeans = () => {
        const result = Data.filter((item) => item.category === "Jeans");
        setFilteredData(result);
    };

    const shoes = () => {
        const result = Data.filter((item) => item.category === "Shoes");
        setFilteredData(result);
    };

    const showAll = () => {
        setFilteredData(Data);
    };

    return (
        <>
            <h1 align="center">Product Filter and Search</h1>
            <div className="app container">
                <button type="button" onClick={showAll}>All</button>
                <button type="button" onClick={tShirts}>Tshirt</button>
                <button type="button" onClick={shorts}>Short</button>
                <button type="button" onClick={jeans}>Jeans</button>
                <button type="button" onClick={shoes}>Shoes</button>
            </div>
            <Row>
            {/* Product Grid Start */}
            <div className="product-grid col-md-3">
                {filteredData.map((item, index) => {
                    return (
                        <div className="prod-app" key={item.id || index}>
                            <p><img src={item.photo} alt="photo" /></p>
                            <p><b>{item.name}</b></p>
                            <p><b>Category:</b> {item.category}</p>
                            <p>Rs. {item.price}</p>
                        </div>
                    )
                })}
            </div>
            </Row>
        </>
    );
}

export default ProductGrid;