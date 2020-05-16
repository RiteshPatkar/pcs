import { Component, OnInit } from '@angular/core';
import {FileSelectDirective, FileUploader} from 'ng2-file-upload';
import {saveAs} from 'file-saver';
import { ScopeDocument, Project, User } from '../_models';
import { ProjectService, ScopeDocumentService, FileService, AlertService } from '../_services';
import { first } from 'rxjs/operators';

import {Router} from '@angular/router';

const MIME_TYPES = {
	pdf : 'application/pdf',
	xls: 'application/vnd.ms-excel',
	xlsx: 'application/vnc.openxmlformats-officedocument.spreadsheetxml.sheet'
}

@Component(
{
	selector: 'scopedocument',
	templateUrl: 'scopedocument.component.html'
})
export class ScopeDocumentComponent implements OnInit {

	loading = false;
	submitted = false;
	
	uploader: FileUploader = new FileUploader({url:''});
	attachmentList: any = [];

	Template_Types:any;
	Upload_Doc_types:any;

	currentUser: User;

	selectedTemplateArray: String[];
	userProjects: Project[];
	selectedUserProject: Project;
	selectedDocumentType: String;

  cableDocumentArray : any = [
        {shortName: 'Simple Cable', name: 'Simple Cable Template', code: '01'},
        {shortName: 'Custom Cable', name: 'Custom Cable Template', code: '02'},
	  ];
	  
	  materialDocumentArray : any = [
        {shortName: 'Simple Material', name: 'Simple Material Template', code: '03'},
        {shortName: 'Custom Material', name: 'Custom Material Template', code: '04'},
	  ];
	  
	  electricalDumentArray : any = [
        {shortName: 'Simple Electrical', name: 'Simple Electrical Template', code: '05'},
        {shortName: 'Custom Electrical', name: 'Custom Electrical Template', code: '06'},
      ];

	constructor(private router : Router, private projectService: ProjectService, private scopeDocumentService: ScopeDocumentService, private fileservice: FileService, private alertService: AlertService) {
		this.uploader.onCompleteItem = (item:any, response:any, status: any, header:any) => {
			this.attachmentList.push(JSON.parse(response));
		}
	}

	ngOnInit() {
		this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
		this.loadAllProjectsForUser();
		this.loadAllScopeDocumentsForProject();
	}

	private loadAllProjectsForUser() {
		this.projectService.getAllProjectForUser(this.currentUser.id).pipe(first()).subscribe(projects => {
		  this.userProjects = projects;
		});
	  }

	private loadAllScopeDocumentsForProject() {
		let currentProject:Project;
		currentProject = JSON.parse(localStorage.getItem("currentProject"));
		// this.scopeDocumentService.getAllScopeDocumentForProject(currentProject.id).pipe(first()).subscribe(scopeDocuments => {
			//alert(JSON.stringify(materials))
			//this.scopeDocuments = scopeDocuments;
		// });
	}

	  shouldEnableDownloadButton() {
		    if(this.selectedTemplateArray && this.selectedTemplateArray.length > 0) {
			  return true;
		  }
		  return false;
	  }

	  shouldEnableUploadButton() {
		if(this.selectedUserProject && this.selectedDocumentType) {
		  return true;
	  }
	  return false;
  }

	  onDownload() {
		  this.selectedTemplateArray.forEach((fileName) => {
			  this.downloadFile(fileName);
		  });
	  }


	  downloadFile(fileName) {
		const EXT = fileName.substr(fileName.lastIndexOf('.') + 1);
		this.fileservice.downloadFile({ 'fileName': fileName})
		.subscribe(data => {
		  saveAs(new Blob([data], {type: MIME_TYPES[EXT]}), fileName);
		})
	  }
}
