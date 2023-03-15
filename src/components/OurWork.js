import React from 'react';
import '../style/OurWork.css';

import img7 from '../image/img/7.png';
import img8 from '../image/img/8.png';
import img9 from '../image/img/9.png';
import img10 from '../image/img/10.png';
import img11 from '../image/img/11.png';
import img12 from '../image/img/12.png';

class OurWork extends React.Component {
    render() {
        return (
            <section className='our_work' id='our_work'>
                <h3 className='our_work_header'>Наши работы</h3>

                <div className='our_work_dots'>
                    <span />
                    <span />
                    <span />
                    <span />
                </div>

                <div className='our_work_container'>
                    <img src={img7} alt="" />
                    <img src={img8} alt="" />
                    <img src={img9} alt="" />
                    <img src={img10} alt="" />
                    <img src={img11} alt="" />
                    <img src={img12} alt="" />

                    <img src={img12} alt="" />
                    <img src={img10} alt="" />
                    <img src={img8} alt="" />
                    <img src={img7} alt="" />
                    <img src={img11} alt="" />
                    <img src={img9} alt="" />

                    <img src={img9} alt="" />
                    <img src={img7} alt="" />
                    <img src={img12} alt="" />
                    <img src={img10} alt="" />
                    <img src={img11} alt="" />
                    <img src={img8} alt="" />
                </div>
            </section>
        )
    }
}

export default OurWork;
