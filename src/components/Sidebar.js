import React, { Component } from 'react'

export default class Sidebar extends Component {
  state = {
    clicked: [],
    category: ''
  }

  handleClick = (index, e) => {
    let category = e.target.innerHTML
    let clicked = this.state.clicked
    clicked[index] = !clicked[index]
    this.setState({ clicked, category });
  }
  handleChange = (e) => {
    let genre = e.target.value
    let id = e.target.options[e.target.selectedIndex].dataset
    this.props.getGenre(genre, id)
  }

  renderGenres = () => (
    <div className='category-content'>
      {<select name='genre' defaultValue='no-value' onChange={this.handleChange.bind(this)}>
        <option value='no-value' disabled hidden>Genre</option>
        {this.props.genres.map(genre => <option value={genre.name} key={genre.id} data-id={genre.id}>{genre.name}</option>)}
      </select>}
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
                <div className='filter-title'>BROWSE</div>
                <p>Home</p>
                <hr/>
                <p>My List</p>
                <hr/>
                <p>New Arrivals</p>
                <hr/>
                <div className='category-item' onClick={this.handleClick.bind(this, 0)}>Movies</div>
                  <div className={"term"+" "+this.state.clicked[0]}>
                    {this.state.clicked[0] && this.renderGenres()}
                  </div>
                <hr />
                <div className='category-item' onClick={this.handleClick.bind(this, 1)}>Actors</div>
                  <div className={"term"+" "+this.state.clicked[1]} >
                    {this.state.clicked[1] && this.renderActorSearchBar()}
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
