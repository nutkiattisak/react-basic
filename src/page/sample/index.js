import React from 'react'
import { RenderIf } from '../../helper'

const Sample = () => {
  return (
    <>
      <RenderIf isTrue={true}>
        <p>Show Message</p>
      </RenderIf>
    </>
  )
}

export default Sample
