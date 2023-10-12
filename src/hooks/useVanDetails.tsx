import {useOutletContext} from 'react-router-dom'
import {Van} from '../types/van.ts'

export const useVanDetails = ()=> useOutletContext<Van>()