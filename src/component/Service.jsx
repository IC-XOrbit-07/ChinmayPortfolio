import React from 'react'
import '../CSS/Service.css'

export default function Service() {
  return (
    <>
        <div style={{marginTop:'100px'}}>      
            <div className="container text-center text_service">
                <div className="first">Have an Awesome Project</div>
                <div className="second">Idea? <span style={{color:'#FD853A'}}>Let's Discuss</span></div>
            </div>
            <div class='email_input container text-center'>
                <div className='mail_icon'>
                    <i class="bi bi-envelope" style={{color:'#FD853A'}}></i>
                </div>
                <div className=''>
                    <input placeholder="Let's connect on email !!" className='input_class'/>
                </div>
                <div>
                    <div className='send_text'>
                        <button type="button" class="resume_download1 btn btn-warning">Send</button>
                    </div>
                    <div className='send_icon '><i class="bi bi-send" style={{color:'#FD853A'}}></i></div>
                </div>
            </div>
        </div>
    </>
  )
}
