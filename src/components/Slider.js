import React from 'react';
import '../style/Slider.css';

import img1 from '../image/img/1.png'
import img2 from '../image/img/2.png'
import img3 from '../image/img/3.png'

class Slider extends React.Component {
    render() {
        return (
            <section className='slider'>
                <div className='container'>
                    <div className='slider_item'>
                        <img src={img1} alt="" className='slider_img'/>
                        <div className='slider_descr'>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate laoreet sapien a sit ante.
                            </p>
                        </div>
                    </div>

                    <div className='slider_item'>
                        <img src={img2} alt="" className='slider_img'/>
                        <div className='slider_descr'>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate laoreet sapien a sit ante.
                            </p>
                        </div>
                    </div>

                    <div className='slider_item'>
                        <img src={img3} alt="" className='slider_img'/>
                        <div className='slider_descr'>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate laoreet sapien a sit ante.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Slider;
