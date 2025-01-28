import React from 'react'
import s from './Contact.module.css'
//  import icons from '..../public/icons/icons.svg'

const Contact = ({ data: { id, name, number }, onDelete }) => {
  return (
      <address className={s.addressWrapper}>
          <div className={s.contactWrapper}>
        <div className={s.contAndIconWrapper}>
          <svg width={24} height={24}  className={s.icon}>
      <use xlinkHref={'..../public/icons/icons.svg#person'} />
    </svg>
                  <p className={s.text}>{name}</p></div>
        <div className={s.contAndIconWrapper}>
           <svg width={24} height={24}  className={s.icon}>
      <use xlinkHref={'..../public/icons/icons.svg#tel'} />
    </svg>
                  <p className={s.text}>{number}</p></div>
          </div>
          <button className={s.btnDelContact} onClick={() => onDelete(id)}>Delete</button>
    </address>
  )
}

export default Contact