import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Cable, CableTerminate, User, Project } from '../../_models';
import { CableService, ProjectService, AlertService } from '../../_services';
import { first } from 'rxjs/operators';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component(
	{
		selector: 'cableterminatedialog',
		templateUrl: 'cableterminatedialog.component.html'
	})
export class CableTerminateDialogComponent {

	formGroup: FormGroup;
	cableTerminate: CableTerminate;

	constructor(
		private formBuilder : FormBuilder,
		private cableService : CableService,
		private alertService: AlertService,
		private matDialogRef: MatDialogRef<CableTerminateDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data:any
	) {
		this.cableTerminate = new CableTerminate();
	}

	ngOnInit() {
		this.createFormGroup();
	}

	createFormGroup() {
		this.formGroup = this.formBuilder.group({
			fromSide : ['', Validators.required],
			toSide: ['', Validators.required],
			technicianName:  ['', Validators.required],
			date:  ['', Validators.required],
		});
	}

	// convenience getter for easy access to form fields
	get f() { return this.formGroup.controls; }
	
	onSubmit() {
		// stop here if form is invalid
		if (this.formGroup.invalid) {
			return;
		}

		this.cableTerminate = <CableTerminate>this.formGroup.value;
		this.cableTerminate.cableId = this.data.id;

		this.cableService.terminateCable(this.cableTerminate)
		.pipe(first())
		.subscribe(
		  data => {
			this.alertService.success('Cable Terminated Successfully', true);
			//set terminated success
			this.data.isTerminated = true;
			//Close dialog if success
			this.onCancel();
			  },
		  error => {
			this.alertService.error(error);
		  });

	}

	onCancel() {
		this.matDialogRef.close();
	  }

}