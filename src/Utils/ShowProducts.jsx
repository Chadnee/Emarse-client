export const showProducts = async(products, startingPoint, endingPoint) => {
    //const justForAll = products.filter(product => product.ratings === number);
            const justForLimited = products.slice(startingPoint, endingPoint);
            return justForLimited
}