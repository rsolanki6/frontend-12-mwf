import React from 'react'
import Navbar from './Navbar'
import ContentApp from './ContentApp'
import FooterApp from './FooterApp'

export default function Layout() {
  return (
    <div>
      <Navbar />
      <ContentApp />
      <FooterApp />
    </div>
  )
}
