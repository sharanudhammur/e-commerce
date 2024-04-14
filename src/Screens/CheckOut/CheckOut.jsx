import React from 'react'
import "./CheckOut.scss"
import { offerImages } from '../../test'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { BsPlusCircle } from "react-icons/bs";
import { BiMinusCircle, BiPlusCircle } from "react-icons/bi";
import { useLocation, useNavigate } from 'react-router-dom';

function CheckOut() {

    const navigate = useNavigate()
    const location = useLocation()

    const placeOrder = () => {
        const params = new URLSearchParams();
        params.append('login', 'true');
        const newUrl = `${location.pathname}?${params.toString()}`;
        navigate(newUrl);
    }
    return (
        <div className='CheckOut_screen'>
            <div className='item_list'>
                {offerImages.map((ele, index) => (
                    <div className='each_item' key={index}>
                        <img src={ele.path} alt="" />
                        <div className='product_detail'>

                            <div className='product_name'>{ele.name}</div>
                            <div className='desc'>{ele.value}</div>
                            <div className='price'>
                                <span className='offer_price'>₹569</span>
                                <span className='og_price'>₹1000</span>
                                <span className='discount'>55% off</span>
                            </div>
                            <div className='add-items'>
                                <span><BiMinusCircle /></span>
                                <span>22</span>
                                <span><BiPlusCircle /></span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='price_detail'>
                <div className='title'>Price Detail</div>
                <hr />
                <div className='price-dd'>
                    <div className='each'>
                        <div>Total MRP</div>
                        <div>₹22121</div>
                    </div>
                    <div className='each'>
                        <div>Discount</div>
                        <div>₹22121</div>
                    </div>
                    <div className='each'>
                        <div>Delivary Changes</div>
                        <div><span className='strike'>₹79</span><span className='green'>Free</span></div>
                    </div>
                </div>

                <hr />
                <div className='total'>
                    <div>Total Amount</div>
                    <div>₹22121</div>
                </div>

                <div className='place_order'>
                    <Button colorScheme='blue' onClick={placeOrder}>Place Order</Button>
                </div>
            </div>
        </div>
    )
}

export default CheckOut