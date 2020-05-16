/**
 * Created by: Arvind  Yadav
 * Date: 28/12/2019
 * Organization: Individual	
 */
export class Terminationprogress
{
	
	SelectCable: string;
	Status_TerminationFrom: string;
	Date_TerminationStartFrom: Date;
	Technician_Fromend: string;
	Status_terminationTo: string;
	Date_TerminationFinishFrom: Date;
	Date_TerminationStartTO: Date;
	Technician_Toend: string;
	Date_TerminationFinishTo: Date;
	
	constructor() { 
	}
	
	set setSelectCable(value: string) {
		this.SelectCable = value;
	}
	get getSelectCable() : string {
		return this.SelectCable;
	}
	set setStatus_TerminationFrom(value: string) {
		this.Status_TerminationFrom = value;
	}
	get getStatus_TerminationFrom() : string {
		return this.Status_TerminationFrom;
	}
	set setDate_TerminationStartFrom(value: Date) {
		this.Date_TerminationStartFrom = value;
	}
	get getDate_TerminationStartFrom() : Date {
		return this.Date_TerminationStartFrom;
	}
	set setTechnician_Fromend(value: string) {
		this.Technician_Fromend = value;
	}
	get getTechnician_Fromend() : string {
		return this.Technician_Fromend;
	}
	set setStatus_terminationTo(value: string) {
		this.Status_terminationTo = value;
	}
	get getStatus_terminationTo() : string {
		return this.Status_terminationTo;
	}
	set setDate_TerminationFinishFrom(value: Date) {
		this.Date_TerminationFinishFrom = value;
	}
	get getDate_TerminationFinishFrom() : Date {
		return this.Date_TerminationFinishFrom;
	}
	set setDate_TerminationStartTO(value: Date) {
		this.Date_TerminationStartTO = value;
	}
	get getDate_TerminationStartTO() : Date {
		return this.Date_TerminationStartTO;
	}
	set setTechnician_Toend(value: string) {
		this.Technician_Toend = value;
	}
	get getTechnician_Toend() : string {
		return this.Technician_Toend;
	}
	set setDate_TerminationFinishTo(value: Date) {
		this.Date_TerminationFinishTo = value;
	}
	get getDate_TerminationFinishTo() : Date {
		return this.Date_TerminationFinishTo;
	}
	
}
