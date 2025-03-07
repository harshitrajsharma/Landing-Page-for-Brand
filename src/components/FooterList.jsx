import React from 'react'

const FooterList = (props) => {
  return (
    <div className=' flex flex-col gap-4 text-center md:text-start'>
      <h1 className=' text-2xl'>{props.title}</h1>
      <div className=' flex flex-col gap-4 text-gray-700 '>
      <a className=' hover:text-purple-600' href={props.link}>{props.opt1}</a>
      <a className=' hover:text-purple-600' href={props.link}>{props.opt2}</a>
      <a className=' hover:text-purple-600' href={props.link}>{props.opt3}</a>
      <a className=' hover:text-purple-600' href={props.link}>{props.opt4}</a>
      <a className=' hover:text-purple-600' href={props.link}>{props.opt5}</a>
      <a className=' hover:text-purple-600' href={props.link}>{props.opt6}</a>
      </div>
    </div>
  )
}

export default FooterList
