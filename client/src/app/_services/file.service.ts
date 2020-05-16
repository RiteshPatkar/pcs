import { HttpClient, HttpParams } from '@angular/common/http';
//import {HttpSubscriber} from '../../../shared/http.subsciber';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CORE_SERVICE_URL } from './core.service.constant';
import {environment} from '../../environments/environment';

@Injectable()
export class FileService {

	constructor(private httpclient: HttpClient) {
	}
	// public createProject(request: Createproject, onSuccess: (data: Projects) => any, onFailure: (error: any) => any) {
	// 	// this.subscribe(this.httpClient.post(CORE_SERVICE_URL.PROJECT + 'project/', request), onSuccess, onFailure);
  //   return this.httpClient.post(CORE_SERVICE_URL.PROJECT + 'project/', request);
	// }


  downloadFile(data : any) {
    // we would call the spring-boot service
    const REQUEST_PARAMS = new HttpParams().set('fileName', data.fileName);
    const REQUEST_URI = 'CORE_SERVICE_URL.FILESERVICE' + 'download/';
    return this.httpclient.get(REQUEST_URI, {
      params: REQUEST_PARAMS,
      responseType: 'arraybuffer'
    })
  }
}

