import React, { useEffect } from 'react'
import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import "./Products.scss"
import { NavLink } from 'react-router-dom'
import { filterOptions } from '../../test'
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
} from '@chakra-ui/react'

const images = [
    { id: 1, name: 'Transactions every 24 hours', value: '44 million', image: "https://hips.hearstapps.com/hmg-prod/images/hlh100123digwalkingshoes-002-64d6462a3b4f7.jpg?resize=2048:*" },
    { id: 2, name: 'Assets under holding', value: '$119 trillion', image: "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw7646cf71/images/Titan/Catalog/90140QM03_1.jpg?sw=800&sh=800" },
    { id: 3, name: 'New users annually', value: '46,000', image: "https://www.tripsavvy.com/thmb/0yZ3sUdaJA2ujJltMzQEccggDtM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/2023-spruce-simple-recipes-tripsavvy-verywells-treehugger-copy-8e9fe2462cab4b11908d9e31ef992ad7.jpg" },
    { id: 3, name: 'New users annually', value: '46,000', image: "https://images.bewakoof.com/uploads/grid/app/maroon-t-shirt-with-blue-jeans-bewakoof-blog-2-1604989073.jpg" },
    { id: 3, name: 'New users annually', value: '46,000', image: "https://cdn.thecoolist.com/wp-content/uploads/2017/08/How-to-dress-for-your-body-type.jpg" },
    { id: 1, name: 'Transactions every 24 hours', value: '44 million', image: "https://hips.hearstapps.com/hmg-prod/images/hlh100123digwalkingshoes-002-64d6462a3b4f7.jpg?resize=2048:*" },
    { id: 2, name: 'Assets under holding', value: '$119 trillion', image: "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw7646cf71/images/Titan/Catalog/90140QM03_1.jpg?sw=800&sh=800" },
    { id: 3, name: 'New users annually', value: '46,000', image: "https://www.tripsavvy.com/thmb/0yZ3sUdaJA2ujJltMzQEccggDtM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/2023-spruce-simple-recipes-tripsavvy-verywells-treehugger-copy-8e9fe2462cab4b11908d9e31ef992ad7.jpg" },
    { id: 3, name: 'New users annually', value: '46,000', image: "https://images.bewakoof.com/uploads/grid/app/maroon-t-shirt-with-blue-jeans-bewakoof-blog-2-1604989073.jpg" },
    { id: 3, name: 'New users annually', value: '46,000', image: "https://cdn.thecoolist.com/wp-content/uploads/2017/08/How-to-dress-for-your-body-type.jpg" },
    { id: 1, name: 'Transactions every 24 hours', value: '44 million', image: "https://hips.hearstapps.com/hmg-prod/images/hlh100123digwalkingshoes-002-64d6462a3b4f7.jpg?resize=2048:*" },
    { id: 2, name: 'Assets under holding', value: '$119 trillion', image: "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw7646cf71/images/Titan/Catalog/90140QM03_1.jpg?sw=800&sh=800" },
    { id: 3, name: 'New users annually', value: '46,000', image: "https://www.tripsavvy.com/thmb/0yZ3sUdaJA2ujJltMzQEccggDtM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/2023-spruce-simple-recipes-tripsavvy-verywells-treehugger-copy-8e9fe2462cab4b11908d9e31ef992ad7.jpg" },
    { id: 3, name: 'New users annually', value: '46,000', image: "https://images.bewakoof.com/uploads/grid/app/maroon-t-shirt-with-blue-jeans-bewakoof-blog-2-1604989073.jpg" },
    { id: 3, name: 'New users annually', value: '46,000', image: "https://cdn.thecoolist.com/wp-content/uploads/2017/08/How-to-dress-for-your-body-type.jpg" },
]

function Products() {

    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

    useEffect(() => {
        console.log("api call")
        window.scrollTo({ top: 0 });
    }, [])

    return (

        <div className='products-screen'>

            <div className='topbar'>
                <Breadcrumb fontWeight='medium' fontSize='sm'>
                    <BreadcrumbItem>
                        <BreadcrumbLink href='#'>Home</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <BreadcrumbLink href='#'>About</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink href='#'>Current</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
                <div><span>Apparel - </span>223 items</div>
            </div>
            <div className='body'>
                <div className='filter-options'>
                    {filterOptions.map((ele, index) => (
                        <div key={index} className='each-filter'>
                            <div className='title'>{ele.name}</div>
                            <div className='option_list'>
                                {ele.options.map((item, index) => (
                                    <div key={index} className='item'>
                                        <div><Checkbox defaultChecked>{item.opt}</Checkbox></div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    ))}
                </div>
                <div className='products-list'>
                    {
                        images.map((ele, index) => {
                            return (
                                <NavLink to="/products-detail" className='item' key={index}>
                                    <div className='img-div'><img src={ele.image} alt="" /></div>
                                    <div className='footer'>
                                        <div className='brand'>Puma</div>
                                        <div className='desc'>Puma Mens shoes</div>
                                        <div className='price'>
                                            <div className='selling-price'>₹1299</div>
                                            <div className='original-price'>₹1299</div>
                                            <div className='discount'>80% off</div>
                                        </div>
                                    </div>
                                </NavLink>
                            )
                        })
                    }
                </div>
            </div>

            <div className="relative isolate overflow-hidden bg-gray-900 ">
                <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
                    <div
                        className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
            </div>
        </div>

    )
}

export default Products