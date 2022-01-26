import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import './index.scss';



const Detail = () => {
  const [detail, setDetail] = useState([]);
  const params = useParams();
  const handleDetail = () => {
    axios.get(`http://localhost:5000/api/product/${params.id}`)
    .then(res => setDetail(res.data));
  }

  useEffect(() => {
    handleDetail();
    
  }, []);

  return (
    <div className="main">
      <Link to="/" className="btn btn-primary">Kembali</Link>

      <table className="table">
        <tbody>
        <tr>
            <td>ID</td>
            <td>: {detail._id}</td>
          </tr>
          <tr>
            <td>Name</td>
            <td>: {detail.name}</td>
          </tr>
          <tr>
            <td>Price</td>
            <td>: Rp. {detail.price}</td>
          </tr>
          <tr>
            <td>Stock</td>
            <td>: {detail.stock}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Detail;