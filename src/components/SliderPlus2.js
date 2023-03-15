import React from 'react';
import '../style/SliderPlus.css';

import img6 from '../image/img/6.png';
import rag from '../image/icon/rag.svg';
import doc from '../image/icon/doc.svg';
import water from '../image/icon/water.svg';

class SliderPlus2 extends React.Component {
    render() {
        return (
            <section className='slider_plus'>
                <div className='container'>
                    <div className='slider_plus_item'>
                        <img src={img6} alt="" className='slider_plus_img' />
                        <p className='slider_plus_descr'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque auctor nibh feugiat est. Consectetur lectus.
                        </p>
                    </div>

                    <div className='slider_plus_item ml'>
                        <div className='slider_plus_block'>
                            <div className='slider_plus_block_div'>
                                <img src={rag} alt=""/>
                                <h4>100% полироль axem</h4>
                            </div>

                            <p className='slider_plus_block_descr tal'>
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
                                <img src={doc} alt=""/>
                                <h4>выполняем работу четко по тз</h4>
                            </div>

                            <p className='slider_plus_block_descr tal'>
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
                                <h4>у нас лучшие мастера</h4>
                            </div>

                            <p className='slider_plus_block_descr tal'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium, rutrum est, molestie proin tristique duis sed. Morbi suspendisse amet nisl vestibulum risus. Quis pretium
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default SliderPlus2;
