<?php
if (!class_exists('LeaveModulesManager')) {
	
	class LeaveModulesManager extends AbstractModuleManager{

		public function initializeUserClasses(){
			if(defined('MODULE_TYPE') && MODULE_TYPE != 'admin'){
				$this->addUserClass("EmployeeLeave");
			}
		}

		public function initializeFieldMappings(){
				
		}

		public function initializeDatabaseErrorMappings(){

		}

		public function setupModuleClassDefinitions(){
			
			$this->addModelClass('EmployeeLeave');
			
		}

	}
}


if (!class_exists('EmployeeLeave')) {

	class EmployeeLeave extends ICEHRM_Record {
		var $_table = 'employeeleaves';

		public function getAdminAccess(){
			return array("get","element","save","delete");
		}

		public function getManagerAccess(){
			return array("get","element");
		}

		public function getUserAccess(){
			return array("get");
		}

		public function getUserOnlyMeAccess(){
			return array("get","element","save","delete");
		}
	}
}

