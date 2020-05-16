import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Cable, CablePull, User, Project } from '../../_models';
import { CableService, ProjectService, AlertService } from '../../_services';
import { first } from 'rxjs/operators';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component(
	{
		selector: 'cablepulldialog',
		templateUrl: 'cablepulldialog.component.html'
	})
export class CablePullDialogComponent {

	formGroup: FormGroup;
	cablePull: CablePull;

	constructor(
		private formBuilder : FormBuilder,
		private cableService : CableService,
		private alertService: AlertService,
		private matDialogRef: MatDialogRef<CablePullDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data:Cable
	) {
		this.cablePull = new CablePull();
	}

	ngOnInit() {
		this.createFormGroup();
	}

	createFormGroup() {
		this.formGroup = this.formBuilder.group({
			drumNumber : ['', Validators.required],
			startLength: ['', Validators.required],
			endLength: ['', Validators.required],
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

		this.cablePull = <CablePull>this.formGroup.value;
		this.cablePull.cableId = this.data.id;

		this.cableService.pullCable(this.cablePull)
		.pipe(first())
		.subscribe(
		  data => {
			this.alertService.success('Cable pulled Successfully', true);
			//set Pulled success
			this.data.isPulled = true;
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