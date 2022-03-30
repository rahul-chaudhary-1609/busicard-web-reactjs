import React from 'react';
import Modal from 'react-modal';
import { useSelector,useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { apiPostRequest, apiDeleteWithParamsRequest, apiUploadFileRequest, apiPutRequest } from '../../api';
import { apiConstants, toastType } from '../../constants';
import CustomErrorHandler from "../utils/customErrorHandler";
import { updateUserData } from "../redux/actions";
import Loader from "../utils/loader.js"


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width:"30%",
    padding:"20ox",
    backgroundColor:"#E9F4FF",
  },
};


export function ActionModal(props) {

  const store=useSelector(store=>store.authReducer);
  const history=useHistory();

  let subtitle;

  let [employee, setEmployee] = React.useState({
      empName:props.selectedEmployee?props.selectedEmployee.businessCard.fullName:"",
      empEmail:props.selectedEmployee?props.selectedEmployee.email:""
  });

  const [loading, setLoading]=React.useState(false);


  const handleInputChange=(e)=>{
    employee[e.target.id]=e.target.value
    setEmployee({...employee})
  }

  function openModal() {
    props.setOpenActionModal(true)
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    props.setOpenActionModal(false)
  }

  const handleAddEditEmployee=(e)=>{
    e.preventDefault();
    setLoading(true);
    let data={
        endPoint:apiConstants.addEmployee,
        body:{
            name:employee.empName,
            email:employee.empEmail,
        }
    }

    if(props.selectedEmployee){
        data={
            endPoint:apiConstants.editEmployee,
            body:{
                id:props.selectedEmployee.id,
                name:employee.empName,
                email:employee.empEmail,
            }
        }
    }


    apiPostRequest(store.user.token,data)
    .then((response)=>{
        props.setInfo({
            show:1,
            message:props.selectedEmployee?"Employee Updated!":"Employee Added!",
            type:toastType.info
        })
        setTimeout(()=>{
            props.setOpenActionModal(false);
            setLoading(false);
        },1000)
        props.getEmployeeList();
    })
    .catch((error)=>{
        setLoading(false);
        CustomErrorHandler(error,history);
    })
}

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={props.openActionModal}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className='action-modal-main'>
                <h6>{props.selectedEmployee?"EDIT EMPLOYEE":"ADD EMPLOYEE"}</h6>
                <form action='#' onSubmit={handleAddEditEmployee}>
                    <div className="input-group mb-15">
                        <input id="empName" value={employee.empName} onChange={handleInputChange} type="text" className="form-control border-right-0 custom-input-1" placeholder="Name" autoComplete="nope" required/>
                        <span className="input-group-append bg-white border-left-0">
                            <span className="input-group-text bg-transparent">
                                <i className="icon"><img className="form-input-icon" src={require("../../assets/images/name_icon.png")} alt=""/></i>
                            </span>
                        </span>
                    </div>
                    <div className="input-group mb-15">
                        <input id="empEmail" value={employee.empEmail} onChange={handleInputChange} type="text"  className="form-control border-right-0 custom-input-1" placeholder="Email address" autoComplete="nope" required/>
                        <span className="input-group-append bg-white border-left-0">
                            <span className="input-group-text bg-transparent">
                                <i className="icon"><img className="form-input-icon" src={require("../../assets/images/email_icon.png")} alt=""/></i>
                            </span>
                        </span>
                    </div>
                    <div className="input-group">
                        <button disabled={loading} type="submit" className="action-btn-bg">{props.selectedEmployee?"SAVE":"ADD"}</button>
                        <button disabled={loading} type="reset" onClick={closeModal} className="modal-action-btn-border">Cancel</button>
                    </div>
                </form>
        </div>
      </Modal>
    </div>
  );
}

  

  export function DeleteModal(props) {

    const store=useSelector(store=>store.authReducer);
    const history=useHistory();
  
    let subtitle;
    
    const [loading, setLoading]=React.useState(false);
   
  
    function openModal() {
      props.setOpenDeleteModal(true)
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      props.setOpenDeleteModal(false)
    }
  
    const handleDeleteEmployee=(e)=>{
      e.preventDefault();
      setLoading(true);
      let data={
            endPoint:apiConstants.deleteEmployee,
            params:{
                employee_id:props.selectedEmployee.id,
            }
      }  
  
      apiDeleteWithParamsRequest(store.user.token,data)
      .then((response)=>{
          props.setInfo({
              show:1,
              message:"Employee Deleted!",
              type:toastType.info
          })
          setTimeout(()=>{
              props.setOpenDeleteModal(false);
              setLoading(false);
          },1000)
          props.getEmployeeList();
      })
      .catch((error)=>{
          setLoading(false);
          CustomErrorHandler(error,history);
      })
  }
  
    return (
      <div>
        <button onClick={openModal}>Open Modal</button>
        <Modal
          isOpen={props.openDeleteModal}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className='action-modal-main'>
                  <h6>DELETE EMPLOYEE</h6>
                  <form action='#' onSubmit={handleDeleteEmployee}>
                        Are you sure you want to delete?
                      <div className="input-group mt-3">
                          <button disabled={loading} type="submit" className="action-btn-bg">Delete</button>
                          <button disabled={loading} type="reset" onClick={closeModal} className="modal-action-btn-border">Cancel</button>
                      </div>
                  </form>
          </div>
        </Modal>
      </div>
    );
  }


  export function UploadPictureModal(props) {

    const store=useSelector(store=>store.authReducer);
    const history=useHistory();
    const dispatch=useDispatch();
  
    let subtitle;
    
    const [loading, setLoading]=React.useState(false);
    const [uploadedImg, setUploadedImg,]=React.useState(null);

    const handleUpload=async(e)=>{
      setLoading(true);
      if(!(e.target.files[0].size>5242880)){
          
          let formData=new FormData();
          formData.append("file",e.target.files[0])
          // formData.append("mimeType",e.target.files[0].type)
          formData.append("folderName","agreement_doc")

          let data={
            endPoint:apiConstants.uploadFile,
            form:formData
          }
          
          apiUploadFileRequest(store.user.token,data)
          .then((response)=>{
            setLoading(false);
            setUploadedImg(response.body.data)
          })
          .catch((error)=>{
            setLoading(false);
            CustomErrorHandler(error,history);
        })
          
      }else{
        setLoading(false);
        props.setInfo({
            show:1,
            message:"Image file size should not exceed 5 MB",
            type:toastType.error
        })
      }
    }

   
  
    function openModal() {
      props.setOpenUploadModal(true)
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      props.setOpenUploadModal(false)
    }
  
    const handleSavePicture=(e)=>{
      e.preventDefault();
      setLoading(true);
      let data={
            endPoint:apiConstants.updateProfile,
            body:{
              profile_pic_url:uploadedImg,
            }
      }  
  
      apiPutRequest(store.user.token,data)
      .then((response)=>{
          props.setInfo({
              show:1,
              message:"Picture Updated!",
              type:toastType.info
          })
          setTimeout(()=>{
              props.setOpenUploadModal(false);
              setLoading(false);
          },1000)
          let payload={
            user:{
                ...store.user,
                ...response.body.data
            }
          }

          dispatch(updateUserData(payload))
      })
      .catch((error)=>{
          setLoading(false);
          CustomErrorHandler(error,history);
      })
  }
  
    return (
      <div>
        <button onClick={openModal}>Open Modal</button>
        <Modal
          isOpen={props.openUploadModal}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className='action-modal-main'>
                  <h6>CHANGE PROFILE PICTURE</h6>
                  <form action='#' onSubmit={handleSavePicture}>
                      <div  className='modal-upload-picture-div'>
                        <img className='modal-upload-picture-img' src={uploadedImg || store?.user?.profile_pic_url || require('../../assets/images/profile_avtar.jpg')} alt=""/>
                        <label for="um-picture-upload">{loading?"Uploading...":"Upload"}</label>
                        <input id="um-picture-upload" onChange={handleUpload}  type="file"/>
                      </div>
                      <div className="input-group mt-3">
                          <button disabled={loading && !uploadedImg} type="submit" className="action-btn-bg">Save</button>
                          <button disabled={loading} type="reset" onClick={closeModal} className="modal-action-btn-border">Cancel</button>
                      </div>
                  </form>
          </div>
        </Modal>
      </div>
    );
  }
  