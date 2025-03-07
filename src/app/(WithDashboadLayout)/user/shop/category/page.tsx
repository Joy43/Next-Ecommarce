import ManageCategory from "@/components/modules/shop/category"
import { getAllCategories } from "@/services/Category"



const ProductCategoryPage = async () => {
  const {data,meta}=await getAllCategories();
  console.log(data);
  return (
    <div>
      <ManageCategory categories={data} />
    </div>
  )
}

export default ProductCategoryPage
