import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
// import {MatDatepickerModule} from '@angular/material';
import {Router} from '@angular/router';
import {first} from 'rxjs/operators';
import { ProjectService, AlertService } from '../_services';
import { User, Project } from '../_models';

@Component(
{
	selector: 'createproject',
  templateUrl: 'createproject.component.html',
  styleUrls: ['./createproject.component.css']
})
export class CreateProjectComponent implements OnInit {

  projectForm: FormGroup;
  projectLoading = false;
  projectSubmitted = false;
  createUpdateProjectOption : String;

  currentUser: User;
  project: Project;
  userProjects: Project[];
  selectedUserProject: Project;

  loading = false;

  constructor (
    private formBuilder: FormBuilder, 
    private router: Router, 
    private projectService: ProjectService,  
    private alertService: AlertService) 
  {}

  ngOnInit(): void {

    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.loadAllProjectsForUser();

    this.projectForm = this.formBuilder.group({
      projectTitle: ['', Validators.required],
      scopeStatement: ['', Validators.required],
      projectCompany: [''],
      workOrderNumber: [''],
      projectStartDate: [''],
      projectEndDate: [''],
      siteLocation: ['', Validators.required],
      siteAddressLine1: [''],
      siteAddressLine2: [''],
      siteCity: [''],
      siteState: [''],
      siteCountry: [''],
      sitePostalCode: ['']
  });

  this.createUpdateProjectOption = 'create';

  }

    // convenience getter for easy access to form fields
    get f() { return this.projectForm.controls; }

    onProjectSubmit(eventData:any) {

      this.loading = true;

    // stop here if form is invalid
            if (this.projectForm.invalid) {
              return;
          }

          this.project = <Project>this.projectForm.value;

    let currentUsers = JSON.parse(localStorage.getItem('currentUser'));
    this.project.userId = currentUsers.id;

    this.projectService.createProject(this.project)
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success('Project successfully Created', true);
          this.router.navigate(['dashboard']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });

  }

  private loadAllProjectsForUser() {
    this.projectService.getAllProjectForUser(this.currentUser.id).pipe(first()).subscribe(projects => {
      this.userProjects = projects;
    });
  }

  populateSelectedProject() {
    //clone model object value into form
    let cloneObj = Object.assign({}, this.projectForm.getRawValue(), this.selectedUserProject);
    this.projectForm.patchValue(cloneObj);
    
    this.projectForm.controls['projectTitle'].disable();
   
  }

  onCancel(eventData:any) {
    this.router.navigate(['dashboard']);
  }

  onCreateUpdateRadioSelection() {
    if(this.createUpdateProjectOption == 'create') {
      //Reset the form. 
      this.projectForm.controls['projectTitle'].enable();
      // this.projectForm.markAsPristine();
      // this.projectForm.markAsUntouched();
      this.projectForm.reset();
      
    }
  }
}
