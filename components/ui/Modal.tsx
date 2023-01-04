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
