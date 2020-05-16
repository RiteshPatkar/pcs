/**
 * Created by: Arvind  Yadav
 * Date: 03/01/2020
 * Organization: Individual	
 */
export class Glandprogress
{
	
	SearchCable: string;
	Gland_FromSide: string;
	Gland_FromTechnician: string;
	Gland_ToSide: string;
	Gland_ToTechnician: string;
	Date_glandFrom: Date;
	Date_glandTo: Date;
	
	constructor() { 
	}
	
	set setSearchCable(value: string) {
		this.SearchCable = value;
	}
	get getSearchCable() : string {
		return this.SearchCable;
	}
	set setGland_FromSide(value: string) {
		this.Gland_FromSide = value;
	}
	get getGland_FromSide() : string {
		return this.Gland_FromSide;
	}
	set setGland_FromTechnician(value: string) {
		this.Gland_FromTechnician = value;
	}
	get getGland_FromTechnician() : string {
		return this.Gland_FromTechnician;
	}
	set setGland_ToSide(value: string) {
		this.Gland_ToSide = value;
	}
	get getGland_ToSide() : string {
		return this.Gland_ToSide;
	}
	set setGland_ToTechnician(value: string) {
		this.Gland_ToTechnician = value;
	}
	get getGland_ToTechnician() : string {
		return this.Gland_ToTechnician;
	}
	set setDate_glandFrom(value: Date) {
		this.Date_glandFrom = value;
	}
	get getDate_glandFrom() : Date {
		return this.Date_glandFrom;
	}
	set setDate_glandTo(value: Date) {
		this.Date_glandTo = value;
	}
	get getDate_glandTo() : Date {
		return this.Date_glandTo;
	}
	
}
