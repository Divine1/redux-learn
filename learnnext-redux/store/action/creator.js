import * as actionTypes from '../../store/action/types'


export const updateEmail = (inputEmail) =>{
    return {
        type : actionTypes.VALIDATE_EMAIL,
        payload : { email : inputEmail}
    }
}