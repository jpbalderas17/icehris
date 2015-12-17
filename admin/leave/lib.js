/**
 * Author: Thilina Hasantha
 */


/**
 * CompanyLoanAdapter
 */

function LeaveAdapter(endPoint) {
	this.initAdapter(endPoint);
}

LeaveAdapter.inherits(AdapterBase);



LeaveAdapter.method('getDataMapping', function() {
	return [
	        "id",
	        "name"
	];
});

LeaveAdapter.method('getHeaders', function() {
	return [
			{ "sTitle": "ID" ,"bVisible":false},
			{ "sTitle": "Name" }
	];
});

LeaveAdapter.method('getFormFields', function() {
	return [
	        [ "id", {"label":"ID","type":"hidden"}],
	        [ "name", {"label":"Name","type":"text","validation":""}]
	];
});

/*
 * EmployeeCompanyLoanAdapter
 */

function EmployeeLeaveAdapter(endPoint) {
	this.initAdapter(endPoint);
}

EmployeeLeaveAdapter.inherits(AdapterBase);



EmployeeLeaveAdapter.method('getDataMapping', function() {
	return [
	        "id",
	        "leave_type",
			"employee",
	        "date_start",
	        "date_end",
	        "leave_status"
	];
});

EmployeeLeaveAdapter.method('getHeaders', function() {
	return [
			{ "sTitle": "ID" ,"bVisible":false},
			{ "sTitle": "Leave Type" },
			{ "sTitle": "Employee" },
			{ "sTitle": "Leave Start (Date)"},
			{ "sTitle": "Leave End (Date)"},
			{ "sTitle": "Leave Status"}
	];
});

EmployeeLeaveAdapter.method('getFormFields', function() {
	return [
	        [ "id", {"label":"ID","type":"hidden"}],
	        [ "leave_type", {"label":"Leave Type","type":"select","remote-source":["Leave","id","name"]}],
			[ "employee", {"label":"Employee","type":"select2","remote-source":["Employee","id","first_name+last_name"]}],
	        [ "date_start", {"label":"Leave Start (Date)","type":"date","validation":""}],
	        [ "date_end", {"label":"Leave End (Date)","type":"date","validation":""}],
			[ "leave_status", {"label":"Leave Status","type":"select","remote-source":["LeaveStatus","id","name"]}],
	];
});

EmployeeLeaveAdapter.method('getFilters', function() {
	return [
	        [ "employee", {"label":"Employee","type":"select2","allow-null":true,"null-label":"All Employees","remote-source":["Employee","id","first_name+last_name"]}],
	        [ "leave_type", {"label":"Leave Type","type":"select2","allow-null":true,"null-label":"All Leave Types","remote-source":["Leave","id","name"]}]
	        
	];
});
