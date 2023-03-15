import React from 'react';
import '../style/Services.css';

import rag from '../image/icon/rag.svg';
import doc from '../image/icon/doc.svg';
import water from '../image/icon/water.svg';
import washed from '../image/icon/washed.svg';

class Services extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeTab: 0,
        }

        this.activeTab = this.activeTab.bind(this);
    }

    activeTab(e) {
        Array.from(document.getElementsByClassName('services_tab_button')).forEach(element => {            
            element.classList.remove('services_tab_button_active');
        });
        e.classList.add('services_tab_button_active');

        Array.from(document.getElementsByClassName('service_tab_content')).forEach(element => {
            element.classList.remove('service_tab_content_active')
        });
        document.getElementsByClassName('service_tab_content')[Array.from(document.getElementsByClassName('services_tab_button')).indexOf(e)].classList.add('service_tab_content_active');
    }

    render() {
        return (
            <section className='services' id='services'>
                <div className='container'>
                    <h3 className='services_header'>Наши услуги</h3>

                    <div className='services_dots'>
                        <span />
                        <span />
                        <span />
                        <span />
                    </div>

                    <div className='services_tab'>
                        <button className='services_tab_button services_tab_button_active' onClick={(e) => this.activeTab(e.target)}>Оклейка</button>
                        <button className='services_tab_button' onClick={(e) => this.activeTab(e.target)}>Детейлинг</button>
                    </div>

                    <div className='service_tab'>
                        <div className='service_tab_content service_tab_content_active'>
                            <div className='service_tab_card'>
                                <img src={rag} alt="" />
                                <h4>Защитные пленки</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur ultrices pellentesque vulputate sit. Ut feugiat.
                                </p>

                                <button className='service_tab_card_button'>
                                    <span className='service_tab_card_button_background'></span>
                                    <span 
                                        className='service_tab_card_button_text' 
                                        onMouseEnter={() => document.getElementsByClassName('service_tab_card_button_background')[0].classList.add('service_tab_card_button_background_active')}
                                        onMouseLeave={() => document.getElementsByClassName('service_tab_card_button_background')[0].classList.remove('service_tab_card_button_background_active')}
                                    >
                                        Подробнее
                                    </span>
                                </button>
                            </div>

                            <div className='service_tab_card'>
                                <img src={doc} alt="" />
                                <h4>Цветные пленки</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur ultrices pellentesque vulputate sit. Ut feugiat.
                                </p>

                                <button className='service_tab_card_button'>
                                    <span className='service_tab_card_button_background'></span>
                                    <span 
                                        className='service_tab_card_button_text' 
                                        onMouseEnter={() => document.getElementsByClassName('service_tab_card_button_background')[1].classList.add('service_tab_card_button_background_active')}
                                        onMouseLeave={() => document.getElementsByClassName('service_tab_card_button_background')[1].classList.remove('service_tab_card_button_background_active')}
                                    >
                                        Подробнее
                                    </span>
                                </button>
                            </div>

                            <div className='service_tab_card'>
                                <img src={water} alt="" />
                                <h4>Дизайн</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur ultrices pellentesque vulputate sit. Ut feugiat.
                                </p>

                                <button className='service_tab_card_button'>
                                    <span className='service_tab_card_button_background'></span>
                                    <span 
                                        className='service_tab_card_button_text' 
                                        onMouseEnter={() => document.getElementsByClassName('service_tab_card_button_background')[2].classList.add('service_tab_card_button_background_active')}
                                        onMouseLeave={() => document.getElementsByClassName('service_tab_card_button_background')[2].classList.remove('service_tab_card_button_background_active')}
                                    >
                                        Подробнее
                                    </span>
                                </button>
                            </div>

                            <div className='service_tab_card'>
                                <img src={washed} alt="" />
                                <h4>Оклейка салона</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur ultrices pellentesque vulputate sit. Ut feugiat.
                                </p>

                                <button className='service_tab_card_button'>
                                    <span className='service_tab_card_button_background'></span>
                                    <span 
                                        className='service_tab_card_button_text' 
                                        onMouseEnter={() => document.getElementsByClassName('service_tab_card_button_background')[3].classList.add('service_tab_card_button_background_active')}
                                        onMouseLeave={() => document.getElementsByClassName('service_tab_card_button_background')[3].classList.remove('service_tab_card_button_background_active')}
                                    >
                                        Подробнее
                                    </span>
                                </button>
                            </div>
                        </div>

                        <div className='service_tab_content'>
                            <div className='service_tab_card'>
                                <img src={doc} alt="" />
                                <h4>Цветные пленки</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur ultrices pellentesque vulputate sit. Ut feugiat.
                                </p>

                                <button className='service_tab_card_button'>
                                    <span className='service_tab_card_button_background'></span>
                                    <span 
                                        className='service_tab_card_button_text' 
                                        onMouseEnter={() => document.getElementsByClassName('service_tab_card_button_background')[4].classList.add('service_tab_card_button_background_active')}
                                        onMouseLeave={() => document.getElementsByClassName('service_tab_card_button_background')[4].classList.remove('service_tab_card_button_background_active')}
                                    >
                                        Подробнее
                                    </span>
                                </button>
                            </div>

                            <div className='service_tab_card'>
                                <img src={washed} alt="" />
                                <h4>Оклейка салона</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur ultrices pellentesque vulputate sit. Ut feugiat.
                                </p>

                                <button className='service_tab_card_button'>
                                    <span className='service_tab_card_button_background'></span>
                                    <span 
                                        className='service_tab_card_button_text' 
                                        onMouseEnter={() => document.getElementsByClassName('service_tab_card_button_background')[5].classList.add('service_tab_card_button_background_active')}
                                        onMouseLeave={() => document.getElementsByClassName('service_tab_card_button_background')[5].classList.remove('service_tab_card_button_background_active')}
                                    >
                                        Подробнее
                                    </span>
                                </button>
                            </div>

                            <div className='service_tab_card'>
                                <img src={water} alt="" />
                                <h4>Дизайн</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur ultrices pellentesque vulputate sit. Ut feugiat.
                                </p>

                                <button className='service_tab_card_button'>
                                    <span className='service_tab_card_button_background'></span>
                                    <span 
                                        className='service_tab_card_button_text' 
                                        onMouseEnter={() => document.getElementsByClassName('service_tab_card_button_background')[6].classList.add('service_tab_card_button_background_active')}
                                        onMouseLeave={() => document.getElementsByClassName('service_tab_card_button_background')[6].classList.remove('service_tab_card_button_background_active')}
                                    >
                                        Подробнее
                                    </span>
                                </button>
                            </div>

                            <div className='service_tab_card'>
                                <img src={rag} alt="" />
                                <h4>Защитные пленки</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur ultrices pellentesque vulputate sit. Ut feugiat.
                                </p>

                                <button className='service_tab_card_button'>
                                    <span className='service_tab_card_button_background'></span>
                                    <span 
                                        className='service_tab_card_button_text' 
                                        onMouseEnter={() => document.getElementsByClassName('service_tab_card_button_background')[7].classList.add('service_tab_card_button_background_active')}
                                        onMouseLeave={() => document.getElementsByClassName('service_tab_card_button_background')[7].classList.remove('service_tab_card_button_background_active')}
                                    >
                                        Подробнее
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Services;
