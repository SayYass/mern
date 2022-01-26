import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Input from "../../components/Input";

const Edit = () => {
  const [detail, setDetail] = useState([]);
  const [name, setProduct] = useState(detail.name);
  const [price, setHarga] = useState(detail.price);
  const [stock, setStock] = useState(detail.stock);
  const [status, setStatus] = useState(detail.status);
  const params = useParams();
  const handleDetail = () => {
    axios.get(`http://localhost:5000/api/product/${params.id}`)
    .then(res => setDetail(res.data));
  }
  const handleEdit = (e) => {
    e.preventDefault();
    const body = {name, price, stock , status};
    console.log(body)
    axios.put(`http://localhost:5000/api/product/${params.id}` , body)
    .then(res => setDetail(res.data));
  }

  useEffect(() => {
    handleDetail();
    
    
  }, [detail]);
  return (
    <div className="main">
      <div className="card">
        <h2>Edit Produk</h2>
        <br />
        <form>
          <Input name="name" type="text" placeholder={detail.name} label="Nama" onChange={(e) => setProduct(e.target.value)}/>
          <Input name="price" type="number" placeholder={detail.price} label="Harga" onChange={(e) => setHarga(e.target.value)} />
          <Input name="stock" type="number" placeholder={detail.stock} label="Stock"  onChange={(e) => setStock(e.target.value)}/>
          <Input name="status" type="checkbox" label="Active"  onChange={(e) => setStatus(e.target.checked)}/>
          <button type="submit" className="btn btn-primary" onClick={handleEdit}>Simpan</button>
        </form>
      </div>
    </div>
  )
}

export default Edit;