import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
// import { MatDialogConfig } from '@angular/material/MatDialogConfig';
import { Cable, CablePull, CableGland, CableTerminate, User, Project } from '../_models';
import { CableService, ProjectService, AlertService } from '../_services';
import { first } from 'rxjs/operators';
import { CablePullDialogComponent } from 'app/_dialog/cablepull/cablepulldialog.component';
import { CableGlandDialogComponent } from 'app/_dialog/cablegland/cableglanddialog.component';
import { CableTerminateDialogComponent } from 'app/_dialog/cableterminate/cableterminatedialog.component';


@Component(
	{
		selector: 'cablemanagement',
		templateUrl: 'cable.component.html'
	})
export class CableComponent  {

    userProjects: Project[];
	selectedUserProject: Project;
    currentUser: User;

	// cables: Cable[] = [];
	cable: Cable;

	state: String;
	cableSelectedFlag: boolean = false;

	loading = false;

	public dataSource = new MatTableDataSource<Cable>();

	displayedCableColumns: string[] = ['Action', 'Discipline', 'Area', 'Service', 'Location From', 'Location To', 'Tag From', 'Tag To', 'Size', 'Type', 'Length', 'Tag', 'Details'];
	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;

	constructor(

        private router: Router,
        private dialog: MatDialog,
		private cableService: CableService,
		private projectService: ProjectService,
		private alertService: AlertService) {

		this.cable = new Cable();
		this.state = "";
	}

	ngOnInit() {
		this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
		this.loadAllProjectsForUser();
	}

	private loadAllProjectsForUser() {
		this.projectService.getAllProjectForUser(this.currentUser.id).pipe(first()).subscribe(projects => {
			this.userProjects = projects;
		});
	}

	private populateCableForSelectedProject() {
		this.cableService.getCableForProject(this.selectedUserProject.id).pipe(first()).subscribe(result => {
			//alert(JSON.stringify(materials))
			//this.materials = <Material[]>result; - Not needed anymore

			this.dataSource.data = result as Cable[];

		});

		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
	}

	public doFilter = (value: string) => {
		this.dataSource.filter = value.trim().toLocaleLowerCase();
	}

	public redirectToDetails = (id: string) => {

	}

	onCablePull(data) {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "60%";
        dialogConfig.data = <Cable>data;
        this.dialog.open(CablePullDialogComponent, dialogConfig);
    }
    
    onCableGland(data) {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "60%";
        dialogConfig.data = <Cable>data;
        this.dialog.open(CableGlandDialogComponent, dialogConfig);
    }
    
    onCableTerminate(data) {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "60%";
        dialogConfig.data = <Cable>data;
        this.dialog.open(CableTerminateDialogComponent, dialogConfig);
	}

	isCableSelected() {
		return this.cableSelectedFlag;
    }
    
    resetCableStatus() {
        if(localStorage.getItem('selectedCable')) {
        var cable = <Cable>JSON.parse(localStorage.getItem('selectedCable'));
        cable.isGlanded = false;
        cable.isPulled = false;
        cable.isTerminated = false;
        localStorage.setItem('selectedCable', JSON.stringify(cable));
        }

    }

}
