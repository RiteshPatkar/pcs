export class MaterialIssue
{
	id : string;
	projectId: string;
	userId: string;

	itemPoNumber: string;
	issuedQuantity: string;
	make: string;
	model: string;
	availableQuantity: string;
	uomCode: string;
	issueReason: string;
	requester: string;
	materialReceiverName: string;
	itemCollectedBy: string;
	issuerRemark: string;
	issueDate: Date;
}
