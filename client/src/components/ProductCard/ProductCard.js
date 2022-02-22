import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

import "./ProductCard.css";

export default function ProductCard({product, onAdd}) {

  return (
    <div className='card-product'>
        <ImageListItem key={product.id} sx={{ width: 200, height: 200 }}>
          <img
            src={product.img}
            alt={product.name}
            loading="lazy"
            />
          <ImageListItemBar
            title={product.name}
            subtitle={<button onClick={() => onAdd(product)}>Add To Cart</button>}
            position="below"
            />
        </ImageListItem>
    </div>
    )
}
