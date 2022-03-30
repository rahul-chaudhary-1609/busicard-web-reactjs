import * as React from "react";
import { useHistory } from "react-router-dom";
import PathTrackUI from "../utils/pathTrackUI";
import { useSelector} from "react-redux";
import { apiGetWithQueryRequest } from "../../api";
import { apiConstants, toastType } from "../../constants";
import CustomErrorHandler from "../utils/customErrorHandler";
import {ActionModal, DeleteModal, UploadPictureModal} from "./actionModal";
import CustomToast from "../utils/customToast";


const UserManagement=()=>{
    const store=useSelector(store=>store.authReducer);
    const history=useHistory();
    let paths=["Home","User Management"]
    

    if(!store.isAuth){
        history.push("/home")
    }

    let [search,setSearch]=React.useState("");
    let [employeeList, setEmployeeList]=React.useState([]);
    let [openActionModal, setOpenActionModal]=React.useState(false);
    let [openDeleteModal, setOpenDeleteModal]=React.useState(false);
    let [openUploadModal, setOpenUploadModal]=React.useState(false);
    
    const [info,setInfo]=React.useState({
        show:0,
        message:"",
        type:toastType.info
    })

    let [selectedEmployee,setSelectedEmployee]=React.useState(null);

    React.useEffect(()=>{
        let nav=document.getElementById("main-nav-id");
        nav.classList.add('bg-color-blue')
        return ()=>{
            nav.classList.remove('bg-color-blue')
        }
    })

    const getEmployeeList=()=>{
        let data={
            endPoint:apiConstants.getEmployee,
            query:{
                searchKey:search
            }
        }

        if(search.trim()===""){
            delete data.query.searchKey
        }


        apiGetWithQueryRequest(store.user.token,data)
        .then((response)=>{
            setEmployeeList(response.body.data.rows)
        })
        .catch((error)=>{
            CustomErrorHandler(error,history);
        })
    }

    React.useEffect(()=>{
        getEmployeeList();
    },[search])

    const handleActionModal=()=>{
        setOpenActionModal(!openActionModal)
    }

    const handleAddEditEmployee=(employee=null)=>{
        setSelectedEmployee(employee)
        handleActionModal();
    }

    const handleDeleteModal=()=>{
        setOpenDeleteModal(!openDeleteModal)
    }

    const handleDeleteEmployee=(employee)=>{
        setSelectedEmployee(employee)
        handleDeleteModal();
    }

    const handleUploadModal=()=>{
        setOpenUploadModal(!openUploadModal)
    }

    const handleUploadPicture=()=>{
        handleUploadModal();
    }

    return (<>
            <div className="um-main">
            <CustomToast info={info}/>
                <div className="pt-ui-div">
                    <PathTrackUI paths={paths}/>
                </div>
                <div className="um-profile-div">
                    <div className="profile-details-div">
                        <div className="profile-picture-div">
                            <div className="profile-picture">
                                <img src={store?.user?.profile_pic_url || require('../../assets/images/profile_avtar.jpg')} alt=""/>
                            </div>
                            <div className="chnage-profile-picture" onClick={handleUploadPicture}>
                                <img src={require('../../assets/images/edit_icon_white.png')} alt=""/>
                            </div>
                        </div>
                        <div className="profile-content-div">
                            <div className="mb-10">
                                <h6>{store.user?.name}</h6>
                            </div>
                            <div className="mb-10">
                                <span>
                                    <img src={require('../../assets/images/building_icon.png')} alt=""/>
                                </span>
                                <div className="ml-10">
                                    {store.user?.company_name}
                                </div>
                            </div>
                            <div className="mb-10">
                                <span>
                                    <img src={require('../../assets/images/carbon_email.png')} alt=""/>
                                </span>
                                <div className="ml-10">
                                    {store.user?.email}
                                </div>
                            </div>
                            <div className="mb-10">
                                <span>
                                    <img src={require('../../assets/images/tabler_users_icon.png')} alt=""/>
                                </span>
                                <div className="ml-10">
                                   No. of users: <strong className="ml-10"> {store.user?.number_of_users}</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="um-horizontal-line">
                    <hr></hr>
                </div>
                <div className="um-details-div">
                    <div className="um-details-heading">
                        <h6>EMPLOYEE DETAILS</h6>
                    </div>
                    <div className="um-details-actions">
                        <div className="input-group">
                            <span className="input-group-prepend bg-white border-right-0">
                                <span className="input-group-text bg-transparent">
                                    <i className="icon"><img className="form-input-icon" src={require("../../assets/images/search_icon.png")} alt=""/></i>
                                </span>
                            </span>
                            <input id="search" value={search} onChange={(e)=>setSearch(e.target.value)} type="text" className="form-control border-left-0 custom-input-1" placeholder="Name" autoComplete="nope" required/>
                        </div>
                        <button className="action-btn-bg ml-10" onClick={()=>handleAddEditEmployee(null)}>
                            <i className="icon"><img className="form-input-icon" src={require("../../assets/images/add_more_icon.png")} alt=""/></i>
                            <span className="ml-2">ADD EMPLOYEE</span>
                        </button>
                    </div>
                    <div className="um-details-table">
                        {employeeList.length>0?<table class="table table-bordered">
                            <thead className="um-emp-table-header">
                                <tr>
                                    <th>S.N.</th>
                                    <th>EMPLOYEE NAME</th>
                                    <th>EMAIL</th>
                                    <th>ACTIONS</th>
                                </tr>
                            </thead>
                            <tbody  className="um-emp-table-body">
                                {
                                    employeeList.map((employee,index)=>{
                                        return(
                                            <tr>
                                                <td>{++index}</td>
                                                <td>{employee.businessCard.fullName}</td>
                                                <td>{employee.email}</td>
                                                <td className="um-table-action-cell">
                                                    <div>
                                                        <img onClick={()=>handleDeleteEmployee(employee)} src={require('../../assets/images/delete_icon.png')} alt=""/>
                                                        <img onClick={()=>handleAddEditEmployee(employee)} src={require('../../assets/images/edit_icon_black.png')} alt=""/>
                                                    </div>
                                                </td>
                                             </tr>
                                        )
                                    })
                                }                                
                            </tbody>
                        </table>:"No employee found"}
                    </div>
                </div>
                <div className="um-right-space"></div>
            </div>
            {
                openActionModal?<ActionModal 
                        {...{
                            openActionModal,
                            setOpenActionModal,
                            getEmployeeList,
                            setInfo,
                            selectedEmployee
                        }}
                />:null
            }
            {
                openDeleteModal?<DeleteModal 
                        {...{
                            openDeleteModal,
                            setOpenDeleteModal,
                            getEmployeeList,
                            setInfo,
                            selectedEmployee
                        }}
                />:null
            }
            {
                openUploadModal?<UploadPictureModal 
                        {...{
                            openUploadModal,
                            setOpenUploadModal,
                            setInfo,
                        }}
                />:null
            }
    </>
    )
}

export default UserManagement;