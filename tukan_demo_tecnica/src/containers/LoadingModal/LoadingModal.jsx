import React from 'react'
import ReactDOM from 'react-dom'
//Import components
import { LoadingSpinner } from '../../components/LoadingSpinner/LoadingSpinner'
//Import styles
import './LoadingModal.css'

export function LoadingModal(){
    return ReactDOM.createPortal(
        <div className='modal-background'>
            <LoadingSpinner />
        </div>,document.getElementById('loadingModal')
    )
}