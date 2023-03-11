import React from 'react';
import '../style/Achievements.css';

import Cup from '../image/icon/cup.svg';

class Achievements extends React.Component {
    render() {
        return (
            <section className='achievements'>
                <div className='container'>
                    <div className='achievements_block'>
                        <h3 className='achievements_header'>наши достижения от кубка россии до чемпионатов мира</h3>

                        <div className='achievements_dots'>
                            <span />
                            <span />
                            <span />
                            <span />
                        </div>

                        <p className='achievements_descr'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant tincidunt aliquam tincidunt pretium sodales. Tristique odio pellentesque et tincidunt posuere arcu purus lobortis risus. Urna, ut amet odio orci magnis praesent ultrices. Praesent malesuada lacus tellus tristique sit at. Sed viverra nulla nam arcu, non iaculis pretium, volutpat. 
                        </p>
                    </div>

                    <div className='achievements_block'>
                        <div className='achievements_place'>
                            <div className='achievements_place_block'>
                                <h4 className='achievements_place_block_header'>#<strong>1</strong></h4>

                                <p className='achievements_place_block_descr'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui 
                                </p>
                            </div>

                            <div className='achievements_place_block'>
                                <h4 className='achievements_place_block_header'>#<strong>6</strong></h4>
                                
                                <p className='achievements_place_block_descr'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui 
                                </p>
                            </div>

                            <div className='achievements_place_block'>
                                <h4 className='achievements_place_block_header'>#<strong>2</strong></h4>
                                
                                <p className='achievements_place_block_descr'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui 
                                </p>
                            </div>

                            <div className='achievements_place_block'>
                                <h4 className='achievements_place_block_header'>#<strong>1</strong></h4>
                                
                                <p className='achievements_place_block_descr'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui 
                                </p>
                            </div>
                        </div>

                        <div className='achievements_place'>
                            <div className='achievements_place_block'>
                                <h4 className='achievements_place_block_header'>#<strong>4</strong></h4>

                                <p className='achievements_place_block_descr'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui 
                                </p>
                            </div>

                            <div className='achievements_place_block'>
                                <h4 className='achievements_place_block_header'>#<strong>3</strong></h4>
                                
                                <p className='achievements_place_block_descr'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui 
                                </p>
                            </div>

                            <div className='achievements_place_block'>
                                <h4 className='achievements_place_block_header'>#<strong>1</strong></h4>
                                
                                <p className='achievements_place_block_descr'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui 
                                </p>
                            </div>

                            <div className='achievements_place_block'>
                                <img src={Cup} alt="" className='achievements_place_block_image' />
                                
                                <p className='achievements_place_block_descr'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Achievements;