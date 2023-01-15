import React from 'react'

const Footer = () => {
  const date:Date = new Date(Date.now());

  return (
    <div className="footer">
        <div className="left">Built from scratch with only React, Typescript, and CSS </div>
        <div className="right">© {date.getFullYear()}</div>
    </div>
  )
}

export default Footer;