import { useRef, useState } from 'react'
import bgLogo from '../../assets/BgWithText.svg'
import './register.css'
import InfoModal from '../InformationModal/InfoModal'

const Register = () => {
    const formRef = useRef()
    const svgRef = useRef()
    const emailRef = useRef()
    const dialRef = useRef()
    const numberRef = useRef()
    const pRef = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
        if(emailRef.current.value == 0 && numberRef.current.value == 0){
            emailNumberError()
            
        }else{
            console.log(formRef.current)
            setIsOpen(true)
            console.log(emailRef.current.value)
            console.log(numberRef.current.value)
            pRef.current.classList.add('invisible')
            numberRef.current.classList.remove('red')
            emailRef.current.classList.remove('red')
            dialRef.current.classList.remove('red')
            e.target.reset()
        }

        

    }

    
  const emailNumberError = () => {
    pRef.current.classList.remove('invisible')
    numberRef.current.classList.add('red')
    emailRef.current.classList.add('red')
    dialRef.current.classList.add('red')

    
}

    const [isOpen, setIsOpen] = useState(false)
    console.log(svgRef.current)
    return (
        <div className='main-container'>
            <img src={bgLogo} className="bg-logo" alt="logo" ref={svgRef} />
            <div className='register-container'>
                <h2>Register</h2>
                <p className='intro-p'>Please fill out the following fields in order to start using O-lab</p>
                <form ref={formRef} onSubmit={sendEmail} className='form-register'>
                    <label htmlFor="fullname">Full Name *</label>
                    <input name="fullname" type="text" required />
                    <p className="invisible style-p" ref={pRef}> Please fill either the email or phone number</p>
                    <div className='div-number'>
                        <div className='inner-div-p'>
                            <label htmlFor="dial-code">Dial Code</label>
                            <input id='input-divide-prefix' name="dial-code" type="number" ref={dialRef} />
                        </div>
                        <div className='inner-div-n'>
                            <label htmlFor="number">Telephone Number</label>
                            <input id='input-divide-number' name="number" type="number" ref={numberRef}  />
                        </div>
                    </div>

                    <label htmlFor="email">Email *</label>
                    <input name="email" type="email" ref={emailRef}  />
                    <label htmlFor="age">Age *</label>
                    <input name="age" type="number" required />
                    <label htmlFor="nationality">Nationality *</label>
                    <input name="nationality" type="text" required />
                    <label htmlFor="organization">Organization *</label>
                    <select id="organization" required>
                        <option value="">Please select an option...</option>
                        <option value="Wadi">Wadi</option>
                        <option value="Ben-Hirki">Ben-Hirki</option>
                        <option value="Foundation">Foundation</option>
                    </select>
                    <button type="submit" className="btn btn-primary btn-register">Submit</button>
                </form>
            </div>
            <InfoModal open={isOpen} close={() => { setIsOpen(false) }}></InfoModal>
        </div>
    )
}

export default Register