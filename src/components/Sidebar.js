import React from 'react'

export const Sidebar = (props) => {
  return (
    <aside className='small-layout-aside'>
      <div className='small-layout-sidebar'>
        <div className='sidebar-nav'>
          <div className='sidebar-search'>
            <div className='filter-terms'>
              <div className='filter-title'>FILTERS</div>
              <hr />
              <div className='term'>Genres</div>
              {props.genres.map((g) => <p className='sidebar-names' key={g.id}>{g.name}</p>)}
              <hr />
              <div className='term'>Actors</div>
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
