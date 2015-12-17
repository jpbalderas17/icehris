<?php 
ini_set('error_log', 'data/icehrm.log');

define('CLIENT_NAME', 'app');
define('APP_BASE_PATH', 'C:\Program Files (x86)\Ampps\www\hris/');
define('CLIENT_BASE_PATH', 'C:\Program Files (x86)\Ampps\www\hris\app/');
define('BASE_URL','http://localhost/hris/');
define('CLIENT_BASE_URL','http://localhost/hris/app/');

define('APP_DB', 'hrisdb');
define('APP_USERNAME', 'root');
define('APP_PASSWORD', 'p@ssword');
define('APP_HOST', 'localhost');
define('APP_CON_STR', 'mysql://'.APP_USERNAME.':'.APP_PASSWORD.'@'.APP_HOST.'/'.APP_DB);

//file upload
define('FILE_TYPES', 'jpg,png,jpeg');
define('MAX_FILE_SIZE_KB', 10 * 1024);
