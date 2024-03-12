import React, { useEffect, useState } from 'react'

function DataFetcher() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setData(data.products);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });

  }, []);
  return (
    <div> {data.map((item: any) => (
      <div key={item.id}>
        <div>
          <h5>{item.title}</h5>
          <h6>{item.description}</h6>
        </div>
        <img src={item.thumbnail} alt={item.title} width={100} />
      </div>
    ))
    }
    </div>
  )
}

export default DataFetcher