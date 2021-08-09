import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const ViewProduct = ({categories,products , onDelete}) => {
    return (
        <div>
        {/* Content Header (Page header) */}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Projects</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item active">Projects</li>
                </ol>
              </div>
            </div>
          </div>{/* /.container-fluid */}
        </section>
        {/* Main content */}
        <section className="content">
          {/* Default box */}
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Projects</h3>
              <div className="card-tools">
                <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                  <i className="fas fa-minus" />
                </button>
                <button type="button" className="btn btn-tool" data-card-widget="remove" title="Remove">
                  <i className="fas fa-times" />
                </button>
              </div>
            </div>
            <div className="card-body p-0">
              <table className="table table-striped projects">
                <thead>
                  <tr>
                    <th style={{width: '1%'}}>
                      STT
                    </th>
                    <th style={{width: '10%'}}>
                      Tên Sản phẩm
                    </th>
                    <th style={{width: '15%'}}>
                      Ảnh
                    </th>
                    <th style={{width: '10%'}}>
                      Giá
                    </th>
                    <th style={{width: '25%'}}>
                      Mô tả
                    </th>
                    <th style={{width: '8%'}} >
                      Danh mục
                    </th>
                    <th style={{width: '8%'}} className="text-center">
                      Status
                    </th>
                    <th className="project-actions text-right" style={{width: '20%'}}>
                    <Link className="btn btn-primary btn-sm" to="/admin/viewproduct/add">
                        <i className="fas fa-folder">
                        </i>
                        Thêm Sản phẩm
                      </Link>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product , index) =>( 
                  <tr key={index}>
                    
                    <td>
                      {index}
                    </td>
                    <td>{product.name}</td>
                    <td>
                      <img width="100" src={product.image}/>
                    </td>
                    <td>{product.price}</td>
                    <td>{product.desc}</td>
                    <td>{product.cate_id}</td>
                    <td className="project-state">
                      {product.status == true ? (<span className="badge badge-success">Còn Hàng</span>)
                       : (<span className="badge badge-danger">Hết Hàng</span>) }
                      
                    </td>
                    <td className="project-actions text-right">
                    
                      <Link className="btn btn-info btn-sm-1" to={`/admin/viewproduct/${product.id}/edit`}>
                        <i className="fas fa-pencil-alt">
                        </i>
                        Edit
                      </Link>

                      <Link className="btn btn-danger btn-sm-1" onClick = { () => onDelete(product.id)}>
                          <i className="fas fa-trash">
                          </i>
                          Delete
                    </Link>
                    </td>
                  </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* /.card-body */}
          </div>
          {/* /.card */}
        </section>
        {/* /.content */}
      </div>
    )
}

export default ViewProduct
