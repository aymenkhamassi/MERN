import React from 'react'
import {Link} from 'react-router-dom'
    
const ProductList = (props) => {
    return (
        <div>
            <h1>All Products</h1>
            <table>
                <thead>
                    <tr>
                    <th>Title</th>
                    </tr>
                    
                </thead>
                <tbody>
                {props.product.map( (product) =>
                <tr key={product._id}>
                    <td><Link to={`product/${product._id}`}>{product.title}</Link></td>
                </tr>
            )}
                </tbody>
            </table>
          
        </div>
    )
}
    
export default ProductList;