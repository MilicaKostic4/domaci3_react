import React from 'react'
import { Link } from 'react-router-dom'
import {TiLocation} from 'react-icons/ti'
import {AiFillPhone} from 'react-icons/ai'
import {MdEmail} from 'react-icons/md'

function Footer() {
  return (
    <div>
        <div className='footer1'>
          <div className="footer11">
            <div className='email fgroup'>
              <MdEmail/>
              <a>kucaDobrihUkusa@gmail.com</a>
            </div>
            <div className="adress fgroup">
              <TiLocation/>
              <Link to="https://www.google.com/maps/place/%D0%88%D0%BE%D0%B2%D0%B5+%D0%98%D0%BB%D0%B8%D1%9B%D0%B0,+%D0%91%D0%B5%D0%BE%D0%B3%D1%80%D0%B0%D0%B4/@44.7793343,20.4691221,17z/data=!3m1!4b1!4m6!3m5!1s0x475a705bb76bb643:0x563ba867861b280e!8m2!3d44.7793343!4d20.471697!16s%2Fg%2F12nvpv8yn?entry=ttu">
              Jove Ilića 154-Beograd</Link>
            </div>
            <div className="phone fgroup">
              <AiFillPhone/>
              <a>060 218 6901</a>
            </div>
          </div>
          <div className='footer12'>
            <p>
                {" "}
                &copy;2023 <span>KUĆA DOBRIH UKUSA</span>
            </p>
          </div>
        </div>
    </div>
  )
}

export default Footer