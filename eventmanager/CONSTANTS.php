<?php
/* Filename: CONSTANTS.php
 * Purpose: Define program constants
 * NOTE: This file excluded from deployment.  To make changes, edit on server.
 *
 * Author: Tom Margosian
 * Date: 3/3/20
 */


// Change application-wide constants here (For white background, set background_image param to 'none'å
$SET_APPLICATION_NAME = "Event Manager";
$SET_BACKGROUND_IMAGE = "assets/images/background_default.jpg";

// Set application base URL
$SET_BASE_URL = "/eventmanager/";

// Set MySQL Database credentials
$SET_DB_SERVER = "localhost";
$SET_DB_USER = "eventmanager";
$SET_DB_PASSWORD = "iste341p1";
$SET_DB_DATABASE = "EventManager";

// Define system-wide constants for project use
define("APPLICATION_NAME", $SET_APPLICATION_NAME);
define("BG_IMAGE", $SET_BACKGROUND_IMAGE);
define("BASE_URL", $SET_BASE_URL);
define("DB_SERVER", $SET_DB_SERVER);
define("DB_USERNAME", $SET_DB_USER);
define("DB_PASSWORD", $SET_DB_PASSWORD);
define("DB_DATABASE", $SET_DB_DATABASE);
