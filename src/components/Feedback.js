import React from 'react';
import '../style/Feedback.css';

import telegram from '../image/icon/telegram.svg';
import youtube from '../image/icon/youtube.svg';
import vk from '../image/icon/vk.svg';
import geo from '../image/icon/geo.svg';
import telephone from '../image/icon/telephone.svg';
import email from '../image/icon/email.svg';

class Feedback extends React.Component {
    render() {
        return (
            <section className='feedback'>
                <div className='container'>
                    <h3 className='feedback_header'>ответим на любой вопрос</h3>

                    <div className='feedback_dots'>
                        <span />
                        <span />
                        <span />
                        <span />
                    </div>

                    <form className='feedback_form'>
                        <div className='feedback_inputs'>
                            <input placeholder='Имя' className='feedback_input' />
                            <input placeholder='телефон' className='feedback_input' />
                        </div>

                        <div className='feedback_dop'>
                            <textarea placeholder='Вопрос по дизайну, тюнингу и др.' className='feedback_textarea' />

                            <div className='feedback_social'>
                                <button><img src={telegram} alt='' /></button>
                                <button><img src={youtube} alt='' /></button>
                                <button><img src={vk} alt='' /></button>
                            </div>
                        </div>

                        <div className='feedback_form_submit'>
                            <button className='feedback_form_button' type='submit'>
                                <span className='feedback_form_button_background'></span>
                                <span 
                                    className='feedback_form_button_text' 
                                    onMouseEnter={() => document.getElementsByClassName('feedback_form_button_background')[0].classList.add('feedback_form_button_background_active')}
                                    onMouseLeave={() => document.getElementsByClassName('feedback_form_button_background')[0].classList.remove('feedback_form_button_background_active')}
                                >
                                    отправить
                                </span>
                            </button>

                            <div className='feedback_geo'>
                                <h5><img src={geo} alt='' /> Eu faucibus et rutrum fringilla orci nunc</h5>

                                <div className='feedback_tel'>
                                    <a href='tel:79121234567'><img src={telephone} alt='' /> 8 (812) 123-45-67</a>
                                    <h5><img src={email} alt='' /> test@test.ru</h5>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        )
    }
}

export default Feedback;
