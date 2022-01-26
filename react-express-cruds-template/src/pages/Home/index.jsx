import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './index.scss';
import axios from 'axios';

const Home = () => {
  
  const [product, setProduct] = useState([]);
  const [key, setKey] = useState("");

  const handleProduct = () => {
    axios.get('http://localhost:5000/api/product')
    .then(res => setProduct(res.data))
  }
  const handleDelete = (_id , e)=> {
    e.preventDefault();
    axios.delete(`http://localhost:5000/api/product/${_id}`).then(res => console.log(res))
  }

  useEffect(() => {
    handleProduct();
    
}, [product]);

  return(
    <div className="main">
      <Link to="/tambah" className="btn btn-primary">Tambah Produk</Link>
      <div className="search">
        <input type="text" placeholder="Masukan kata kunci..." onChange={(e) => setKey(e.target.value)}/>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th className="text-right">Price</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
         {product.filter((val) => {
           if (key === ""){
             return val
           } else if (val.name.toLowerCase().includes(key.toLowerCase())) {
             return val
           }
         }).map(products =>  <tr>
            <td>{products._id}</td>
            <td>{products.name}</td>
            <td className="text-right">{products.price}</td>
            <td className="text-center">
              <Link to={`/detail/${products._id}`} className="btn btn-sm btn-info">Detail</Link>
              <Link to={`/edit/${products._id}`} className="btn btn-sm btn-warning">Edit</Link>
              <Link to="#" onClick={(e) => handleDelete(products._id , e)} className="btn btn-sm btn-danger">Delete</Link>
            </td>
          </tr>)}
        </tbody>
      </table>
    </div>
  )
}

export default Home;