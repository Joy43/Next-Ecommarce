import React, { useState } from 'react'
import { Input } from '../../input';
import Image from 'next/image';

const NEImageUploder = () => {
    
    const [imagePreview,setImagePreview]=useState<string[]>([]);
    const handleImageChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
        const file=event.target.files![0];
        setImageFiles((prev)=>[...prev,file]);
        console.log(event.target.files);
        if(file){
          const reader=new FileReader();
          reader.onloadent=()=>{
            setImagePreview((prev)=>[...prev,reader.result as string]);
          };
          reader.readAsDataURL(file);
          event.target.value="";
        }
    };
  return (
    <div>
      <Input 
      type="file" 
      multiple 
      className='hidden'
      id="image-upload"
      accept='image/*'/>
      <label className='w-full h-36 md:size-36 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-md cursor-pointer text-sm text-gray-500 transition ' htmlFor='image-uploader'>
        Upload Loago
      </label>
    <div>
      {
        imagePreview.map((printPreView, inx) => (
          <Image key={inx} src={printPreView} width={500} height={500} alt='image preview' />
        ))
      }
    </div>

     
    </div>
  )
}

export default NEImageUploder;
