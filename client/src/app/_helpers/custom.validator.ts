import {AbstractControl} from '@angular/forms';

export class CustomValidator {

    static matchPassword(AC: AbstractControl) {

        if(AC.get('password') && AC.get('confirmPassword')) {
            let password = AC.get('password').value; // to get value in input tag
            let confirmPassword = AC.get('confirmPassword').value; // to get value in input tag
            if(password != confirmPassword) {
                AC.get('confirmPassword').setErrors( {matchPassword: true} )
            } 
        }
        else {
            return null;
        }
    }
}