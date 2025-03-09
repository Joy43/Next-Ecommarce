import { ICategory } from "@/types";
import Image from "next/image";

const CategoryCard = ({ category }: { category: ICategory }) => {
  return (
    <div className="bg-gradient-to-br from-white to-slate-100 border border-gray-300 rounded-2xl shadow-md 
    hover:shadow-lg hover:scale-105 transition-all duration-300 text-center p-6 h-48 flex flex-col items-center justify-center">
      <div className="bg-white p-3 rounded-full shadow-md">
        <Image
          src={category?.icon}
          width={80}
          height={80}
          alt="category icon"
          className="w-20 h-20"
        />
      </div>
      <h3 className="text-lg font-semibold text-gray-700 mt-3">{category?.name}</h3>
    </div>
  );
};

export default CategoryCard;
