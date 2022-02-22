import { useNavigate } from "react-router-dom";

export default function Cart({ cartItems, onAdd, onRemove }) {
  const navigate = useNavigate();

  const compare = () =>{
    console.log('compate', cartItems);
    navigate('/compare', {state:{
        cartItems: cartItems}
      });
  }

  return (
    <aside>
      <h2>Cart Items</h2>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id}>
            <div>
              {item.name}
              <button onClick={() =>  onAdd(item)}>
                +
              </button>
              <button onClick={() => onRemove(item)}>
                -
              </button>
            </div>
            <div>{item.qty}</div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <button onClick={() => compare()}>Compare</button>
        )}
      </div>
    </aside>
  );
}
