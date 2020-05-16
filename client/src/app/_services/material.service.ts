import { HttpClient } from '@angular/common/http';
// import {HttpSubscriber} from '../../../shared/http.subsciber';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CORE_SERVICE_URL } from './core.service.constant';
import { MaterialRequest } from '../_models/materialrequest.model';
import { MaterialIssue } from '../_models/materialissue.model';
import { Materials } from '../_models/materials.model';
import { Material } from '../_models/material.model';
import { MaterialReturn } from '../_models/materialreturn.model';

@Injectable()
export class MaterialService {
// export class MaterialService extends HttpSubscriber {

	constructor(private httpClient: HttpClient) {
		// super();
	}
	public requestMaterial(request: MaterialRequest, onSuccess: (data: MaterialRequest) => any, onFailure: (error: any) => any) {
		this.httpClient.post(CORE_SERVICE_URL.MATERIAL + '/request/', request);
    // this.subscribe(this.httpClient.post(CORE_SERVICE_URL.MATERIAL + '/request/', request), onSuccess, onFailure);
	}

	// public getAllMaterialsForProject(projectId: String, onSuccess: (data: Materials) => any, onFailure: (error: any) => any) {
	// 	this.httpClient.get<Materials>(CORE_SERVICE_URL.MATERIAL  +  '/getAllMaterialsForProject/'+projectId);
    // // this.subscribe(this.httpClient.get<Materials>(CORE_SERVICE_URL.MATERIAL  +  '/getAllMaterialsForProject/'+projectId),  onSuccess, onFailure);
	// }

	public getAllMaterialsForProject(projectId: number) {
		
		return this.httpClient.get(CORE_SERVICE_URL.MATERIAL + '/'+ projectId);
	  }

	public returnMaterial(request: MaterialReturn, onSuccess: (data: MaterialReturn) => any, onFailure: (error: any) => any) {
		this.httpClient.post(CORE_SERVICE_URL.MATERIAL + '/return/', request);
    // this.subscribe(this.httpClient.post(CORE_SERVICE_URL.MATERIAL + '/return/', request), onSuccess, onFailure);
	}

	public issueMaterial(request: MaterialIssue, onSuccess: (data: MaterialIssue) => any, onFailure: (error: any) => any) {
		this.httpClient.post(CORE_SERVICE_URL.MATERIAL + '/issue/', request);
    // this.subscribe(this.httpClient.post(CORE_SERVICE_URL.MATERIAL + '/issue/', request), onSuccess, onFailure);
	}

	// public receiveMaterial(request: Materialreceive, onSuccess: (data: Materialreceive) => any, onFailure: (error: any) => any) {
	// 	this.httpClient.post(CORE_SERVICE_URL.MATERIAL + '/receive/', request);
    // // this.subscribe(this.httpClient.post(CORE_SERVICE_URL.MATERIAL + '/receive/', request), onSuccess, onFailure);
	// }

	public receiveMaterial(material: Material) {
		return this.httpClient.post(CORE_SERVICE_URL.MATERIAL, material);
	  }
}

