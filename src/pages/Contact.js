const github = require('../images/github.png')
const linkedin = require('../images/linkedin.png')
const phone = require('../images/phone.png')
const gmail = require('../images/gmail.png')

function Contact() {
    return(
        <div>
            <h1 className="contact-header">Please use the information below to contact me with any questions/ inquiries.</h1>
            <div className="contact-div">
                <div className="contact-section">
                    <h1 className="contact-header">Phone</h1>
                    <p className="contact-header">(612)408-4708</p>
                    <img src={phone} alt="phone" className='contact-image'/>
                </div>
                <div className="contact-section">
                    <h1 className="contact-header">Email</h1>
                    <p className="contact-header">BrettGillund@gmail.com</p>
                    <img src={gmail} alt="gmail" className='contact-image'/>
                </div>

                <div className="contact-section">
                    <a href="https://github.com/BrettGillund" target='_blank' rel="noreferrer"><h1 className="contact-header">GitHub</h1></a>
                    <a href="https://github.com/BrettGillund" target='_blank' rel="noreferrer"><img src={github} alt="github" className='contact-image'/></a>

                </div>

                <div className="contact-section">
                    <a href="https://www.linkedin.com/in/brett-gillund-8a0b38131/" target='_blank' rel="noreferrer"><h1 className="contact-header">LinkedIn</h1></a>
                    <a href="https://www.linkedin.com/in/brett-gillund-8a0b38131/" target='_blank' rel="noreferrer"><img src={linkedin} alt="linkedin" className='contact-image'/></a>
                </div>
            </div>
        </div>
    )
}

export default Contact;