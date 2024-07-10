
import { FaArrowRightLong, FaWaveSquare } from 'react-icons/fa6';
import { Link, useLoaderData } from 'react-router-dom';
import useProducts from '../../../../hooks/useProducts';
import { useEffect, useState } from 'react';
import CategoryRawForSmall from './CategoryRawForSmall';

const AllCategory = () => {

    const category = useLoaderData();
    const [searchCategory, setSearchCategory] = useState([])

   //  const handleCategory = () => {
   //    setSearchCategory(category)
   //  }

   //  useEffect(() => {
   //    handleCategory()
   //  }, [category]);

    
    return (
          <div className=' mx-2 shadow-2xl bg-secondary-content'>
             <p className="text-start fixed w-full pt-24 pl-2 shadow-2xl mx-0 bg-secondary-content  font-serif font-bold text-3xl pb-6">Categories</p>
            <div className='flex justify-center'>
                <div className='w-3/12 shadow-2xl top-36 fixed left-2 h-full pl-1 bg-secondary-content text-[10px] text-slate-400 flex flex-col'>
                  <p className='font-bold  mt-2 text-black'>Popular Category</p>
                  <Link to="/categoryRaw/traditionalWear"><p className='pb-1 mt-5'>Traditional wear</p></Link>
                  <Link to = "/categoryRaw/shoes"><p className='pb-1'>Shoes</p></Link>
                  <Link to="/categoryRaw/smartPhone"><p className='pb-1'>Smartphone</p></Link>
                  <Link to="/categoryRaw/camera"><p className='pb-1'>Camera</p></Link>
                  <Link to="/categoryRaw/fruitsMeats&Frozen"><p className='pb-1'>Fruits Meats & Frozen</p></Link>
                  <Link to="/categoryRaw/cookingIngredient"><p className='pb-1'>Cooking Ingredient</p></Link>
                  <Link to="/categoryRaw/laptop"><p className='pb-1'>Laptop</p></Link>
                  <Link to="/categoryRaw/boxing&MartialArts"><p className='pb-1'>Boxing & Martial</p></Link>
                  <Link to="/categoryRaw/skinCare"><p className='pb-1'>Skin care</p></Link>
                  <Link to="/categoryRaw/bath&Body"><p className='pb-1'>Bath & Body</p></Link>
                  <Link to="/categoryRaw/man'sJewellery"><p className='pb-1'>Mans's Jwellery</p></Link>
                  <Link to="/categoryRaw/men'sCare"><p className='pb-1'>Men's care</p></Link>
                  <Link to="/categoryRaw/makeup"><p className='pb-1'>Make up</p></Link>
                  <Link to="/categoryRaw/leatherWatches"><p className='pb-1'>Leather Watches</p></Link>
                  <Link to="/categoryRaw/muslimWear"><p className='pb-1'>Muslim Wear</p></Link>
                  <Link to="/categoryRaw/furniture"><p className='pb-1'>Furniture</p></Link>
                  <Link to="/categoryRaw/media&Music"><p className='pb-1'>Media & Music</p></Link>
                  <Link to="/categoryRaw/sportsShoes&Clothing"><p className='pb-1'>Sports Ingredient</p></Link>
                  <Link to="/categoryRaw/motorbike"><p className='pb-1'>Motorbike</p></Link>
                  <Link to="/categoryRaw/cleaner"><p className='pb-1'>Cleaner</p></Link>
                  <Link to="/categoryRaw/bedding"><p className='pb-1'>Bedding</p></Link>
                </div>
                <div className="w-9/12 grid ml-24 pl-2 mt-40 shadow-2xl bg-secondary-content gap-2  grid-cols-3 md:grid-cols-10 lg:grid-cols-10">
               
                <Link to="/categoryRaw/muslimWear"><div className="border-2 h-28 flex flex-col items-center border-slate-400 p-1">
                   <img className="h-24 w-full" src="https://img.freepik.com/free-photo/man-praying-floor-indoors_23-2148869303.jpg?w=900&t=st=1700934985~exp=1700935585~hmac=4ff50df08c03bd968a4adbd4db7ac636b2b2745bb473b86d0c485fdc1255ebcc" alt="" />
                   <p className="text-center text-[10px]">Muslim Wear</p>
                </div></Link>
                <Link to="/categoryRaw/traditionalWear"><div className="border-2 h-28 flex flex-col items-center border-slate-400 p-1">
                   <img className="h-24 w-full" src="https://img.freepik.com/free-photo/knitting-golden-ribbon-tissue_114579-12290.jpg?w=900&t=st=1700935464~exp=1700936064~hmac=bc717070bb37e02fd5858b47f97b8a372a8d6529102ff2b60de468010f99d00e" alt="" />
                   <p className="text-center text-[10px]">Traditional Wear</p>
                </div></Link>
                <Link to="/categoryRaw/shoes"><div className="border-2 h-28 flex flex-col items-center border-slate-400 p-1">
                   <img className="h-24 w-full" src="https://img.freepik.com/free-photo/ice-coffee-with-whipped-cream_144627-3801.jpg?w=740&t=st=1700936262~exp=1700936862~hmac=79d5d5c83aa80f8e2ca444418f554e9285cc3846a474ed67597a789d3b5b6ad8" alt="" />
                   <p className="text-center text-[10px]">Shoes</p>
                </div></Link>
                <Link to="/categoryRaw/bags"><div className="border-2 h-28 flex flex-col items-center border-slate-400 p-1">
                   <img className="h-24 w-full" src="https://img.freepik.com/free-photo/beautiful-elegance-luxury-fashion-green-handbag_1203-7655.jpg?w=360&t=st=1700936919~exp=1700937519~hmac=67e3a2d8da8d90c89baf76a824474c6025827afac3e95e957e7b3bbf437a0a3c" alt="" />
                   <p className="text-center text-[10px]">Bags</p>
                </div></Link>
                <Link to="/categoryRaw/watches"><div className="border-2 h-28 flex flex-col items-center border-slate-400 p-1">
                   <img className="h-24 w-full" src="https://img.freepik.com/free-vector/smart-watch-realistic-image-black_1284-11873.jpg?w=740&t=st=1700937133~exp=1700937733~hmac=4a272112641cabcd4cea36d147268cd5e7f68dd1a405b9ea9b77754adaf38bf5" alt="" />
                   <p className="text-center text-[10px]">Watch</p>
                </div></Link>
                <Link to="/categoryRaw/smartphone"><div className="border-2 h-28 flex flex-col items-center border-slate-400 p-1">
                   <img className="h-24 w-full" src="https://img.freepik.com/free-psd/shiny-smartphone-mock-up_1310-186.jpg?w=900&t=st=1700937564~exp=1700938164~hmac=43dece452ba2af3841cfbc97d6ea46d11d219558b3db58e1e47002e95cb6f399" alt="" />
                   <p className="text-center text-[10px]">Smartphone</p>
                </div></Link>
                <Link to="/categoryRaw/television"><div className="border-2 h-28 flex flex-col items-center border-slate-400 p-1">
                   <img className="h-24 w-full" src="https://img.freepik.com/free-photo/landscape-nature-scene-tv-appliance-generative-ai_188544-12122.jpg?w=900&t=st=1700937903~exp=1700938503~hmac=4c4bdae66d605abb9da8d2022243c33108f7553f58eaf050036d9db47a3dcb02" alt="" />
                   <p className="text-center text-[10px]">Television</p>
                </div></Link>
                <Link to="/categoryRaw/camera"><div className="border-2 h-28 flex flex-col items-center border-slate-400 p-1">
                   <img className="h-24 w-full" src="https://img.freepik.com/free-photo/camera-equipment-capturing-single-macro-object-generative-ai_188544-12096.jpg?w=740&t=st=1700938059~exp=1700938659~hmac=42ff4df2c45725f96a28c42b49b96704b3bb872f19b234ac64275813b8253e62" alt="" />
                   <p className="text-center text-[10px]">Camera</p>
                </div></Link>
                <Link to="/categoryRaw/laptop"><div className="border-2 h-28 flex flex-col items-center border-slate-400 p-1">
                   <img className="h-24 w-full" src="https://img.freepik.com/free-photo/laptop-with-blank-black-screen-white-table_53876-97915.jpg?w=900&t=st=1700938260~exp=1700938860~hmac=3c74aa76b31ea991b75159bbcc1977c3d5c9c622e19b683d0c17d6bdd597491f" alt="" />
                   <p className="text-center text-[10px]">Laptop</p>
                </div></Link>
                <Link to="/categoryRaw/desktop"><div className="border-2 h-28 flex flex-col items-center border-slate-400 p-1">
                   <img className="h-24 w-full" src="https://img.freepik.com/free-psd/realistic-computer-design_1310-689.jpg?w=900&t=st=1700938457~exp=1700939057~hmac=ed4bf9616969d2ffacd081974ce58f94cf1647fdc435f1a9b42c495ed91ec0c7" alt="" />
                   <p className="text-center text-[10px]">Desktop</p>
                </div></Link>
                <Link to="/categoryRaw/fruitsMeats&Frozen"><div className="border-2 h-28 flex flex-col items-center border-slate-400 p-1">
                   <img className="h-24 w-full" src="https://img.freepik.com/free-photo/frozen-food-table-arrangement_23-2148969451.jpg?w=900&t=st=1700939082~exp=1700939682~hmac=1c5383083e9b24506e9e7f515ec1d2f56f10fc02e2d1c71b74f136c75edc4214" alt="" />
                   <p className="text-center text-[10px]">Fruits Meat & Frozen</p>
                </div></Link>
                <Link to="/categoryRaw/cookingIngredient"><div className="border-2 h-28 flex flex-col items-center border-slate-400 p-1">
                   <img className="h-16 w-full" src="https://img.freepik.com/premium-photo/thai-cooking-ingredients-spices-vegetables-fruits-herbs-seafood-meat_147376-90.jpg?w=360" alt="" />
                   <p className="text-center text-[10px]">Cooking Ingredient</p>
                </div></Link>
                <Link to="/categoryRaw/snacks&Eggs"><div className="border-2 h-28 flex flex-col items-center border-slate-400 p-1">
                   <img className="h-20 w-full" src="https://img.freepik.com/free-photo/fried-crutones-with-fried-eggs-orange-fresh_140725-4670.jpg?w=740&t=st=1700941097~exp=1700941697~hmac=1a9165dca13c67644dfa50ffed809605b27cc819530f90228211e9447d2eac71" alt="" />
                   <p className="text-center text-[10px]">Snacks & Eggs</p>
                </div></Link>
                <Link to="/categoryRaw/laundry&Household"><div className="border-2 h-28 flex flex-col items-center border-slate-400 p-1">
                   <img className="h-24 w-full" src="https://img.freepik.com/free-photo/electric-iron-pile-clothes_93675-131460.jpg?w=900&t=st=1700941397~exp=1700941997~hmac=e6979cbe833ff0906edd4399380c1593c574b564e2d63be786a04757622fd483" alt="" />
                   <p className="text-center text-[10px]">Laundry & Household</p>
                </div></Link>
                <Link to="/categoryRaw/motorbike"><div className="border-2 h-28 flex flex-col items-center border-slate-400 p-1">
                   <img className="h-24 w-full" src="https://img.freepik.com/free-photo/black-motorcycle-white_1398-276.jpg?w=900&t=st=1700958283~exp=1700958883~hmac=d627554ccd65622c834da95d6ec8cb0870daf463f873d354fb343172e49fd5db" alt="" />
                   <p className="text-center text-[10px]">Motorbike</p>
                </div></Link>
                <Link to="/categoryRaw/sportsShoes&Clothing"><div className="border-2 h-28 flex flex-col items-center border-slate-400 p-1">
                   <img className="h-24 w-full" src="https://img.freepik.com/free-photo/sports-clothing-kit-sport-running_1303-1733.jpg?w=900&t=st=1700958547~exp=1700959147~hmac=f30ec2d5b13ce5ee24f892f82e29f28c5449433a696f163dde3af3bbc8776184" alt="" />
                   <p className="text-center text-[10px]">Sports Ingredient</p>
                </div></Link>
                <Link to="/categoryRaw/outdoorSportsIngredient"><div className="border-2 h-28 flex flex-col items-center border-slate-400 p-1">
                   <img className="h-24 w-full" src="https://img.freepik.com/free-photo/ba-sport-workout-kit-sports_1303-1726.jpg?w=900&t=st=1700958721~exp=1700959321~hmac=03e590bb8f91728093d7976ce2030508a25cb7bddaeb98a6bdc989c7aaa72d37" alt="" />
                   <p className="text-center text-[10px]">Outdoor Sports</p>
                </div></Link>
                <Link to="/categoryRaw/boxing&MartialArts"><div className="border-2 h-28 flex flex-col items-center border-slate-400 p-1">
                   <img className="h-20 w-full" src="https://img.freepik.com/free-photo/bright-red-yellow-boxing-glove-professional-sport-equipment-isolated-green-studio-background-concept-sport-activity-movement-healthy-lifestyle-wellbeing-modern-colors_155003-36246.jpg?w=360&t=st=1700959385~exp=1700959985~hmac=b59da3a543fa5259f68cd2e6e2d6aac6063ab86878c72269dc647e2c507c4636" alt="" />
                   <p className="text-center text-[10px]">Boxing and Martial</p>
                </div></Link>
                <Link to="/categoryRaw/furniture"><div className="border-2 h-28 flex flex-col items-center border-slate-400 p-1">
                   <img className="h-24 w-full" src="https://img.freepik.com/free-photo/chic-modern-luxury-aesthetics-style-living-room-gray-tone_53876-132806.jpg?w=900&t=st=1700959578~exp=1700960178~hmac=e12e954f8475c872e23bed1f379d93449df321e2fed58b8b0af7466d2f99e0af" alt="" />
                   <p className="text-center text-[10px]">Furniture</p>
                </div></Link>
                <Link to="/categoryRaw/cleaner"><div className="border-2 h-28 flex flex-col items-center border-slate-400 p-1">
                   <img className="h-24 w-full" src="https://img.freepik.com/free-vector/detergents-clothes-vertical-banner-set_1284-20780.jpg?w=740&t=st=1700959773~exp=1700960373~hmac=164ad8a52ce38b8d3a2966302cc808535b21f0955ea545aadf2f4c88be9131bf" alt="" />
                   <p className="text-center text-[10px]">Cleaner</p>
                </div></Link>
                <Link to="/categoryRaw/bedding"><div className="border-2 h-28 flex flex-col items-center border-slate-400 p-1">
                   <img className="h-24 w-full" src="https://img.freepik.com/free-photo/folded-towels-bed_1203-973.jpg?w=900&t=st=1700959946~exp=1700960546~hmac=40fc99fd67ec6db2ad0d74527c5e06c1a8f3e3fe475b6083b84733b8ed39c79e" alt="" />
                   <p className="text-center text-[10px]">Bedding</p>
                </div></Link>
                <Link to="/categoryRaw/media&Music"><div className="border-2 h-28 flex flex-col items-center border-slate-400 p-1">
                   <img className="h-24 w-full" src="https://img.freepik.com/free-photo/top-view-beautiful-music-concept_23-2148605816.jpg?w=900&t=st=1700960320~exp=1700960920~hmac=b7353fb67d693d596729e195c905e24d4e95882e0ea000bc24110c7a9bb8fe44" alt="" />
                   <p className="text-center text-[10px]">Media & Music</p>
                </div></Link>
                <Link to="/categoryRaw/kidsWatches"><div className="border-2 h-28 flex flex-col items-center border-slate-400 p-1">
                   <img className="h-24 w-full" src="https://img.freepik.com/free-vector/clock-with-sea-creature-template_1308-19722.jpg?w=740&t=st=1700960556~exp=1700961156~hmac=b0e1e5edbd4c2258d94aa22f06ac278ba1282cac96872a86506f649fa774d014" alt="" />
                   <p className="text-center text-[10px]">Kid's watches</p>
                </div></Link>
                <Link to="/categoryRaw/man'sJewellery"><div className="border-2 h-28 flex flex-col items-center border-slate-400 p-1">
                   <img className="h-24 w-full" src="https://img.freepik.com/free-vector/detergents-clothes-vertical-banner-set_1284-20780.jpg?w=740&t=st=1700959773~exp=1700960373~hmac=164ad8a52ce38b8d3a2966302cc808535b21f0955ea545aadf2f4c88be9131bf" alt="" />
                   <p className="text-center text-[10px]">Man's jewellery</p>
                </div></Link>
                <Link to="/categoryRaw/skinCare"><div className="border-2 h-28 flex flex-col items-center border-slate-400 p-1">
                   <img className="h-24 w-full" src="https://img.freepik.com/free-photo/plastic-containers-orange-background_23-2148549135.jpg?w=900&t=st=1700961092~exp=1700961692~hmac=ba4cb7d3a0039571bb1d7dca63f9a72118bd4999d34e8a886215ab7a2c442cbd" alt="" />
                   <p className="text-center text-[10px]">Skin Care</p>
                </div></Link>
                <Link to="/categoryRaw/healthCare"><div className="border-2 h-28 flex flex-col items-center border-slate-400 p-1">
                   <img className="h-24 w-full" src="https://img.freepik.com/free-photo/beauty-product-still-life_23-2147817669.jpg?w=900&t=st=1700961423~exp=1700962023~hmac=1edfd551824422ee460c75baec81b5dff468e36b2ccf35a11333f85f1b443b1e" alt="" />
                   <p className="text-center text-[10px]">Health Care</p>
                </div></Link>
                <Link to="/categoryRaw/hairCare"><div className="border-2 h-28 flex flex-col items-center border-slate-400 p-1">
                   <img className="h-24 w-full" src="https://img.freepik.com/free-photo/front-view-eco-friendly-cleaning-products-with-soap-brush_23-2148818480.jpg?w=900&t=st=1700961568~exp=1700962168~hmac=b95656cdb56eb785be16008b47baec89125195deb49ecc298186e13520690fbf" alt="" />
                   <p className="text-center text-[10px]">Hair Care</p>
                </div></Link>
                <Link to="/categoryRaw/makeup"><div className="border-2 h-28 flex flex-col items-center border-slate-400 p-1">
                   <img className="h-24 w-full" src="https://img.freepik.com/free-photo/collection-beauty-products-with-copy-space_23-2148620110.jpg?w=900&t=st=1700961788~exp=1700962388~hmac=16175825fa50efe92b4960870200a83a6096f2fc88e6a48f73e12debece9d0aa" alt="" />
                   <p className="text-center text-[10px]">Make Up</p>
                </div></Link>
                <Link to="/categoryRaw/men'sCare"><div className="border-2 h-28 flex flex-col items-center border-slate-400 p-1">
                   <img className="h-24 w-full" src="https://img.freepik.com/free-vector/mens-cosmetics-products-line-3d-realistic-vector-advertising-mockup-skincare-cream-shampoo-shaving-foam-lotion-plastic-tube-glass-bottle-illustrations-gradient-background-with-water-bubbles_33099-1256.jpg?w=900&t=st=1700980292~exp=1700980892~hmac=fa26ceb381851bdce9eb349db5e44709c1d35ffc544dfdee5984282825546b5d" alt="" />
                   <p className="text-center text-[10px]">Men's Care</p>
                </div></Link>
                <Link to="/categoryRaw/bath&Body"><div className="border-2 h-28 flex flex-col items-center border-slate-400 p-1">
                   <img className="h-24 w-full" src="https://img.freepik.com/free-photo/natural-elements-spa-with-candles_23-2148199497.jpg?w=900&t=st=1700962018~exp=1700962618~hmac=c98c587000cd31419f65dae329d49298b7be8bb481ddc3f46b925915f13df911" alt="" />
                   <p className="text-center text-[10px]">Bath & Body</p>
                </div></Link>
                <Link to="/categoryRaw/leatherBag"><div className="border-2 h-28 flex flex-col items-center border-slate-400 p-1">
                   <img className="h-24 w-full" src="https://img.freepik.com/free-vector/classic-brown-leather-briefcase_98292-4121.jpg?w=740&t=st=1700962233~exp=1700962833~hmac=ceba8cc1fab21f96d7c7358d6b611af77c9feaab971171fbedacdf9c7c43ad49" alt="" />
                   <p className="text-center text-[10px]">Leather Bag</p>
                </div></Link>
                <Link to="/categoryRaw/leatherWatches"><div className="border-2 h-28 flex flex-col items-center border-slate-400 p-1">
                   <img className="h-24 w-full" src="https://img.freepik.com/free-photo/closeup-belt_53876-33678.jpg?w=900&t=st=1700962450~exp=1700963050~hmac=f1222ea4ed18ce665f2750c5c7972e979993fb50f7af3299edba475c5860ed9a" alt="" />
                   <p className="text-center text-[10px]">Leather Watches</p>
                </div></Link>
                <Link to="/categoryRaw/leatherBelt"><div className="border-2 h-28 flex flex-col items-center border-slate-400 p-1">
                   <img className="h-24 w-full" src="https://img.freepik.com/free-photo/leather-belt_74190-2615.jpg?w=900&t=st=1700962640~exp=1700963240~hmac=a245a1e6759fe267b736c1e6495c846bcc36d35eb2ad6be2b9aa43e27cb86c08" alt="" />
                   <p className="text-center text-[10px]">Leather Belt</p>
                </div></Link>
                <Link to="/categoryRaw/furniture"><div className="border-2 h-28 flex flex-col items-center border-slate-400 p-1">
                   <img className="h-24 w-full" src="https://img.freepik.com/free-photo/chic-modern-luxury-aesthetics-style-living-room-gray-tone_53876-132806.jpg?w=900&t=st=1700959578~exp=1700960178~hmac=e12e954f8475c872e23bed1f379d93449df321e2fed58b8b0af7466d2f99e0af" alt="" />
                   <p className="text-center text-[10px]">Furniture</p>
                </div></Link>
                <Link to="/categoryRaw/laundry&Household"><div className="border-2 h-28 flex flex-col items-center border-slate-400 p-1">
                   <img className="h-24 w-full" src="https://img.freepik.com/free-photo/electric-iron-pile-clothes_93675-131460.jpg?w=900&t=st=1700941397~exp=1700941997~hmac=e6979cbe833ff0906edd4399380c1593c574b564e2d63be786a04757622fd483" alt="" />
                   <p className="text-center text-[10px]">Laundry & Household</p>
                </div></Link>
                <Link to="/categoryRaw/motorbike"><div className="border-2 h-28 flex flex-col items-center border-slate-400 p-1">
                   <img className="h-24 w-full" src="https://img.freepik.com/free-photo/black-motorcycle-white_1398-276.jpg?w=900&t=st=1700958283~exp=1700958883~hmac=d627554ccd65622c834da95d6ec8cb0870daf463f873d354fb343172e49fd5db" alt="" />
                   <p className="text-center text-[10px]">Motorbike</p>
                </div></Link>
             </div>
            </div>
          </div>
      //   <div className='my-10 mx-7'>
      //    <p className="text-start font-serif font-bold text-3xl py-2">Category Index</p>
      //      <div className='mb-16 grid grid-cols-6 gap-3  text-sm'>
      //          <span className='rounded-full   text-center px-4 mr-2 py-2 bg-white border border-slate-400'>Tradional wear</span>
      //          <span className='rounded-full  text-center px-4 mr-2 py-2 bg-white border border-slate-400'>Muslim wear</span>
      //          <span className='rounded-full  text-center px-4 mr-2 py-2 bg-white border border-slate-400'>Shoes</span>
      //          <span className='rounded-full  text-center px-4 mr-2 py-2 bg-white border border-slate-400'>Bags</span>
      //          <span className='rounded-full  text-center px-4 mr-2 py-2 bg-white border border-slate-400'>Watches</span>
      //          <span className='rounded-full  text-center px-4 mr-2 py-2 bg-white border border-slate-400'>Smartphone</span>
      //          <span className='rounded-full  text-center px-4 mr-2 py-2 bg-white border border-slate-400'>Television</span>
      //          <span className='rounded-full  text-center px-4 mr-2 py-2 bg-white border border-slate-400'>Camera</span>
      //          <span className='rounded-full  text-center px-4 mr-2 py-2 bg-white border border-slate-400'>Laptop</span>
      //          <span className='rounded-full   text-center px-4 mr-2 py-2 bg-white border border-slate-400'>Desktop</span>
      //          <span className='rounded-full  text-center px-4 mr-2 py-2 bg-white border border-slate-400'>Fruits meat & Frozen</span>
      //          <span className='rounded-full  text-center px-4 mr-2 py-2 bg-white border border-slate-400'>Cooking Ingredient</span>
      //          <span className='rounded-full  text-center px-4 mr-2 py-2 bg-white border border-slate-400'>Motorbikes</span>
      //          <span className='rounded-full  text-center px-4 mr-2 py-2 bg-white border border-slate-400'>Snacks & Eggs</span>
      //          <span className='rounded-full  text-center px-4 mr-2 py-2 bg-white border border-slate-400'>Laundry & household</span>
      //          <span className='rounded-full  text-center px-4 mr-2 py-2 bg-white border border-slate-400'>Sports Ingredient</span>
      //          <span className='rounded-full  text-center px-4 mr-2 py-2 bg-white border border-slate-400'>Outdoor sports</span>
      //          <span className='rounded-full  text-center px-4 mr-2 py-2 bg-white border border-slate-400'>Boxing & Martial Arts</span>
      //          <span className='rounded-full   text-center px-4 mr-2 py-2 bg-white border border-slate-400'>Furniture</span>
      //          <span className='rounded-full  text-center px-4 mr-2 py-2 bg-white border border-slate-400'>Fruits meat & Frozen</span>
      //          <span className='rounded-full  text-center px-4 mr-2 py-2 bg-white border border-slate-400'>Cooking Ingredient</span>
      //          <span className='rounded-full  text-center px-4 mr-2 py-2 bg-white border border-slate-400'>Motorbikes</span>
      //          <span className='rounded-full  text-center px-4 mr-2 py-2 bg-white border border-slate-400'>Snacks & Eggs</span>
      //          <span className='rounded-full  text-center px-4 mr-2 py-2 bg-white border border-slate-400'>Laundry & household</span>
      //          <span className='rounded-full  text-center px-4 mr-2 py-2 bg-white border border-slate-400'>Sports Ingredient</span>
      //          <span className='rounded-full  text-center px-4 mr-2 py-2 bg-white border border-slate-400'>Outdoor sports</span>
      //          <span className='rounded-full  text-center px-4 mr-2 py-2 bg-white border border-slate-400'>Boxing & Martial Arts</span>
               
      //      </div>
      //       <div>
      //       <p className="text-start font-serif font-bold text-3xl py-2">Purchase by categories</p>
            // <div className="grid  bg-base-100  grid-cols-1 md:grid-cols-5 lg:grid-cols-4">
            //     <Link to="/categoryItem/muslimWear"><div className="border-2 border-l-0 border-t-0 shadow-2xl h-60 flex flex-col items-center border-slate-400 p-2">
            //        <img className="h-40 w-full" src="https://img.freepik.com/free-photo/man-praying-floor-indoors_23-2148869303.jpg?w=900&t=st=1700934985~exp=1700935585~hmac=4ff50df08c03bd968a4adbd4db7ac636b2b2745bb473b86d0c485fdc1255ebcc" alt="" />
            //        <p className="text-center">Muslim Wear</p>
            //     </div></Link>
            //     <Link to="/categoryItem/traditionalWear"><div className="border-2 border-l-0 border-t-0 shadow-2xl h-60 flex flex-col items-center border-slate-400 p-2">
            //        <img className="h-40 w-full" src="https://img.freepik.com/free-photo/knitting-golden-ribbon-tissue_114579-12290.jpg?w=900&t=st=1700935464~exp=1700936064~hmac=bc717070bb37e02fd5858b47f97b8a372a8d6529102ff2b60de468010f99d00e" alt="" />
            //        <p className="text-center">Traditional Wear</p>
            //     </div></Link>
            //     <Link to="/categoryItem/shoes"><div className="border-2 border-l-0 border-t-0 shadow-2xl h-60 flex flex-col items-center border-slate-400 p-2">
            //        <img className="h-40 w-full" src="https://img.freepik.com/free-photo/ice-coffee-with-whipped-cream_144627-3801.jpg?w=740&t=st=1700936262~exp=1700936862~hmac=79d5d5c83aa80f8e2ca444418f554e9285cc3846a474ed67597a789d3b5b6ad8" alt="" />
            //        <p className="text-center">Shoes</p>
            //     </div></Link>
            //     <Link to="/categoryItem/bags"><div className="border-2 border-l-0 border-t-0 shadow-2xl h-60 flex flex-col items-center border-slate-400 p-2">
            //        <img className="h-40 w-full" src="https://img.freepik.com/free-photo/beautiful-elegance-luxury-fashion-green-handbag_1203-7655.jpg?w=360&t=st=1700936919~exp=1700937519~hmac=67e3a2d8da8d90c89baf76a824474c6025827afac3e95e957e7b3bbf437a0a3c" alt="" />
            //        <p className="text-center">Bags</p>
            //     </div></Link>
            //     <Link to="/categoryItem/watches"><div className="border-2 border-l-0 border-t-0 shadow-2xl h-60 flex flex-col items-center border-slate-400 p-2">
            //        <img className="h-40 w-full" src="https://img.freepik.com/free-vector/smart-watch-realistic-image-black_1284-11873.jpg?w=740&t=st=1700937133~exp=1700937733~hmac=4a272112641cabcd4cea36d147268cd5e7f68dd1a405b9ea9b77754adaf38bf5" alt="" />
            //        <p className="text-center">Watch</p>
            //     </div></Link>
            //     <Link to="/categoryItem/smartphone"><div className="border-2 border-l-0 border-t-0 shadow-2xl h-60 flex flex-col items-center border-slate-400 p-2">
            //        <img className="h-40 w-full" src="https://img.freepik.com/free-psd/shiny-smartphone-mock-up_1310-186.jpg?w=900&t=st=1700937564~exp=1700938164~hmac=43dece452ba2af3841cfbc97d6ea46d11d219558b3db58e1e47002e95cb6f399" alt="" />
            //        <p className="text-center">Smartphone</p>
            //     </div></Link>
            //     <Link to="/categoryItem/television"><div className="border-2 border-l-0 border-t-0 shadow-2xl h-60 flex flex-col items-center border-slate-400 p-2">
            //        <img className="h-40 w-full" src="https://img.freepik.com/free-photo/landscape-nature-scene-tv-appliance-generative-ai_188544-12122.jpg?w=900&t=st=1700937903~exp=1700938503~hmac=4c4bdae66d605abb9da8d2022243c33108f7553f58eaf050036d9db47a3dcb02" alt="" />
            //        <p className="text-center">Television</p>
            //     </div></Link>
            //     <Link to="/categoryItem/camera"><div className="border-2 border-l-0 border-t-0 shadow-2xl h-60 flex flex-col items-center border-slate-400 p-2">
            //        <img className="h-40 w-full" src="https://img.freepik.com/free-photo/camera-equipment-capturing-single-macro-object-generative-ai_188544-12096.jpg?w=740&t=st=1700938059~exp=1700938659~hmac=42ff4df2c45725f96a28c42b49b96704b3bb872f19b234ac64275813b8253e62" alt="" />
            //        <p className="text-center">Camera</p>
            //     </div></Link>
            //     <Link to="/categoryItem/laptop"><div className="border-2 border-l-0 border-t-0 shadow-2xl h-60 flex flex-col items-center border-slate-400 p-2">
            //        <img className="h-40 w-full" src="https://img.freepik.com/free-photo/laptop-with-blank-black-screen-white-table_53876-97915.jpg?w=900&t=st=1700938260~exp=1700938860~hmac=3c74aa76b31ea991b75159bbcc1977c3d5c9c622e19b683d0c17d6bdd597491f" alt="" />
            //        <p className="text-center">Laptop</p>
            //     </div></Link>
            //     <Link to="/categoryItem/desktop"><div className="border-2 border-l-0 border-t-0 shadow-2xl h-60 flex flex-col items-center border-slate-400 p-2">
            //        <img className="h-40 w-full" src="https://img.freepik.com/free-psd/realistic-computer-design_1310-689.jpg?w=900&t=st=1700938457~exp=1700939057~hmac=ed4bf9616969d2ffacd081974ce58f94cf1647fdc435f1a9b42c495ed91ec0c7" alt="" />
            //        <p className="text-center">Desktop</p>
            //     </div></Link>
            //     <Link to="/categoryItem/fruitsMeats&Frozen"><div className="border-2 border-l-0 border-t-0 shadow-2xl h-60 flex flex-col items-center border-slate-400 p-2">
            //        <img className="h-40 w-full" src="https://img.freepik.com/free-photo/frozen-food-table-arrangement_23-2148969451.jpg?w=900&t=st=1700939082~exp=1700939682~hmac=1c5383083e9b24506e9e7f515ec1d2f56f10fc02e2d1c71b74f136c75edc4214" alt="" />
            //        <p className="text-center">Fruits Meat & Frozen</p>
            //     </div></Link>
            //     <Link to="/categoryItem/cookingIngredient"><div className="border-2 border-l-0 border-t-0 shadow-2xl h-60 flex flex-col items-center border-slate-400 p-2">
            //        <img className="h-40 w-full" src="https://img.freepik.com/premium-photo/thai-cooking-ingredients-spices-vegetables-fruits-herbs-seafood-meat_147376-90.jpg?w=360" alt="" />
            //        <p className="text-center">Cooking Ingredient</p>
            //     </div></Link>
            //     <Link to="/categoryItem/snacks&Eggs"><div className="border-2 border-l-0 border-t-0 shadow-2xl h-60 flex flex-col items-center border-slate-400 p-2">
            //        <img className="h-40 w-full" src="https://img.freepik.com/free-photo/fried-crutones-with-fried-eggs-orange-fresh_140725-4670.jpg?w=740&t=st=1700941097~exp=1700941697~hmac=1a9165dca13c67644dfa50ffed809605b27cc819530f90228211e9447d2eac71" alt="" />
            //        <p className="text-center">Snacks & Eggs</p>
            //     </div></Link>
            //     <Link to="/categoryItem/laundry&Household"><div className="border-2 border-l-0 border-t-0 shadow-2xl h-60 flex flex-col items-center border-slate-400 p-2">
            //        <img className="h-40 w-full" src="https://img.freepik.com/free-photo/electric-iron-pile-clothes_93675-131460.jpg?w=900&t=st=1700941397~exp=1700941997~hmac=e6979cbe833ff0906edd4399380c1593c574b564e2d63be786a04757622fd483" alt="" />
            //        <p className="text-center">Laundry & Household</p>
            //     </div></Link>
            //     <Link to="/categoryItem/motorbike"><div className="border-2 border-l-0 border-t-0 shadow-2xl h-60 flex flex-col items-center border-slate-400 p-2">
            //        <img className="h-40 w-full" src="https://img.freepik.com/free-photo/black-motorcycle-white_1398-276.jpg?w=900&t=st=1700958283~exp=1700958883~hmac=d627554ccd65622c834da95d6ec8cb0870daf463f873d354fb343172e49fd5db" alt="" />
            //        <p className="text-center">Motorbike</p>
            //     </div></Link>
            //     <Link to="/categoryItem/sportsShoes&Clothing"><div className="border-2 border-l-0 border-t-0 shadow-2xl h-60 flex flex-col items-center border-slate-400 p-2">
            //        <img className="h-40 w-full" src="https://img.freepik.com/free-photo/sports-clothing-kit-sport-running_1303-1733.jpg?w=900&t=st=1700958547~exp=1700959147~hmac=f30ec2d5b13ce5ee24f892f82e29f28c5449433a696f163dde3af3bbc8776184" alt="" />
            //        <p className="text-center">Sports Ingredient</p>
            //     </div></Link>
            //     <Link to="/categoryItem/outdoorSportsIngredient"><div className="border-2 border-l-0 border-t-0 shadow-2xl h-60 flex flex-col items-center border-slate-400 p-2">
            //        <img className="h-40 w-full" src="https://img.freepik.com/free-photo/ba-sport-workout-kit-sports_1303-1726.jpg?w=900&t=st=1700958721~exp=1700959321~hmac=03e590bb8f91728093d7976ce2030508a25cb7bddaeb98a6bdc989c7aaa72d37" alt="" />
            //        <p className="text-center">Outdoor Sports</p>
            //     </div></Link>
            //     <Link to="/categoryItem/boxing&MartialArts"><div className="border-2 border-l-0 border-t-0 shadow-2xl h-60 flex flex-col items-center border-slate-400 p-2">
            //        <img className="h-40 w-full" src="https://img.freepik.com/free-photo/bright-red-yellow-boxing-glove-professional-sport-equipment-isolated-green-studio-background-concept-sport-activity-movement-healthy-lifestyle-wellbeing-modern-colors_155003-36246.jpg?w=360&t=st=1700959385~exp=1700959985~hmac=b59da3a543fa5259f68cd2e6e2d6aac6063ab86878c72269dc647e2c507c4636" alt="" />
            //        <p className="text-center">Boxing and Martial</p>
            //     </div></Link>
            //     <Link to="/categoryItem/furniture"><div className="border-2 border-l-0 border-t-0 shadow-2xl h-60 flex flex-col items-center border-slate-400 p-2">
            //        <img className="h-40 w-full" src="https://img.freepik.com/free-photo/chic-modern-luxury-aesthetics-style-living-room-gray-tone_53876-132806.jpg?w=900&t=st=1700959578~exp=1700960178~hmac=e12e954f8475c872e23bed1f379d93449df321e2fed58b8b0af7466d2f99e0af" alt="" />
            //        <p className="text-center">Furniture</p>
            //     </div></Link>
            //     <Link to="/categoryItem/cleaner"><div className="border-2 border-l-0 border-t-0 shadow-2xl h-60 flex flex-col items-center border-slate-400 p-2">
            //        <img className="h-40 w-full" src="https://img.freepik.com/free-vector/detergents-clothes-vertical-banner-set_1284-20780.jpg?w=740&t=st=1700959773~exp=1700960373~hmac=164ad8a52ce38b8d3a2966302cc808535b21f0955ea545aadf2f4c88be9131bf" alt="" />
            //        <p className="text-center">Cleaner</p>
            //     </div></Link>
            //     <Link to="/categoryItem/bedding"><div className="border-2 border-l-0 border-t-0 shadow-2xl h-60 flex flex-col items-center border-slate-400 p-2">
            //        <img className="h-40 w-full" src="https://img.freepik.com/free-photo/folded-towels-bed_1203-973.jpg?w=900&t=st=1700959946~exp=1700960546~hmac=40fc99fd67ec6db2ad0d74527c5e06c1a8f3e3fe475b6083b84733b8ed39c79e" alt="" />
            //        <p className="text-center">Bedding</p>
            //     </div></Link>
            //     <Link to="/categoryItem/media&Music"><div className="border-2 border-l-0 border-t-0 shadow-2xl h-60 flex flex-col items-center border-slate-400 p-2">
            //        <img className="h-40 w-full" src="https://img.freepik.com/free-photo/top-view-beautiful-music-concept_23-2148605816.jpg?w=900&t=st=1700960320~exp=1700960920~hmac=b7353fb67d693d596729e195c905e24d4e95882e0ea000bc24110c7a9bb8fe44" alt="" />
            //        <p className="text-center">Media & Music</p>
            //     </div></Link>
            //     <Link to="/categoryItem/kidsWatches"><div className="border-2 border-l-0 border-t-0 shadow-2xl h-60 flex flex-col items-center border-slate-400 p-2">
            //        <img className="h-40 w-full" src="https://img.freepik.com/free-vector/clock-with-sea-creature-template_1308-19722.jpg?w=740&t=st=1700960556~exp=1700961156~hmac=b0e1e5edbd4c2258d94aa22f06ac278ba1282cac96872a86506f649fa774d014" alt="" />
            //        <p className="text-center">Kid's watches</p>
            //     </div></Link>
            //     <Link to="/categoryItem/man'sJewellery"><div className="border-2 border-l-0 border-t-0 shadow-2xl h-60 flex flex-col items-center border-slate-400 p-2">
            //        <img className="h-40 w-full" src="https://img.freepik.com/free-vector/detergents-clothes-vertical-banner-set_1284-20780.jpg?w=740&t=st=1700959773~exp=1700960373~hmac=164ad8a52ce38b8d3a2966302cc808535b21f0955ea545aadf2f4c88be9131bf" alt="" />
            //        <p className="text-center">Man's jewellery</p>
            //     </div></Link>
            //     <Link to="/categoryItem/skinCare"><div className="border-2 border-l-0 border-t-0 shadow-2xl h-60 flex flex-col items-center border-slate-400 p-2">
            //        <img className="h-40 w-full" src="https://img.freepik.com/free-photo/plastic-containers-orange-background_23-2148549135.jpg?w=900&t=st=1700961092~exp=1700961692~hmac=ba4cb7d3a0039571bb1d7dca63f9a72118bd4999d34e8a886215ab7a2c442cbd" alt="" />
            //        <p className="text-center">Skin Care</p>
            //     </div></Link>
            //     <Link to="/categoryItem/healthCare"><div className="border-2 border-l-0 border-t-0 shadow-2xl h-60 flex flex-col items-center border-slate-400 p-2">
            //        <img className="h-40 w-full" src="https://img.freepik.com/free-photo/beauty-product-still-life_23-2147817669.jpg?w=900&t=st=1700961423~exp=1700962023~hmac=1edfd551824422ee460c75baec81b5dff468e36b2ccf35a11333f85f1b443b1e" alt="" />
            //        <p className="text-center">Health Care</p>
            //     </div></Link>
            //     <Link to="/categoryItem/hairCare"><div className="border-2 border-l-0 border-t-0 shadow-2xl h-60 flex flex-col items-center border-slate-400 p-2">
            //        <img className="h-40 w-full" src="https://img.freepik.com/free-photo/front-view-eco-friendly-cleaning-products-with-soap-brush_23-2148818480.jpg?w=900&t=st=1700961568~exp=1700962168~hmac=b95656cdb56eb785be16008b47baec89125195deb49ecc298186e13520690fbf" alt="" />
            //        <p className="text-center">Hair Care</p>
            //     </div></Link>
            //     <Link to="/categoryItem/makeup"><div className="border-2 h-60 flex flex-col items-center border-slate-400 p-2">
            //        <img className="h-40 w-full" src="https://img.freepik.com/free-photo/collection-beauty-products-with-copy-space_23-2148620110.jpg?w=900&t=st=1700961788~exp=1700962388~hmac=16175825fa50efe92b4960870200a83a6096f2fc88e6a48f73e12debece9d0aa" alt="" />
            //        <p className="text-center">Make Up</p>
            //     </div></Link>
            //     <Link to="/categoryItem/men'sCare"><div className="border-2 border-l-0 border-t-0 shadow-2xl h-60 flex flex-col items-center border-slate-400 p-2">
            //        <img className="h-40 w-full" src="https://img.freepik.com/free-vector/mens-cosmetics-products-line-3d-realistic-vector-advertising-mockup-skincare-cream-shampoo-shaving-foam-lotion-plastic-tube-glass-bottle-illustrations-gradient-background-with-water-bubbles_33099-1256.jpg?w=900&t=st=1700980292~exp=1700980892~hmac=fa26ceb381851bdce9eb349db5e44709c1d35ffc544dfdee5984282825546b5d" alt="" />
            //        <p className="text-center">Men's Care</p>
            //     </div></Link>
            //     <Link to="/categoryItem/bath&Body"><div className="border-2 border-l-0 border-t-0 shadow-2xl h-60 flex flex-col items-center border-slate-400 p-2">
            //        <img className="h-40 w-full" src="https://img.freepik.com/free-photo/natural-elements-spa-with-candles_23-2148199497.jpg?w=900&t=st=1700962018~exp=1700962618~hmac=c98c587000cd31419f65dae329d49298b7be8bb481ddc3f46b925915f13df911" alt="" />
            //        <p className="text-center">Bath & Body</p>
            //     </div></Link>
            //     <Link to="/categoryItem/leatherBag"><div className="border-2 border-l-0 border-t-0 shadow-2xl h-60 flex flex-col items-center border-slate-400 p-2">
            //        <img className="h-40 w-full" src="https://img.freepik.com/free-vector/classic-brown-leather-briefcase_98292-4121.jpg?w=740&t=st=1700962233~exp=1700962833~hmac=ceba8cc1fab21f96d7c7358d6b611af77c9feaab971171fbedacdf9c7c43ad49" alt="" />
            //        <p className="text-center">Leather Bag</p>
            //     </div></Link>
            //     <Link to="/categoryItem/leatherWatches"><div className="border-2 border-l-0 border-t-0 shadow-2xl h-60 flex flex-col items-center border-slate-400 p-2">
            //        <img className="h-40 w-full" src="https://img.freepik.com/free-photo/closeup-belt_53876-33678.jpg?w=900&t=st=1700962450~exp=1700963050~hmac=f1222ea4ed18ce665f2750c5c7972e979993fb50f7af3299edba475c5860ed9a" alt="" />
            //        <p className="text-center">Leather Watches</p>
            //     </div></Link>
            //     <Link to="/categoryItem/leatherBelt"><div className="border-2 border-l-0 border-t-0 shadow-2xl h-60 flex flex-col items-center border-slate-400 p-2">
            //        <img className="h-40 w-full" src="https://img.freepik.com/free-photo/leather-belt_74190-2615.jpg?w=900&t=st=1700962640~exp=1700963240~hmac=a245a1e6759fe267b736c1e6495c846bcc36d35eb2ad6be2b9aa43e27cb86c08" alt="" />
            //        <p className="text-center">Leather Belt</p>
            //     </div></Link>
            //  </div>
      //       </div>
      //   </div>
    );
};

export default AllCategory;