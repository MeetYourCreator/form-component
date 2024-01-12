import React, {useId, useCallback, useMemo, useRef, useEffect, useState, useContext} from 'react';
import { InputProps } from './types';

export const Input = ({name,type, value, onChange, styles}: InputProps) => {

  const inputId = useId()
  
return (
  <>
   <label htmlFor={inputId}>{name}</label>
   <input id={inputId} name={name} type={type} value={value} onChange={onChange} style={styles}/>
    </>
)}