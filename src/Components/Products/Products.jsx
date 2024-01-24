import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Products() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect (() => {
      axios.get("http://localhost:3004/products").then((res) => {
        setData(res.data);
        setLoading(false);
      });
    }, []);

    if (loading) {
        return <h1>Loadig</h1>
    }
  return (
        <>
        {
            data.map((product) => {
                return <div key={product.id}>{product.name} {product.price}</div>
            })
        }
        </>
  )
}
