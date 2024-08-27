import React, { memo } from 'react'

const ContentChild = (props) => {
    console.log('child render')
  return (
    <div className='bg-dark text-white px-3'>
        <span className='badge bg-danger mt-2 d-block '>Child component</span>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, eveniet veritatis tempore accusantium pariatur quibusdam soluta nobis debitis voluptatibus, illum nesciunt velit corporis perspiciatis praesentium dolor vero mollitia consequatur quod!
        <br />
        <span className='fa fa-thumbs-up'>{props.likeProps.number}</span>
        </div>

  )
}

export default memo(ContentChild) //shallow compare props