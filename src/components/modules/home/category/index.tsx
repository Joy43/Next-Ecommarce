import { Button } from '@/components/ui/button'
import CategoryCard from '@/components/ui/core/CategoryCard'
import { getAllCategories } from '@/services/Category'
import { ICategory } from '@/types'
import Link from 'next/link'
const Category = async() => {
    const {data:categories}=await getAllCategories()
  return (
    <div className='container mx-auto my-20'>
      <div className='flex justify-between items-center'>
        <h2 className='font-bold text-lg'>Category</h2>
        <Link href="/products">
        <Button>
            View All
        </Button>
        </Link>
      </div>
      <div className='grid grid-cols-6 gap-4 '>
{
   categories?.slice(0,5).map((category:ICategory, idx:number) => (
        <CategoryCard key={idx} category={category} />
    ))
}
      </div>
    </div>
  )
}

export default Category
