import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Material, User, Project, TagSerial} from '../_models';
import { MaterialService, ProjectService, AlertService } from '../_services';
import {Router} from '@angular/router';
import {first} from 'rxjs/operators';

@Component(
{
	selector: 'receivematerial',
	templateUrl: 'receivematerial.component.html'
})
export class ReceiveMaterialComponent implements OnInit {

	userProjects: Project[];
	selectedUserProject: Project;
	currentUser: User;
	loading = false;

	material: Material;
	receiveMaterialFormGroup: FormGroup;
	myFormValueChanges$;

	constructor(private formBuilder: FormBuilder,
		private router: Router, 
		private materialService: MaterialService, 
		private projectService: ProjectService,
		private alertService: AlertService) {}

	ngOnInit() {
		this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
		this.loadAllProjectsForUser();

		this.receiveMaterialFormGroup = this.formBuilder.group({
			projectId: ['', Validators.required],
			userId : [this.currentUser.id],
			disciplineCode: [''],
			typeOrCategoryCode: [''],
			itemPoNumber: [''],
			description: [''],
			make: [''],
			model: [''],
			receivedQuantity: [''],
			spareQuantity: [''],
			totalQuantity: [''],
			uomCode: [''],
			courierNumber: [''],
			gatePassNumber: [''],
			receivedDate: [''],
			remark: [''],
			tagSerials: this.formBuilder.array([])
		});
		this.myFormValueChanges$ = this.receiveMaterialFormGroup.controls['tagSerials'].valueChanges;
	}

	uomArray : any = [
		{name: 'None', code: '0'},
        {name: 'second', code: '1'},
		{name: 'meter', code: '2'},
		{name: 'kilogram', code: '3'},
		{name: 'newton', code: '4'},
		{name: 'celsius', code: '5'},
		{name: 'kelvin', code: '6'},
	  ];
	  
	  disciplineArray : any = [
		{name: 'None', code: '0'},
        {name: 'Construction', code: '1'},
		{name: 'Software', code: '2'},
		{name: 'Software', code: '3'},
		{name: 'Software', code: '4'},
		{name: 'Software', code: '5'},
		{name: 'Software', code: '6'},
		{name: 'Software', code: '7'},
	  ];
	  
	  typeOrCategoryArray : any = [
		{name: 'None', code: '0'},
        {name: 'Simple Electrical Template', code: '1'},
		{name: 'Custom Electrical Template', code: '2'},
		{name: 'Simple Electrical Template', code: '3'},
		{name: 'Custom Electrical Template', code: '4'},
		{name: 'Simple Electrical Template', code: '5'},
		{name: 'Custom Electrical Template', code: '6'},
		{name: 'Simple Electrical Template', code: '7'},
        {name: 'Custom Electrical Template', code: '8'},
      ];

	private loadAllProjectsForUser() {
		this.projectService.getAllProjectForUser(this.currentUser.id).pipe(first()).subscribe(projects => {
		  this.userProjects = projects;
		});
	  }


	  private getTagSerial() {
		return this.formBuilder.group({
			tagNumber: ['', Validators.required],
			serialNumber: ['', Validators.required]
		});
	  }
	
	  addTagSerial() {
		const control = <FormArray>this.receiveMaterialFormGroup.controls['tagSerials'];
		control.push(this.getTagSerial());
	  }
	
	  removeTagSerial(i: number) {
		const control = <FormArray>this.receiveMaterialFormGroup.controls['tagSerials'];
		control.removeAt(i);
	  }
	
	  clearAllTagSerial() {
		const control = <FormArray>this.receiveMaterialFormGroup.controls['tagSerials'];
		while(control.length) {
		  control.removeAt(control.length - 1);
		}
		control.clearValidators();
	//    control.push(this.getNewSubContractor());
	  }

	onSubmitReceive() {
		this.loading = true;
		
		// stop here if form is invalid
		if (this.receiveMaterialFormGroup.invalid) {
			return;
          }
			
			this.material = <Material>this.receiveMaterialFormGroup.value;
			
		this.materialService.receiveMaterial(this.material)
		.pipe(first())
		.subscribe(
			data =>{
				this.alertService.success('Material Successfully received', true);
				this.router.navigate(['dashboard']);
        	},
        	error => {
          		this.alertService.error(error);
          		this.loading = false;
			});
	}


	onCancel(eventData:any) {
		this.router.navigate(['dashboard']);
	  }
}
