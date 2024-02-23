import  { useEffect, useState } from 'react';
// import Rating from 'react-rating';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const Middle = () => {
    const {id } = useParams()
    console.log(id);
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('../../../../public/data/news.json')
            .then(res => res.json())
            .then(value => setData(value))
    }, [])
    // console.log("hello", data);
    const array = data.filter(element => element.category_id== id)
    console.log(array.length);
    return (
        <div className='border-2 w-full mx-5 p-2 h-[800px] overflow-y-scroll'>
            <h1 className='text-3xl text-center font-bold mb-3'>Update News Are Comming Soon....</h1>
            <div className=''>
                <h1 className='text-xl font-semibold '>Total News : {
                    id >0 ? array.length : data.length
                    }</h1>
                {
                    id >0? array.map((element, idx) => <News key={element.idx} card={element}></News>)
                    :
                    data.map((element, idx) => <News key={element.idx} card={element}></News>)
                }
            </div>

        </div>
    );
};

const News = ({ card }) => {
    return (
        <>
        {/* <h1>{card.length}</h1> */}
        <div className='card border p-2 my-5 '>
            <div className='bg-gray-200 flex rounded-xl gap-2'>
                <img className='w-10 rounded-full p-1' src={card.author.img} alt="" />
                <div className=''>
                    <p className='font-semibold'>{card.author.name}</p>
                    <p>{card.author.published_date}</p>
                </div>
            </div>
            <div>
                <p className='text-3xl my-2 font-semibold'>{card.title}</p>
                <img className='w-full' src={card.image_url} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita blanditiis deleniti ducimus debitis laudantium quidem aperiam cumque exercitationem possimus. Quisquam eligendi nesciunt tempora ad, ducimus cumque accusantium voluptates facere animi. <Link className='text-orange-500' >Read More</Link></p>
                
                <hr className='border-2 my-2 rounded-xl' />

            </div>
            <div className='flex justify-between text-lg p-1'>
                <p className='flex gap-2'><span><Rating style={{ maxWidth: 150 }} value={card.rating.number} readOnly></Rating></span>{card.rating.number}</p>
                <p>{card.total_view}</p>
            </div>
        </div>
        </>
    )
}

export default Middle;