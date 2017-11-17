import React, { Component } from 'react'

export default class Sidebar extends Component {
  state = {
    clicked: [],
    category: '',
    actor: ''
  }

  handleClick = (index, e) => {
    let category = e.target.innerHTML
    let clicked = this.state.clicked
    clicked[index] = !clicked[index]
    this.setState({ clicked, category });
  }
  handleChange = (e) => {

    this.setState({ actor: e.target.value }, () => {console.log(this.state.actor)})
  }

  renderGenres = () => (
    <div className='category-content'>
      {this.props.genres.map(genre => <p className='sidebar-links' value={genre} key={genre.id} onClick={this.props.getGenre.bind(this, genre)}>{genre.name}</p>)}
    </div>
  )

  renderShows = () => (
    <div className='category-content'>
      {this.props.shows.map(show => <p className='sidebar-links' value={show.name} key={show.id}>{show.name}</p>)}
    </div>
  )

  renderActorSearchBar = () => (
    <div className='category-content'>
      <input className='actor-search' type='text' value={this.state.actor} placeholder='name' onChange={this.handleChange} />
    </div>
  )

  render () {
    // console.log('sidebar props:', this.props)
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
                <div className='category-item' onClick={this.handleClick.bind(this, 1)}>Shows</div>
                  <div className={"term"+" "+this.state.clicked[1]}>
                    {this.state.clicked[1] && this.renderShows()}
                  </div>
                <hr />
                <div className='category-item' onClick={this.handleClick.bind(this, 2)}>Actors</div>
                  <div className={"term"+" "+this.state.clicked[2]} >
                    {this.state.clicked[2] && this.renderActorSearchBar()}
                  </div>
                <hr/>
              </div>
            </div>
          </div>

          <div className='sidebar-group'>
            {this.state.category ? 'You chose '+this.state.category : []}
          </div>

        </div>
      </aside>
    )
  }
}
