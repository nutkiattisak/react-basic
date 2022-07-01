import { statusHelper } from '../../helper'

const Status = () => {
  return (
    <>
      <div>{statusHelper.getText('pending')}</div>
    </>
  )
}

export default Status
