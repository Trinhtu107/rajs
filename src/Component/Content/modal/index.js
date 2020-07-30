import React, {Component, useState} from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Popup from "reactjs-popup";
import Data from '../../../Api/products';
import Modal from 'react-modal';

function Modals(){
    const customStyles = {
        content : {
            top                   : '50%',
            left                  : '50%',
            right                 : 'auto',
            bottom                : 'auto',
            marginRight           : '-50%',
            transform             : 'translate(-50%, -50%)',
            width                 : "800px"
        }
    };
    const [modalIsOpen,setIsOpen] = React.useState(false);
    const [show,setShow] = React.useState(false);
    const [data,setData] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }
    function closeModal(){
        setIsOpen(false);
    }
    function onSubmit(event) {
        event.preventDefault(event);
        setShow(true);
        closeModal();
        const data = [{
            name:event.target.Name.value,
            dob:event.target.DOB.value,
            des:event.target.Description.value,
            gender:event.target.gender.value
        }];
        setData(data);
    }
    Modal.setAppElement('body');
    return (
        <div>
            <button onClick={openModal}>Who you are?</button>

            <Modal  isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
            >
                <div>Please Choose?</div>
                <form className="form" onSubmit={onSubmit}>
                    <label>Name:<br /><input type="text" name="Name" id="Name" /></label><br />
                    <label>DOB:<br /><input type="date" name="DOB" id="DOB" /></label><br />
                    <label>Description:<br /><textarea name="Description" /></label><br />
                    <input type="radio" id="male" name="gender" value="male" />
                    <label htmlFor="male"> Male</label><br/>
                    <input type="radio" id="female" name="gender" value="female"/>
                    <label htmlFor="female"> Female</label><br/>
                    <button className="btn btn-primary" style={{margin:"10px"}} type="submit">Submit</button>
                    <button className="btn btn-primary" onClick={closeModal}>close</button>
                </form>
            </Modal>
            {show? <Webshow data={data} /> : null}
        </div>
    );
}

function Webshow(data) {
    const [datanew] = data.data;
    return(
        <div >
            <li>{datanew.name}</li>
            <li>{datanew.dob}</li>
            <li>{datanew.des}</li>
            <li>{datanew.gender}</li>
        </div>
    );
}
export default Modals;
