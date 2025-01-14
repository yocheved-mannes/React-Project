import React, { useState, useContext } from "react";
import MyContext from "./context/context";

const AdminEditPage = () => {
  const { products, setProducts } = useContext(MyContext);
  const [isAdding, setIsAdding] = useState(false);
  const [newProduct, setNewProduct] = useState({
    id: "",
    name: "",
    ToolType: "",
    Details: "",
    price: "",
    img: "",
  });

  // עדכון מוצר
  const updateProduct = (id, updatedProduct) => {
    setProducts(
      products.map((product) =>
        product.id === id ? { ...product, ...updatedProduct } : product
      )
    );
  };

  // מחיקת מוצר
  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  // הוספת מוצר
  const addProduct = () => {
    if (newProduct.name && newProduct.price && newProduct.img) {
      setProducts([...products, { ...newProduct, id: products.length + 1 }]);
      setNewProduct({
        id: "",
        name: "",
        ToolType: "",
        Details: "",
        price: "",
        img: "",
      });
      setIsAdding(false);
    } else {
      alert("נא למלא את כל השדות הנדרשים");
    }
  };

  return (
    <div>
      <h1>דף עריכת מוצרים</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "16px",
              textAlign: "center",
              width: "250px",
            }}
          >
            <img
              src={"/img/" + product.img}
              alt={product.name}
              style={{ width: "100%", height: "150px", objectFit: "cover" }}
            />
            <div>
              <label>שם מוצר:</label>
              <input
                type="text"
                value={product.name}
                onChange={(e) =>
                  updateProduct(product.id, { name: e.target.value })
                }
                style={{
                  display: "block",
                  margin: "8px 0",
                  width: "100%",
                  padding: "8px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                }}
              />
            </div>
            <div>
              <label>מחיר:</label>
              <input
                type="number"
                value={product.price}
                onChange={(e) =>
                  updateProduct(product.id, { price: parseFloat(e.target.value) })
                }
                style={{
                  display: "block",
                  margin: "8px 0",
                  width: "100%",
                  padding: "8px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                }}
              />
            </div>
            <button
              onClick={() => console.log(`המוצר ${product.name} עודכן בהצלחה`)}
              style={{
                backgroundColor: "#4CAF50",
                color: "white",
                border: "none",
                borderRadius: "4px",
                padding: "8px 16px",
                cursor: "pointer",
                marginTop: "10px",
              }}
            >
              עדכון מוצר
            </button>
            <button
              onClick={() => deleteProduct(product.id)}
              style={{
                backgroundColor: "#F44336",
                color: "white",
                border: "none",
                borderRadius: "4px",
                padding: "8px 16px",
                cursor: "pointer",
                marginTop: "10px",
                marginLeft: "10px",
              }}
            >
              מחיקת מוצר
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={() => setIsAdding(!isAdding)}
        style={{
          backgroundColor: "#008CBA",
          color: "white",
          border: "none",
          borderRadius: "4px",
          padding: "10px 20px",
          cursor: "pointer",
          marginTop: "20px",
        }}
      >
        הוסף מוצר חדש
      </button>
      {isAdding && (
        <div style={{ marginTop: "20px" }}>
          <h3>הוסף מוצר חדש</h3>
          <input
            type="text"
            placeholder="שם מוצר"
            value={newProduct.name}
            onChange={(e) =>
              setNewProduct({ ...newProduct, name: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="סוג הכלי"
            value={newProduct.ToolType}
            onChange={(e) =>
              setNewProduct({ ...newProduct, ToolType: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="פרטים"
            value={newProduct.Details}
            onChange={(e) =>
              setNewProduct({ ...newProduct, Details: e.target.value })
            }
          />
          <input
            type="number"
            placeholder="מחיר"
            value={newProduct.price}
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: parseFloat(e.target.value) })
            }
          />
          <input
            type="text"
            placeholder="שם התמונה"
            value={newProduct.img}
            onChange={(e) =>
              setNewProduct({ ...newProduct, img: e.target.value })
            }
          />
          <button
            onClick={addProduct}
            style={{
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "4px",
              padding: "10px 20px",
              cursor: "pointer",
              marginTop: "10px",
            }}
          >
            שמור מוצר
          </button>
        </div>
      )}
    </div>
  );
};

export default AdminEditPage;
