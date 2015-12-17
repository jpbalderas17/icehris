/*
This file is part of iCE Hrm.

iCE Hrm is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

iCE Hrm is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with iCE Hrm. If not, see <http://www.gnu.org/licenses/>.

------------------------------------------------------------------

Original work Copyright (c) 2012 [Gamonoid Media Pvt. Ltd]  
Developer: Thilina Hasantha (thilina.hasantha[at]gmail.com / facebook.com/thilinah)
 */

function EmployeeLeaveAdapter(endPoint,tab,filter) {
	this.initAdapter(endPoint,tab,filter);
}

EmployeeLeaveAdapter.inherits(AdapterBase);



EmployeeLeaveAdapter.method('getDataMapping', function() {
	return [
	        "id",
	        "leave_type",
			//"employee",
	        "date_start",
	        "date_end",
	        "leave_status"
	];
});

EmployeeLeaveAdapter.method('getHeaders', function() {
	return [
			{ "sTitle": "ID" ,"bVisible":false},
			{ "sTitle": "Leave Type" },
			//{ "sTitle": "Employee" },
			{ "sTitle": "Leave Start (Date)"},
			{ "sTitle": "Leave End (Date)"},
			{ "sTitle": "Leave Status"}
	];
});

EmployeeLeaveAdapter.method('getFormFields', function() {
	return [
	        [ "id", {"label":"ID","type":"hidden"}],
	        [ "leave_type", {"label":"Leave Type","type":"select","remote-source":["Leave","id","name"]}],
			//[ "employee", {"label":"Employee","type":"placeholder","remote-source":["Employee","id","first_name+last_name"]}],
	        [ "date_start", {"label":"Leave Start (Date)","type":"date","validation":""}],
	        [ "date_end", {"label":"Leave End (Date)","type":"date","validation":""}],
			//[ "leave_status", {"label":"Leave Status","type":"text","placeholder":"2"}],

	];
});

EmployeeLeaveAdapter.method('getFilters', function() {
	return [
	        [ "leave_type", {"label":"Leave Type","type":"select","allow-null":true,"null-label":"All Leave Types","remote-source":["Leave","id","name"]}],
			[ "leave_status", {"label":"Leave Status","type":"select","allow-null":true,"null-label":"All Leave Status","remote-source":["LeaveStatus","id","name"]}]
	        
	];
});
 EmployeeLeaveAdapter.method('forceInjectValuesBeforeSave', function(params) {
	params.leave_status=2;
	return params;
});
 
/*EmployeeLeaveAdapter.method('getActionButtonsHtml', function(id,data) {	
	var editButton = '<img class="tableActionButton" src="_BASE_images/view.png" style="cursor:pointer;" rel="tooltip" title="View" onclick="modJs.edit(_id_);return false;"></img>';
	var deleteButton = '<img class="tableActionButton" src="_BASE_images/delete.png" style="margin-left:15px;cursor:pointer;" rel="tooltip" title="Delete" onclick="modJs.deleteRow(_id_);return false;"></img>';
	var html = '<div style="width:80px;">_edit__delete_</div>';
	
	if(this.showDelete){
		html = html.replace('_delete_',deleteButton);
	}else{
		html = html.replace('_delete_','');
	}
	
	if(this.showEdit){
		html = html.replace('_edit_',editButton);
	}else{
		html = html.replace('_edit_','');
	}
	
	html = html.replace(/_id_/g,id);
	html = html.replace(/_BASE_/g,this.baseUrl);
	return html;
});*/
