import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const ViewCategory = ({categories , onDeleteCate}) => {
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
                    <th style={{width: '20%'}}>
                      STT
                    </th>
                    <th style={{width: '20%'}}>
                      Tên Danh mục
                    </th>   
                    <th className="project-actions text-center">
                    <Link className="btn btn-primary btn-sm" to="/admin/viewcategory/add">
                        <i className="fas fa-folder">
                        </i>
                        Thêm Danh mục
                      </Link></th>      
                  </tr>
                </thead>
                <tbody>
                {categories.map((category,index) => (       
                  <tr key={index} >
                    <td>{index}</td>    
                    <td>{category.name}</td>
                    <td className="project-actions text-center">
                      <Link className="btn btn-info ms-1" to={`viewcategory/${category.id}/edit`}>
                        <i className="fas fa-pencil-alt">
                        </i>
                        Edit
                      </Link>
                      <Link className="btn btn-danger btn-sm-1" onClick = { () => onDeleteCate(category.id)} >
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

export default ViewCategory
