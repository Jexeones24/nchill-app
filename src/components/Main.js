import React from 'react'
import { Footer, Header } from './'
import Gallery from './Gallery'
import Sidebar from './Sidebar'

export const Main = ({ ...props }) => {
  return (
    <main className='small-layout-wrapper'>
      <Header />
        <div className='small-layout-main'>
          <div className='small-layout-body'>
            <Sidebar
              genres={props.genres}
              shows={props.shows}
              getGenre={props.getGenre}
            />
            <div className='small-layout-content'>
              <Gallery
                results={props.results}
                filterList={props.filterList}
                handleImageClick={props.handleImageClick}
              />
            </div>
          </div>
        </div>
      <Footer />
    </main>
  )
}
