/**
 * Created by: Arvind  Yadav
 * Date: 29/12/2019
 * Organization: Individual	
 */
export class Punchcloseoutform
{
	
	PL_Search: string;
	PL_ActionTaken: string;
	PL_Close_actionby: string;
	PL_ActionedOn: Date;
	PL_Inspect_comment: string;
	PL_Inspect_name: string;
	Pl_inspect_date: Date;
	PL_approve_comment: string;
	PL_Approver_name: string;
	PL_approve_date: string;
	
	constructor() { 
	}
	
	set setPL_Search(value: string) {
		this.PL_Search = value;
	}
	get getPL_Search() : string {
		return this.PL_Search;
	}
	set setPL_ActionTaken(value: string) {
		this.PL_ActionTaken = value;
	}
	get getPL_ActionTaken() : string {
		return this.PL_ActionTaken;
	}
	set setPL_Close_actionby(value: string) {
		this.PL_Close_actionby = value;
	}
	get getPL_Close_actionby() : string {
		return this.PL_Close_actionby;
	}
	set setPL_ActionedOn(value: Date) {
		this.PL_ActionedOn = value;
	}
	get getPL_ActionedOn() : Date {
		return this.PL_ActionedOn;
	}
	set setPL_Inspect_comment(value: string) {
		this.PL_Inspect_comment = value;
	}
	get getPL_Inspect_comment() : string {
		return this.PL_Inspect_comment;
	}
	set setPL_Inspect_name(value: string) {
		this.PL_Inspect_name = value;
	}
	get getPL_Inspect_name() : string {
		return this.PL_Inspect_name;
	}
	set setPl_inspect_date(value: Date) {
		this.Pl_inspect_date = value;
	}
	get getPl_inspect_date() : Date {
		return this.Pl_inspect_date;
	}
	set setPL_approve_comment(value: string) {
		this.PL_approve_comment = value;
	}
	get getPL_approve_comment() : string {
		return this.PL_approve_comment;
	}
	set setPL_Approver_name(value: string) {
		this.PL_Approver_name = value;
	}
	get getPL_Approver_name() : string {
		return this.PL_Approver_name;
	}
	set setPL_approve_date(value: string) {
		this.PL_approve_date = value;
	}
	get getPL_approve_date() : string {
		return this.PL_approve_date;
	}
	
}
