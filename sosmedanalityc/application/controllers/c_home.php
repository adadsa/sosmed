<?php

class c_home extends CI_Controller{

	function __construct(){
		parent::__construct();
		$this->load->helper(array('form', 'url'));
		$this->user_authentication->logged_in('c_dashboard', 'user_id');
	}

	function index(){
		$this->load->view('homepage/main');
	}
	
	function get_request(){
		$this->library->request_token();
	}
}