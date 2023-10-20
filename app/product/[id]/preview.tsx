"use client"
import "react-medium-image-zoom/dist/styles.css";
import Zoom from 'react-medium-image-zoom'

function ImagePreview({ images = [
  '/image/cache/catalog/products/15-1000x1000.jpg', 
] }) {
  const mainImage = images[0];

  return (
     <div className="col-sm-12 product-img">
      <div className="pro-image">
        <Zoom>
          <img src={mainImage} alt="Main Product" />
        </Zoom>
      </div>
      <div style={{display: 'flex', gap: '15px'}}>
        
        <Zoom>
          <img style={{ width: '100px', border: '1px solid cornsilk'}} src={mainImage} alt="Main Product" />
        </Zoom>
        <Zoom>
          <img style={{ width: '100px', border: '1px solid cornsilk'}} src={mainImage} alt="Main Product" />
        </Zoom>
        <Zoom>
          <img style={{ width: '100px', border: '1px solid cornsilk'}} src={mainImage} alt="Main Product" />
        </Zoom>
      </div>
    </div>
  );

}

export default ImagePreview;