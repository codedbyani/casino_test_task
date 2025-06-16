import React from 'react'
import { HeaderDesktop } from '../molecules/header/HeaderDesktop'
import { HeaderMobile } from '../molecules/header/HeaderMobile'

export const Header:React.FC = () => {
  return (
    <div className='md:ml-15'>
      <HeaderDesktop />
      <HeaderMobile />
    </div>
  )
}
