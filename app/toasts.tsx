'use client'

import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

export default function ToastConfig() {
  return (
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
    />
  )
}
