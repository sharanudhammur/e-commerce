import React, { useEffect, useState } from 'react'
import "./ProductDetail.scss"
import { addTodo } from '../../features/todo/todoSlice';
import { useDispatch } from "react-redux"
import { images } from '../../dummy';
import { NavLink } from 'react-router-dom';
import { FaTag } from "react-icons/fa6";

function ProductDetail() {

    const dispatch = useDispatch()
    const oooos = () => {
        dispatch(addTodo({ name: "hello22" }))
    }

    const [currentImage, setCurrentImage] = useState(null)
    useEffect(() => {
        setCurrentImage(images[0].image)
        window.scrollTo({ top: 0 });
    }, [])

    return (
        <div className='product_detail_screen'>
            <div className='aside'>
                <div className='image-list'>
                    {images.map((ele, index) => {
                        return (
                            <img key={index} src={ele.image} className={`each-imagex ${ele.image === currentImage && "currentImage"}`} onClick={() => setCurrentImage(ele.image)} />
                        )
                    })}
                </div>
                <div className='single-image'>
                    <img src={currentImage} alt="" />
                </div>
            </div>
            <div className='detail'>
                <div className='brand'>Puma</div>
                <div className='desc'>Men cloth</div>
                <div className='special-price'>Special Price</div>
                <div className='price-detail'>
                    <span>₹ 299</span>
                    <span>₹799</span>
                    <span>55% off 799</span>
                </div>
                <div className='offer-section'>
                    <div className='title'>
                        Available offers
                    </div>
                    <div className='each-offer'>
                        <span><FaTag /></span>
                        <span>Bank Offer</span>
                        <span>9% Cashback on Flipkart Axis Bank Card</span>
                        <span>T&C</span>
                    </div>
                    <div className='each-offer'>
                        <span><FaTag /></span>
                        <span>Bank Offer</span>
                        <span>10% off on HSBC Bank Credit Card and EMI Transactions, up to ₹1,000 on orders of ₹5,000 and above</span>
                        <span>T&C</span>
                    </div>
                    <div className='each-offer'>
                        <span><FaTag /></span>
                        <span>Bank Offer</span>
                        <span>₹3000 Off On Selected Banks Credit and Debit Card Transactions.</span>
                        <span>T&C</span>
                    </div>
                </div>
                <div className='actions'>
                    <button onClick={() => oooos()}>Add to cart</button>
                    <button><NavLink to="/checkout">Buy now</NavLink></button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail