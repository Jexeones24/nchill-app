import React from 'react'

export const Sidebar = () => {
  return (
    <aside className='small-layout-aside'>
      <div className='small-layout-sidebar'>
        <div className='sidebar-nav'>
          <div className='sidebar-search'>
            <div className='filter-terms'>
              <div className='filter-title'>FILTERS</div>
              <hr />
              <div className='term'>Genre</div>
              <hr />
              <div className='term'>Actor</div>
              <hr />
              <div className='term'>TV Shows</div>
            </div>
          </div>
        </div>
        <div className='sidebar-group'>
        </div>
      </div>
    </aside>    
  )
}
