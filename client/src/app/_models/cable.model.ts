export class Cable {

	id: string;

	projectId: string;
	userId: string;

	disciplineCode: string;
	area: string;
	service: string;
	locationFrom: string;
	locationTo: string;
	tagFrom: string;
	tagTo: string;
	size: string;
	type: string;
	length: string;
	tagNumber: string;

	isPulled: boolean;
	isGlanded: boolean
	isTerminated: boolean;

}

export class CablePull {
	cableId: string;
	//pull
	drumNumber: string;
	startLength: string;
	endLength: string;
	pullTechnician: string;
	pullDate: Date;

}

export class CableGland {
	cableId: string;
	//gland
	fromSide: string;
	toSide: string;
	glandFromTechnician: string;
	glandToTechnician: string;
	glandFromDate: Date;
	glandToDate: Date;

}

export class CableTerminate {
	cableId: string;
	//terminate
	terminateFromSide: string;
	terminateToSide: string;
	terminateTechnician: string;
	terminateDate: Date;
}

