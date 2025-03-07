import ManageProducts from "@/components/modules/shop/product";


const ManageProductsPage = async () => {
  const { data, meta } = await getAllProducts();
  return (
    <div>
      <ManageProducts products={data} />
    </div>
  );
};

export default ManageProductsPage;