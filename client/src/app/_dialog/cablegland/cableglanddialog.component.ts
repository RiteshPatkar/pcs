import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Cable, CableGland, User, Project } from '../../_models';
import { CableService, ProjectService, AlertService } from '../../_services';
import { first } from 'rxjs/operators';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component(
	{
		selector: 'cableglanddialog',
		templateUrl: 'cableglanddialog.component.html'
	})
export class CableGlandDialogComponent {

	formGroup: FormGroup;
	cableGland: CableGland;

	constructor(
		private formBuilder : FormBuilder,
		private cableService : CableService,
		private alertService: AlertService,
		private matDialogRef: MatDialogRef<CableGlandDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data:any
	) {
		this.cableGland = new CableGland();
	}

	ngOnInit() {
		this.createFormGroup();
	}

	createFormGroup() {
		this.formGroup = this.formBuilder.group({
			fromSide : ['', Validators.required],
			toSide: ['', Validators.required],
			glandFromTechnician: ['', Validators.required],
			glandToTechnician:  ['', Validators.required],
			glandFromDate:  ['', Validators.required],
			glandToDate:  ['', Validators.required],
		});
	}

	// convenience getter for easy access to form fields
	get f() { return this.formGroup.controls; }
	
	onSubmit() {
		// stop here if form is invalid
		if (this.formGroup.invalid) {
			return;
		}

		this.cableGland = <CableGland>this.formGroup.value;
		this.cableGland.cableId = this.data.id;

		this.cableService.glandCable(this.cableGland)
		.pipe(first())
		.subscribe(
		  data => {
			this.alertService.success('Cable glanded Successfully', true);
			//set glanded success
			this.data.isGlanded = true;
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