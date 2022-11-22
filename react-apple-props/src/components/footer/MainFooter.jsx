import React, { Component } from 'react'

export class MainFooter extends Component {
  render() {
    return (
      <div className="footer-links-wrapper row" >
        <div className="links-wrapper-1 col-sm-12 col-md">
          <h3>{this.props.Titles}</h3>
          <ul>
            <li><a href={this.props.linkUrl}>{this.props.lists}</a></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default MainFooter


