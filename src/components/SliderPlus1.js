import React from 'react';
import '../style/SliderPlus.css';

import img4 from '../image/img/4.png';
import doc from '../image/icon/doc.svg';
import water from '../image/icon/water.svg';
import washed from '../image/icon/washed.svg';

class SliderPlus1 extends React.Component {
    render() {
        return (
            <section className='slider_plus'>
                <div className='container'>
                    <div className='slider_plus_item'>
                        <div className='slider_plus_block'>
                            <div className='slider_plus_block_div'>
                                <img src={doc} alt=""/>
                                <h4>материалы от лучших компаний</h4>
                            </div>

                            <p className='slider_plus_block_descr'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium, rutrum est, molestie proin tristique duis sed. Morbi suspendisse amet nisl vestibulum risus. Quis pretium
                            </p>
                        </div>

                        <div className='slider_plus_dots'>
                            <span />
                            <span />
                            <span />
                            <span />
                        </div>

                        <div className='slider_plus_block'>
                            <div className='slider_plus_block_div'>
                                <img src={water} alt=""/>
                                <h4>Опытные мастера</h4>
                            </div>

                            <p className='slider_plus_block_descr'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium, rutrum est, molestie proin tristique duis sed. Morbi suspendisse amet nisl vestibulum risus. Quis pretium
                            </p>
                        </div>

                        <div className='slider_plus_dots'>
                            <span />
                            <span />
                            <span />
                            <span />
                        </div>

                        <div className='slider_plus_block'>
                            <div className='slider_plus_block_div'>
                                <img src={washed} alt=""/>
                                <h4>Гарантия на все виды работы</h4>
                            </div>

                            <p className='slider_plus_block_descr'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium, rutrum est, molestie proin tristique duis sed. Morbi suspendisse amet nisl vestibulum risus. Quis pretium
                            </p>
                        </div>
                    </div>

                    <div className='slider_plus_item'>
                        <img src={img4} alt="" className='slider_plus_img' />
                        <p className='slider_plus_descr'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque auctor nibh feugiat est. Consectetur lectus.
                        </p>
                    </div>
                </div>
            </section>
        )
    }
}

export default SliderPlus1;
