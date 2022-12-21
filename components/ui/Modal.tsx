import Swal from 'sweetalert2'

export const ConfirmModal = Swal.mixin({
  showClass: {
    popup: '',
  },
  hideClass: {
    popup: '',
  },
  showCancelButton: true,
  confirmButtonColor: '#047857',
  cancelButtonColor: '#b91c1c',
  confirmButtonText: 'Yes, take it!',
})

export const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  },
})
