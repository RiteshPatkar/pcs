import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AlertService, UserService } from '../_services';

@Component({
    selector: 'verifyauthcode',
    templateUrl: 'verifyauthcode.component.html',
    styleUrls: ['./verifyauthcode.component.css']
})
export class VerifyAuthCodeComponent implements OnInit {
    authCodeForm: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) { }

    ngOnInit() {
        this.authCodeForm = this.formBuilder.group({
            authCode: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
           });
    }

    // convenience getter for easy access to form fields
    get f() { return this.authCodeForm.controls; }

    onVerify() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.authCodeForm.invalid) {
            return;
        }

        this.loading = true;
        this.userService.verifyAuthCode(this.authCodeForm.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.alertService.success('Email Verified. Registration Complete.', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }

    onResend() {
        // this.userService.resendAuthCode()
        //     .pipe(first())
        //     .subscribe(
        //         data => {
        //             this.alertService.success('Email Verified. Registration Complete.', true);
        //             this.router.navigate(['/login']);
        //         },
        //         error => {
        //             this.alertService.error(error);
        //             this.loading = false;
        //         });
    }
}
