import React, {useId, useCallback, useMemo, useRef, useEffect, useState, useContext} from 'react';
import { ButtonProps } from './types';

export const Button = ({onClick, onMouseEnter, onMouseLeave}: ButtonProps) => {

const buttonId = useId()
  
return (
  <>
    <button id={buttonId} onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
    </>
)}