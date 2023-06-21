import React from 'react'
import './News.scss'
import newsmain from '../../../assets/newsmain.jpg'


const News = ( {video, setVideo} ) => {
  return (
    <div id='news'>
        <main>
            <img src={newsmain} alt="" />

            <div className="text">
                <h1>
                    <i className='fa-solid fa-newspaper fa-3x'></i> <br />
                    News
                </h1>
            </div>
        </main>
    </div>
  )
}

export default News