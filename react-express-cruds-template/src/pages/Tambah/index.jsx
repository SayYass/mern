
import axios from 'axios';
import { useState , useEffect } from 'react';

import Input from '../../components/Input';
import './index.scss';

const Tambah = () => {
  const [name, setProduct] = useState('');
  const [price, setHarga] = useState(0);
  const [stock, setStock] = useState(0);
  const [status, setStatus] = useState(false);


 const handleSimpan = (e) => {
   const body = {name, price, stock , status }
   e.preventDefault()
    console.log(body);
    axios.post('http://localhost:5000/api/product' , body).then(res => console.log(res.data))
  }
  return (
    <div className="main">
      <div className="card">
        <h2>Tambah Produk</h2>
        <br />
        <form>
          <Input name="name" type="text"  placeholder="Nama Produk..." label="Nama" onChange={(e) => setProduct(e.target.value)} />
          <Input name="price" type="number" placeholder="Harga Produk..." label="Harga" onChange={(e) => setHarga(e.target.value)} />
          <Input name="stock" type="number" placeholder="Stock Produk..." label="Stock" onChange={(e) => setStock(e.target.value)} />
          <Input name="status" type="checkbox" label="Active" className="checkbox" onChange={(e) => setStatus(e.target.checked)}/>
          <button type="submit" className="btn btn-primary" onClick={handleSimpan}>Simpan</button>
        </form>
      </div>
    </div>
  )
}

export default Tambah;