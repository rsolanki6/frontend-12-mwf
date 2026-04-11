import React from 'react'
import HeaderApp from './component/HeaderApp'
import BannerApp from './component/BannerApp'
import ContentApp from './component/ContentApp'
import FooterApp from './component/FooterApp'


export default function LayOut() {
  return (
    <>
      <HeaderApp />
      <BannerApp />
      <ContentApp />
      <FooterApp />
    </>
  )
}
