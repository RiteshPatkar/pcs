import { HttpClient } from '@angular/common/http';
//import {HttpSubscriber} from '../../../shared/http.subsciber';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CORE_SERVICE_URL } from './core.service.constant';
import { StakeHolder } from '../_models/stakeholders.model';
import {environment} from '../../environments/environment';

@Injectable()
export class StakeHolderService {

constructor(private httpClient: HttpClient) {
		// super();
	}

  public createStakeholder(stakeholder: StakeHolder) {
    return this.httpClient.post(CORE_SERVICE_URL.STAKEHOLDER, stakeholder);
  }

  public getAllStakeHolderForProject(projectId: number) {
	return this.httpClient.get(CORE_SERVICE_URL.STAKEHOLDER + '/'+ projectId);
  }

	public saveOrUpdateStakeHolder(stakeholder: StakeHolder) {
		return this.httpClient.post(CORE_SERVICE_URL.STAKEHOLDER, stakeholder);
	}

	public deleteStakeHolder(stakeHolderId: number) {
		return this.httpClient.delete(CORE_SERVICE_URL.STAKEHOLDER + '/' + stakeHolderId);
	}

}

