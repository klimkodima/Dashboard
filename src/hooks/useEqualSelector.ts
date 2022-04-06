import { shallowEqual } from 'react-redux';
import { UIGuest } from '../types';
import { useAppSelector } from './hooks';


export default function useEqualSelector(selector: { 
   (state: { party: {guests: UIGuest[], status: boolean } ; }): UIGuest[] | boolean; 
   (state: { party: {guests: UIGuest[], status: boolean } ; }): boolean; 
 }){
   return useAppSelector(selector, shallowEqual);
};