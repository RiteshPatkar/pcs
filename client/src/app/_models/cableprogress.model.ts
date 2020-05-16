/**
 * Created by: Arvind  Yadav
 * Date: 28/12/2019
 * Organization: Individual	
 */
export class Cableprogress
{
	
	Drum_number: string;
	Start_Length: number;
	End_length: string;
	Technician_Name: string;
	Pulled_Date: Date;
	Search_Cable: string;
	
	constructor() { 
	}
	
	set setDrum_number(value: string) {
		this.Drum_number = value;
	}
	get getDrum_number() : string {
		return this.Drum_number;
	}
	set setStart_Length(value: number) {
		this.Start_Length = value;
	}
	get getStart_Length() : number {
		return this.Start_Length;
	}
	set setEnd_length(value: string) {
		this.End_length = value;
	}
	get getEnd_length() : string {
		return this.End_length;
	}
	set setTechnician_Name(value: string) {
		this.Technician_Name = value;
	}
	get getTechnician_Name() : string {
		return this.Technician_Name;
	}
	set setPulled_Date(value: Date) {
		this.Pulled_Date = value;
	}
	get getPulled_Date() : Date {
		return this.Pulled_Date;
	}
	set setSearch_Cable(value: string) {
		this.Search_Cable = value;
	}
	get getSearch_Cable() : string {
		return this.Search_Cable;
	}
	
}
