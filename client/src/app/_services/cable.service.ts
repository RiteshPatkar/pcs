import { HttpClient } from '@angular/common/http';
// import {HttpSubscriber} from '../../../shared/http.subsciber';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CORE_SERVICE_URL } from './core.service.constant';
import { Cable, CablePull, CableGland, CableTerminate } from '../_models';

@Injectable()
// export class CableService extends HttpSubscriber {
  export class CableService  {

	constructor(private httpClient: HttpClient) {
		// super();
	}

	// public getCableForProject(projectId: String, onSuccess: (data: Cable []) => any, onFailure: (error: any) => any) {
	// 	// this.subscribe(this.httpClient.get<Cableprogress []>(CORE_SERVICE_URL.CABLE  +  '/cableMaster/?projectId=' + projectId),  onSuccess, onFailure);
    // this.httpClient.get<Cable []>(CORE_SERVICE_URL.CABLE  +  '/cable/?projectId=' + projectId);
	// }

	public getCableForProject(projectId: number) {
		// this.subscribe(this.httpClient.get<Cableprogress []>(CORE_SERVICE_URL.CABLE  +  '/cableMaster/?projectId=' + projectId),  onSuccess, onFailure);
    return this.httpClient.get(CORE_SERVICE_URL.CABLE  +  '/' + projectId);
	}

	public pullCable(request: CablePull) {
		// this.subscribe(this.httpClient.post(CORE_SERVICE_URL.CABLE + '/cableGlanding/', request), onSuccess, onFailure);
    return this.httpClient.post(CORE_SERVICE_URL.CABLE + '/pull', request);
	}

	public glandCable(request: CableGland) {
		// this.subscribe(this.httpClient.post(CORE_SERVICE_URL.CABLE + '/cableGlanding/', request), onSuccess, onFailure);
    return this.httpClient.post(CORE_SERVICE_URL.CABLE + '/glanding', request);
	}

	public terminateCable(request: CableTerminate) {
		// this.subscribe(this.httpClient.post(CORE_SERVICE_URL.CABLE + '/cableProgress/', request), onSuccess, onFailure);
    return this.httpClient.post(CORE_SERVICE_URL.CABLE + '/terminate', request);
	}
}

