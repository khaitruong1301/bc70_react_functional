//rafce
import React from 'react'
import Header from './Header'
import Navigation from './Navigation'
import Footer from './Footer'
import Content from './Content'

const BaiTap1 = () => {
  return (
    <div>
        <Header />
        <div className='row mx-0 w-100'>
            <div className='col-4 me-0 pe-0'>
                <Navigation />
            </div>
            <div className='col-8 ms-0 ps-0'>
                <Content />
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default BaiTap1