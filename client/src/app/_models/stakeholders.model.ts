
export class StakeHolders {
	stakeHolders : StakeHolder[];
}

export class StakeHolder
{
	selectedProjectArray: String[];
	stakeHolderName: String;
	stakeHolderShortName: String;
	workOrderNumber: String;
	subContracters: SubContractor[];
}

export class SubContractor {
	id : String;
	subContractorName: String;
	SubContractorShortName: String;
	workOrderNumber: String;
}
