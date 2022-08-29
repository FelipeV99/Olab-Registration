import React from 'react'
import ReactDom from 'react-dom'
import { BiInfoCircle } from 'react-icons/bi'
import './infoModal.css'

const InfoModal = (props) => {
    console.log(props.open)
    if (props.open === false) return null
    return (ReactDom.createPortal(
        <>
            <div className='overlay-style'>
                <div className="modal-style">
                    <BiInfoCircle className='info-icon' size={22} />
                    <p className='overlay-p'>In 1 hour you'll have access to O-lab with your registered email and password 12345</p>
                    <button onClick={props.close} className='btn' id='overlay-btn'>I Understand</button>
                </div>
            </div>
        </>,
        document.getElementById('portal')
    ))
}

export default InfoModal