import {React, useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const SingleCrypto = (props) => {
  const { id } = useParams();
  // const [state, setState] = useState("");
  useEffect(() => {
    axios.get(`/crypto/${id}`) 
      .then((res) => {
        console.log(res);
        }
      )
      .catch((err)=>console.log(err));
  },[id]);
  // console.log(state)
  return (
    <div>
      hi
    </div>
  )
}

export default SingleCrypto
