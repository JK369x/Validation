import { useState } from 'react'
import './FormComponent.css'

export const FormComponent = () => {
  const [userName,setUserName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [confirmPassword,setConfirmPassword] = useState('')
  
  const [errorUserName,setErrorUserNameUserName] = useState('')
  const [errorEmail,setErrorEmail] = useState('')
  const [errorPassword,setErrorPassword] = useState('')
  const [errorConfirmPassword,setErrorConfirmPassword] = useState('')

  const [userNameColor,setUserNameColor] = useState('')
  const [emailColor,setEmailColor] = useState('')
  const [passwordColor,setPassowrdColor] = useState('')
  const [confirmPassowrdColor,setConfirmPassowrdColor] = useState('')


  const validateForm = (e)=>{
    e.preventDefault()

    if(userName.length>=8){
      setErrorUserNameUserName('')
      setUserNameColor('green')
    }else{
      setErrorUserNameUserName('กรุณาป้อนชื่อผู้ใช้จำนวน 8 ตัวอักษร')
      setUserNameColor('red')
    }

    if(email.includes('@')){
      setErrorEmail('')
      setEmailColor('green')
    }else{
      setErrorEmail('รูปแบบอีเมลย์ไม่ถูกต้อง')
      setEmailColor('red')
    }

    if(password.length>=8){
      setErrorPassword('')
      setPassowrdColor('green')
    }else{
      setErrorPassword('รหัสผ่านต้องจำนวน 8 ตัวอักษร')
      setPassowrdColor('red')
    }

    if(confirmPassword != '' && confirmPassword === password){
      setErrorConfirmPassword('')
      setConfirmPassowrdColor('green')
    }else{
      setErrorConfirmPassword('รหัสผ่านไม่ตรงกัน')
      setConfirmPassowrdColor('red')
    }
  }
  return (
    <div className='container'>
        <form className='form' onSubmit={validateForm}>
            <div className='form-control'>
                <label>Username</label>
                <input type='text' value={userName} onChange={(e)=>setUserName(e.target.value)} style={{borderColor:userNameColor}}/>
                <small style={{color:userNameColor}}>{errorUserName}</small>
            </div>
            <div className='form-control'>
                <label>Email</label>
                <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)} style={{borderColor:emailColor}}/>
                <small style={{color:emailColor}}>{errorEmail}</small>
            </div>
            <div className='form-control'>
                <label>Password</label>
                <input type='text' value={password} onChange={(e)=>setPassword(e.target.value)} style={{borderColor:passwordColor}}/>
                <small style={{color:passwordColor}}>{errorPassword}</small>
            </div>
            <div className='form-control'>
                <label>Confirmpassowrd</label>
                <input type='text' value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} style={{borderColor:confirmPassowrdColor}}/>
                <small style={{color:confirmPassowrdColor}}>{errorConfirmPassword}</small>
            </div>
            <button>Submit</button>
        </form>
    </div>
  )
}
