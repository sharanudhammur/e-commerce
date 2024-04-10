import React from 'react'
import "./ProductDetail.scss"
import { addTodo } from '../../features/todo/todoSlice';
import { useSelector, useDispatch } from "react-redux"

function ProductDetail() {

    const dispatch = useDispatch()
    const oooos = () => {
        console.log("added")
        dispatch(addTodo({ name: "hello22" }))
    }
    return (
        <div className='ProductDetail'>
            <div className='images'>
                <img src="https://images.bewakoof.com/uploads/grid/app/maroon-t-shirt-with-blue-jeans-bewakoof-blog-2-1604989073.jpg" alt="" />
            </div>
            <div className='detail'>
                <div className='brand'>Puma</div>
                <div className='desc'>Men cloth</div>
                <div className='special-price'>Special Price</div>
                <div className='price'>₹299</div>
                <div className='actions'>
                    <button onClick={() => oooos()}>Add to cart</button>
                    <button>Buy now</button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail