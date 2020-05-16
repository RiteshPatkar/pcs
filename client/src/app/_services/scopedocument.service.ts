import { HttpClient } from '@angular/common/http';
//import {HttpSubscriber} from '../../../shared/http.subsciber';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CORE_SERVICE_URL } from './core.service.constant';
import { ScopeDocument } from '../_models/scopedocument.model';
import {environment} from '../../environments/environment';

@Injectable()
export class ScopeDocumentService {

constructor(private httpClient: HttpClient) {
		// super();
	}

  public createScopeDocument(scopeDocument: ScopeDocument) {
    return this.httpClient.post(CORE_SERVICE_URL.SCOPEDOCUMENT, scopeDocument);
  }

  public getAllScopeDocumentForProject(projectId: number) {
	return this.httpClient.get(CORE_SERVICE_URL.SCOPEDOCUMENT + '/'+ projectId);
  }

	public saveOrUpdateScopeDocument(scopeDocument: ScopeDocument) {
		return this.httpClient.post(CORE_SERVICE_URL.SCOPEDOCUMENT, scopeDocument);
	}

	public deleteScopeDocument(scopeDocumentId: number) {
		return this.httpClient.delete(CORE_SERVICE_URL.SCOPEDOCUMENT + '/' + scopeDocumentId);
	}

}

