<?php
if (!class_exists('LeaveAdminManager')) {
	class LeaveAdminManager extends AbstractModuleManager{
		
		public function initializeUserClasses(){
			
		}
		
		public function initializeFieldMappings(){
			
		}
		
		public function initializeDatabaseErrorMappings(){

		}
		
		public function setupModuleClassDefinitions(){
			
			$this->addModelClass('Leave');
		}
		
	}
}

if (!class_exists('Leave')) {
	class Leave extends ICEHRM_Record {
		var $_table = 'leavetypes';
			
		public function getAdminAccess(){
			return array("get","element","save","delete");
		}
			
		public function getUserAccess(){
			return array();
		}
	}
}

if (!class_exists('LeaveStatus')) {
	class LeaveStatus extends ICEHRM_Record {
		var $_table = 'leavestatus';
			
		public function getAdminAccess(){
			return array("get","element","save","delete");
		}
			
		public function getUserAccess(){
			return array();
		}
	}
}