/**
 * Created by: Arvind  Yadav
 * Date: 29/12/2019
 * Organization: Individual	
 */
export class Punchlistform
{
	
	Punch_Area: string;
	Punch_Location: string;
	Punch_Tag: string;
	Punch_Discipline: string;
	Punch_Observation: string;
	Punch_suggestion: string;
	Punch_doc_reference: string;
	Punch_Type: string;
	Fname_PL_raisedby: string;
	Lname_PL_raisedby: string;
	PL_Observer_Org: string;
	Date_PL: Date;
	
	constructor() { 
	}
	
	set setPunch_Area(value: string) {
		this.Punch_Area = value;
	}
	get getPunch_Area() : string {
		return this.Punch_Area;
	}
	set setPunch_Location(value: string) {
		this.Punch_Location = value;
	}
	get getPunch_Location() : string {
		return this.Punch_Location;
	}
	set setPunch_Tag(value: string) {
		this.Punch_Tag = value;
	}
	get getPunch_Tag() : string {
		return this.Punch_Tag;
	}
	set setPunch_Discipline(value: string) {
		this.Punch_Discipline = value;
	}
	get getPunch_Discipline() : string {
		return this.Punch_Discipline;
	}
	set setPunch_Observation(value: string) {
		this.Punch_Observation = value;
	}
	get getPunch_Observation() : string {
		return this.Punch_Observation;
	}
	set setPunch_suggestion(value: string) {
		this.Punch_suggestion = value;
	}
	get getPunch_suggestion() : string {
		return this.Punch_suggestion;
	}
	set setPunch_doc_reference(value: string) {
		this.Punch_doc_reference = value;
	}
	get getPunch_doc_reference() : string {
		return this.Punch_doc_reference;
	}
	set setPunch_Type(value: string) {
		this.Punch_Type = value;
	}
	get getPunch_Type() : string {
		return this.Punch_Type;
	}
	set setFname_PL_raisedby(value: string) {
		this.Fname_PL_raisedby = value;
	}
	get getFname_PL_raisedby() : string {
		return this.Fname_PL_raisedby;
	}
	set setLname_PL_raisedby(value: string) {
		this.Lname_PL_raisedby = value;
	}
	get getLname_PL_raisedby() : string {
		return this.Lname_PL_raisedby;
	}
	set setPL_Observer_Org(value: string) {
		this.PL_Observer_Org = value;
	}
	get getPL_Observer_Org() : string {
		return this.PL_Observer_Org;
	}
	set setDate_PL(value: Date) {
		this.Date_PL = value;
	}
	get getDate_PL() : Date {
		return this.Date_PL;
	}
	
}
