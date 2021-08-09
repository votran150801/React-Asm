import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams, useHistory } from "react-router-dom";
import { getPro } from "../../../api/productAPI";
import { storage } from "../../../firebase";

const EditProduct = (props) => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const history = useHistory();

  // call API
  useEffect(() => {
    const getProduct = async () => {
      try {
        const { data } = await getPro(id);
        setProduct(data);
        reset(data);
      } catch (error) {}
    };
    getProduct();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const onHandleSubmit = (data) => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            setUrl(url);
            const fakeValue = {
              id: id,
              ...data,
              image: url,
            };

            console.log(fakeValue);
            props.onEditPro(fakeValue);
            history.push("/admin/viewproduct");
          });
      }
    );
  };
  return (
    <div>
    {/* Content Header (Page header) */}
    <section className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1>Project Add</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item active">Project Add</li>
            </ol>
          </div>
        </div>
      </div>
      {/* /.container-fluid */}
    </section>
    {/* Main content */}
    <section className="content">
      <form onSubmit={handleSubmit(onHandleSubmit)}>
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div className="card card-primary">
              <div className="card-header">
                <h3 className="card-title">Thêm sản phẩm</h3>
                <div className="card-tools">
                  <button
                    type="button"
                    className="btn btn-tool"
                    data-card-widget="collapse"
                    title="Collapse"
                  >
                    <i className="fas fa-minus" />
                  </button>
                </div>
              </div>
              <div className="card-body">
                <div className="form-group">
                  <label htmlFor="inputName">Tên sản phẩm</label>
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    {...register("name", { required: true })}
                  />
                  {errors.name && (
                    <span className="text-danger">
                      Bạn chưa nhập tên sản phẩm
                    </span>
                  )}
                </div>
                <div className="form-group">
                  <progress value={progress} max="100" />
                  <label htmlFor="inputName">ảnh</label>
                  <input type="file" name="image" id="file" onChange={handleChange}
                    />
                  <img src={ url || "http://via.placehoder.com/300x400" } alt="firebase-image" />
                  
                </div>
                
                <div className="form-group">
                  <label htmlFor="inputName">Giá</label>
                  <input
                    type="number"
                    id="price"
                    className="form-control"
                    {...register("price", { required: true })}
                  />
                  {errors.price && (
                    <span className="text-danger">
                      Bạn chưa nhập giá sản phẩm
                    </span>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="inputDescription">Mô tả</label>
                  <textarea
                    id="desc"
                    className="form-control"
                    rows={4}
                    defaultValue={""}
                    {...register("desc", { required: true })}
                  />
                  {errors.desc && (
                    <span className="text-danger">
                      Bạn chưa nhập mô tả sản phẩm
                    </span>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="inputStatus">Danh mục</label>
                  <select
                    id="inputStatus"
                    className="form-control custom-select"
                    {...register("CategoryProduct")}
                  >
                    <option value="" selected disabled>
                      Select one
                    </option>
                    {props.categories.map((category) => {
                      return (
                        <option value={`${category.id}`}>
                          {category.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
               
                <div className="form-group">
                  <label htmlFor="inputStatus">Status</label>
                  <select
                    id="inputStatus"
                    className="form-control custom-select"
                    {...register("status")}
                  >
                    <option value="" selected disabled>
                      Select one
                    </option>
                    <option value="true">Còn Hàng</option>
                    <option value="false">Hết Hàng</option>
                  </select>
                </div>
              </div>
              {/* /.card-body */}
            </div>
            {/* /.card */}
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <a href="#" className="btn btn-secondary">
              Cancel
            </a>
            <input
              type="submit"
              defaultValue="Create new Porject"
              className="btn btn-success float-right"
            />
          </div>
        </div>
      </form>
    </section>
  </div>
  );
};
export default EditProduct;
