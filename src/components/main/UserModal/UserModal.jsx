import React,{useState,useContext} from 'react'
import "./UserModal.scss"
import { parseDate } from '../../../utils/utils'
import Modal from '../../common/Modal/Modal'
import Button from '../../common/Button/Button'
import XICON from "../../../assets/x_icon.svg"
import { UsersContext } from "../../../context/UserAppContext"


const UserModal = () => {

const [inputs,setInputs] = useState({name:"",address:""})
const {name,address} = inputs

const {isOpen,toggleModal,addUser} = useContext(UsersContext)

const handleInputs = (e) => {
    const {value,name} = e.target
    setInputs({...inputs,[name]:value})
}


const handleUser = () => {
const inputKeys = Object.keys(inputs)
const nonEmpty = inputKeys.every(el => inputs[el].length)

if(nonEmpty) {
    const date = parseDate()
    addUser({name,address,date})
    setInputs({name:"",address:""})
    toggleModal()   
}

   
}

    return (
        <>
            <Modal width="500px" isOpen={isOpen}>
                <div className="UserModal-header">
                    <h1>Add User</h1>
                    <div onClick={()=>toggleModal()}><img alt="" src={XICON} width="20px" height="20px" /></div>
                </div>
                <div className="UserModal-main">
                    <label>Name<input type="text" name="name" value={name} onChange={(e) => handleInputs(e)  }/></label>
                    <label>Address<input type="text" name="address" value={address} onChange={(e) => handleInputs(e)} /></label>
                </div>
                <div className="UserModal-footer">
                   <div className="UserModal-footer-actionBtns">
                  <Button onClick={()=>toggleModal()} label="Cancel" className="UserModal-footer-actionBtns-cancel"/>
                  <Button onClick={()=>handleUser()} label="Confirm" className="UserModal-footer-actionBtns-confirm"/>
                   </div>
                </div>
            </Modal>
        </>
    )
}


export default UserModal
