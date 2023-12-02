import React from 'react'
import clsx from 'clsx'
import authImg from '../../../assets/imgs/getstared.png'

const Image = ({variant, children, className, ...restProps}) => {
let style = "absolute top-[100px] bottom-0 left-[20px] right-0 "
    switch (variant) {
        case "normal":
            className = clsx(style)
            break;
        default:
            break;
    }

  return (
    <div className='relative w-[300px] h-[300px] '>
      <img src={authImg} alt="" />
      <div variant={variant} {...restProps} className={className}>
       {children}
      </div>
    </div>
  )
}

export default Image
