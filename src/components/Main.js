import React from 'react'
import { Footer, Header, Sidebar, Gallery } from './'

export const Main = ({ ...props }) => {
  return (
    <main className='small-layout-wrapper'>
      <Header />
        <div className='small-layout-main'>
          <div className='small-layout-body'>
            <Sidebar genres={props.genres} />
            <div className='small-layout-content'>
              <Gallery
                results={props.results}
                filterList={props.filterList}
              />
            </div>
          </div>
        </div>
      <Footer />
    </main>
  )
}
