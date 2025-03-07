import { Button } from "@/components/ui/button"
import CreateCategoryModal from "./CreateCategoryModal"



const ManageCategory = () => {
  return (
    <div className="flex max-auto justify-between"> 
    <h1 className="font-semibold touch-pan-up">Manage category</h1>
   <CreateCategoryModal/>
    </div>
  )
}

export default ManageCategory
