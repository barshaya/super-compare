import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

function CompareResults() {
  const location = useLocation();

  const cartItems = location.state.cartItems;

  const [arr, setArr] = useState([]);
  const [sum1, setSum1] = useState(0);
  const [sum2, setSum2] = useState(0);
  const [sum3, setSum3] = useState(0);

  const [done, setDone] = useState(false);

  const fetchData = async (store_id, product_id, product_qty) => {
    console.log("fetching");
    try {
      await axios
        .get("http://localhost:4000/data", {
          params: {
            store_id: store_id,
            product_id: product_id,
          },
        })
        .then(({ data }) =>
          setArr([...arr, data.data[0].store_product_price * product_qty])
        );
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    cartItems.forEach((item) => {
      fetchData("1", item.id, item.qty);
    });
    setSum1(arr.reduce((a, b) => a + b, 0));
    setArr([]);

    cartItems.forEach((item) => {
      fetchData("2", item.id, item.qty);
    });
    setSum2(arr.reduce((a, b) => a + b, 0));
    setArr([]);

    cartItems.forEach((item) => {
      fetchData("3", item.id, item.qty);
    });
    setSum3(arr.reduce((a, b) => a + b, 0));
    setArr([]);
    setDone(true);
  }, []);

  return (
    <div>
      {done && (
        <>
          <div>
            <h4>Shupersal</h4>
            <span>{sum1}</span>
          </div>
          <div>
            <h4>Tiv Taam</h4>
            <span>{sum2}</span>
          </div>
          <div>
            <h4>Rami Levi</h4>
            <span>{sum3}</span>
          </div>
        </>
      )}
    </div>
  );
}

export default CompareResults;
