import { HttpClient } from '@angular/common/http';
//import {HttpSubscriber} from '../../../shared/http.subsciber';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CORE_SERVICE_URL } from './core.service.constant';
import { Project } from '../_models/project.model';
import {environment} from '../../environments/environment';

@Injectable()
export class ProjectService {
// export class ProjectService extends HttpSubscriber {

	constructor(private httpClient: HttpClient) {
		// super();
	}
	// public createProject(request: Createproject, onSuccess: (data: Projects) => any, onFailure: (error: any) => any) {
	// 	// this.subscribe(this.httpClient.post(CORE_SERVICE_URL.PROJECT + 'project/', request), onSuccess, onFailure);
  //   return this.httpClient.post(CORE_SERVICE_URL.PROJECT + 'project/', request);
	// }

  public createProject(project: Project) {
    return this.httpClient.post(CORE_SERVICE_URL.PROJECT, project);
  }

  public getAllProjectForUser(userId: number) {
	return this.httpClient.get<Project[]>(CORE_SERVICE_URL.PROJECT + `/user/` + userId);
  }

	public getProjectByid(id: number) {
		return this.httpClient.get(CORE_SERVICE_URL.PROJECT + `/` + id);
	}

	public updateProject(project: Project) {
		return this.httpClient.put(CORE_SERVICE_URL.PROJECT, project);
	}

	public delete(id: number) {
		return this.httpClient.delete(CORE_SERVICE_URL.PROJECT + '/' + id);
	}

}

