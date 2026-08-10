import React from 'react'
import HeaderApp from './HeaderApp'
import BannerApp from './BannerApp'
import ContentApp from './ContentApp'
export default function Layout() {
  return (
    <div>
      <HeaderApp />
      <BannerApp />
      <ContentApp />
    </div>
  )
}
