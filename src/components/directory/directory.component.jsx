import React, { Component } from 'react'
import './directory.styles.scss'
import MenuItems from 'components/menu-items/menu-items.component'
import { sections } from './data'

class Directory extends Component {

  constructor(props) {
    super(props)
    this.state = {
      sections
    }
  }
  render() {
    const { sections } = this.state
    return (
      <div className="directory-menu">
        {sections.map(({ title, imageUrl, id, size }) => (
          <MenuItems key={id} imageUrl={imageUrl} title={title} size={size} />
        ))}
      </div>
    )
  }
}

export default Directory
