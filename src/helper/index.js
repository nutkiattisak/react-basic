export const RenderIf = ({ children, isTrue }) => {
  return isTrue ? children : null
}

export const STATUS_PENDING = 'pending'
export const STATUS_APPROVE = 'approved'
export const STATUS_REJECT = 'rejected'

export const statusHelper = {
  isPending: (status) => status === STATUS_PENDING,
  isAccept: (status) => status === STATUS_APPROVE,
  isReject: (status) => status === STATUS_REJECT,

  getColor: (statusID) => {
    const status = {
      [STATUS_PENDING]: 'warning',
      [STATUS_APPROVE]: 'success',
      [STATUS_REJECT]: 'danger',
    }[statusID]

    return status || ''
  },

  getText: (statusID) => {
    const status = {
      [STATUS_PENDING]: 'รออนุมัติ',
      [STATUS_APPROVE]: 'อนุมัติ',
      [STATUS_REJECT]: 'ไม่อนุมัติ',
    }[statusID]

    return status || ''
  },
}
