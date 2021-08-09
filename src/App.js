import './App.css';
import Routes from './routes';
import { useEffect, useState } from 'react';
import { addCate, CateDelete, editCate, getAllCate } from './api/categoryAPI';
import { add, edit, getAll, remove } from './api/productAPI';
import { storage } from './firebase';

function App() {
  const[categories , setCategories] = useState([]);
  const[products , setProducts] = useState([]);
  useEffect(() => {
    //call API 
    const getProducts = async () => {
        try{
          const { data } = await getAll();
          console.log(data);
          setProducts(data);
        }catch(error){}
    }
    getProducts()
    //call API
    const getCategories = async () => {
        try{
            const { data } = await getAllCate();
            setCategories(data);
        }catch(error){
          console.log("error" , error);
        }
    }
    getCategories();
  }, []);
  //thêm sản phẩm
  
  const [image , setImage] = useState(null);
  const [url , setUrl] = useState("");
  const[progress , setProgress] = useState(0);

  const addProduct = async (product  ) => {
      const { data  } = await add(product );
      setProducts([
        ...products,
  
        data,
       
      ])

  }
  // edit sản phẩm
  const onEditHandler = async (item) => {
    try {
      const { data } = await edit(item);
      const newProducts = products.map((product) =>
        product.id == item.id ? data : product
      );
      setProducts(newProducts);
    } catch (error) {}
  };
  // Xóa sản phẩm
   const onHandleDelete = async (id) => {
    const { data } = await remove(id);
    // console.log("app.js", id);
    // const data = await response.json();
    const newProducts = products.filter((item) => item.id !== id);
    setProducts(newProducts); 
  };
  // thêm danh mục
  const addCategory = async (category) => {
    const {data} = await addCate(category);
    setCategories([
      ...categories,
      data
    ])
  }
  // edit danh mục
  const editCategory = async (item) => {
    // console.log('App.js' , item);
    try{
      const {data} = await editCate(item);
      const newCategories = categories.map((category) => 
          category.id === item.id ? data : category
      );
      setCategories(newCategories);
      console.log(newCategories);
    }catch(error){} 
  }
  // xóa danh mục 
  const deleteCate = async (id) => {
    const { data } = await CateDelete(id);
    const newCategory = categories.filter((item) => item.id !== id );
    setCategories(newCategory);
  }
  // chi tiet san pham 
  return (
        <Routes
        categories={categories}
        onAdd={addCategory}
        onEdit={editCategory}
        products={products}
        onAddPro={addProduct}
        onEditPro={onEditHandler}
        onDelete={onHandleDelete}
        onDeleteCate={deleteCate}
        />
  );
}

export default App;
