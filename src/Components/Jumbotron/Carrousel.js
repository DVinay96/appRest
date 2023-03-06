import React from 'react'
import pataDeMula from '../../Images/pataDeMula.jpg'
import mochi from '../../Images/mochi.jpg'
import tartar from '../../Images/tartar.jpg'
import picaña from '../../Images/picaña.jpg'
import './carrousel.css'

const carrousel = () => {
    return (
        <div className='carrouselcontainer'>
            <div className='carrousel'>
                <img className='pataDeMula' src={pataDeMula} />
                <img className='mochi' src={mochi} />
                <img className='tartar' src={tartar} />
                <img className='picaña' src={picaña} />


            </div>
        </div>
    )
}

export default carrousel