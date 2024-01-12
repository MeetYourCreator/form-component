import React, {useId, useCallback, useMemo, useRef, useEffect, useState, useContext} from 'react';
import { Input } from '../index';
import { Button } from '../index';
import './style.css'

export const Form = () => {
  const [emailInput, setEmailInput] = useState<string>('');
  const [nameInput, setNameInput] = useState<string>('');
  const [passwordInput, setPasswordInput] = useState<string>('');
  const [formData, setFormData] = useState<any>({
    email: '',
    name: '',
    password: '',
  })

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailInput(e.target.value)
    console.log(emailInput)
  }

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameInput(e.target.value)
    console.log(nameInput)
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordInput(e.target.value)
    console.log(passwordInput)
  }

  const handleFormSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault()
    setFormData({ email: emailInput, name: nameInput, password: passwordInput })
    setNameInput('')
    setPasswordInput('')
    setEmailInput('')
  }, [emailInput, nameInput, passwordInput])

  useEffect(() => {
  console.log(formData)
  }, [formData])

return (
  <>
    <form className="formContainer" onSubmit={handleFormSubmit}>
      <Input name='email' type='email' value={emailInput} onChange={handleEmailChange} />
    <Input name='name' type='text' value={nameInput} onChange={handleNameChange} />
    <Input name='password' type='password' value={passwordInput} onChange={handlePasswordChange} />
    <Button onClick={handleFormSubmit} />
    </form>
    </>
)}