import useProducts from '../../../../hooks/useProducts';
import FlashItems from './FlashItems';

const FlashProduct = () => {
    const [product] = useProducts()

    const flashProductAll = product.filter(product => (product.ratings === 5))
    const flashProduct = flashProductAll.slice(0,5)
    console.log(flashProduct)
   
    return (
        <div className='bg-zinc-300'>
            <p className='text-zinc-900 px-8 py-4 text-start text-2xl uppercase font-serif font-bold'>Flash Sales</p>
            <div className='grid md:grid-cols-5 lg:grid-cols-5 mx-7 mb-14 gap-3 justify-center items-center '>
                {flashProduct.map(product =><FlashItems
                key = {product._id} product = {product}></FlashItems> )}
            </div>
        </div>
    );
};

export default FlashProduct;