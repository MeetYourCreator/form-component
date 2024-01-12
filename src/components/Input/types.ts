import { ComponentProps } from '../types';
export interface InputProps extends ComponentProps {
name: string;
type: string;
value: string;
onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}