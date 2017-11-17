import React, { Component } from 'react'

export default class Sidebar extends Component {
  state = {
    clicked: []
  }


  handleClick = (index, e) => {
    console.log('clicked', e.target, 'index:', index)
    let clicked = this.state.clicked
    console.log('clicked', clicked)
    clicked[index] = !clicked[index]
    console.log(clicked[index])
    this.setState({ clicked });
  }

  renderGenres = () => (
    <div className='category-content'>
      {this.props.genres.map(g => <p className='sidebar-links' value={g} key={g.id} onClick={this.props.getGenre.bind(this, g)}>{g.name}</p>)}
    </div>
  )


  renderShows = () => (
    <div className='category-content'>
      {this.props.shows.map(s => <p className='sidebar-links' value={s} key={s}>{s}</p>)}
    </div>
  )

  renderActorSearchBar = () => (
    <div className='category-content'>
      ACTORS SEARCH
    </div>
  )
  render () {
    console.log('sidebar props:', this.props)

    return (
      <aside className='small-layout-aside'>
        <div className='small-layout-sidebar'>
          <div className='sidebar-nav'>
            <div className='sidebar-search'>
              <div className='filter-terms'>
                <div className='filter-title'>FILTERS</div>
                <hr />
                <div className='category-item' onClick={this.handleClick.bind(this, 0)}>Genres</div>
                  <div className={"term"+" "+this.state.clicked[0]}>
                    {this.state.clicked[0] && this.renderGenres()}
                  </div>
                <hr />
                <div className='category-item' onClick={this.handleClick.bind(this, 1)}>TV Shows</div>
                  <div className={"term"+" "+this.state.clicked[1]}>
                    {this.state.clicked[1] && this.renderShows()}
                  </div>
                <hr />
                  <div onClick={this.handleClick.bind(this, 2)}>Actors</div>
                  <div className={"term"+" "+this.state.clicked[2]} >
                    {this.state.clicked[2] && this.renderActorSearchBar()}
                  </div>
                <hr/>
              </div>
            </div>
          </div>

          <div className='sidebar-group'>
            HELLO
          </div>

        </div>
      </aside>
    )
  }
}
