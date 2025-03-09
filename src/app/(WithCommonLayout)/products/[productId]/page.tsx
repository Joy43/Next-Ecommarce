import ProductBanner from '@/components/modules/products/banner';
import ProductDeatils from '@/components/modules/products/productDetails';
import NMContainer from '@/components/ui/core/NMcontainer';
import { getSingleProduct } from '@/services/Product'
import React from 'react'

const ProductDeatilsPage = async({
    params}
    :{params:Promise<{
        productId:string
    }>}) => {
const {productId}=await params;

        const {data:product}=await getSingleProduct(productId);
   
  return (
    <NMContainer>
      {/* <h1>{(await params).productId}</h1> */}
      <ProductBanner title='Product Deatils' path='Home-Product-Product Details'/>
      {/* ------------- product deatils-------- */}

      <ProductDeatils product={product}/>
    </NMContainer>
  )
}

export default ProductDeatilsPage
