import React, { useEffect, useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import {  useForm } from "react-hook-form";
import { getCate } from '../../../api/categoryAPI';

const EditCategory = (props) => {
    const { register , handleSubmit ,reset, formState:{errors}} = useForm();
    const { id } = useParams();
    const history = useHistory();
    const [categories , setCategories] = useState({});
    useEffect(() => {
        const getCategory = async () => {
          try {
            const { data } = await getCate(id);
            setCategories(data);
            reset(data);
          } catch (error) {}
        };
        getCategory();
      }, []);
    const onSubmit = (data) => {
        console.log(data);
        const fakevalue = {
            id: id,
            ...data
        }
        console.log(fakevalue);
        props.onEdit(fakevalue);
        history.push('/admin/viewcategory');
    }
    return (
      <div>
        {/* Content Header (Page header) */}
        <section className="content-header ">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Edit sản phẩm</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                    <Link className="text-cusses" to="/admin/viewcategory">Danh mục</Link>/
                  <li className="breadcrumb-item active">Thêm Danh mục</li>
                </ol>
              </div>
            </div>
          </div>{/* /.container-fluid */}
        </section>
        {/* Main content */}
        <section className="content">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <div className="card card-primary">
                <div className="card-header">
                  <h3 className="card-title">Form</h3>
                  <div className="card-tools">
                    <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                      <i className="fas fa-minus" />
                    </button>
                  </div>
                </div>
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="inputName">Tên sản phẩm</label>
                    <input type="text" id="inputName" className="form-control"  
                      defaultValue="{categories.name}"
                     {...register("name", { required: true })}/>
                    {errors.name && <span className="text-danger">Bạn chưa điền tên sản phẩm</span>}
                  </div>
                </div>
                {/* /.card-body */}
              </div>
              {/* /.card */}
            </div>
            <div className="col-md-3"></div>
          </div>
          <div className="row">
            <div className="col-12">
            <Link className="btn btn-secondary" to="/admin/viewcategory">Cancel</Link>
              <input type="submit" defaultValue="Create new Porject" className="btn btn-success float-right" />
            </div>
          </div>
         </form> 
        </section>
        {/* /.content */}
      </div>
    )
}

export default EditCategory
