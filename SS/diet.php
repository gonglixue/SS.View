<?php
//data
header("Context-Type: application/json;charset-utf8");

$data = array(
	"china"=>array(9,6,20,45,11,8),  //china
	"us"=>array(13,6,37,22,8,14),  // the us
	"india"=>array(1,7,19,57,7,8),
	"brazil"=>array(14,8,28,29,10,11)
	);

if($_SERVER["REQUEST_METHOD"]=="GET"){
	getDiet();
}

function getDiet()
{
	global $data;
	$country = $_GET["country"];
	$country_data = $data[$country];  // 是个数组
	$result = '{ "Meat":'.$country_data[0].
				' ,"Other":'.$country_data[1].
				' ,"Sugar":'.$country_data[2].
				' ,"Grain":'.$country_data[3].
				' ,"Produce": '.$country_data[4].
				' ,"Dairy": '.$country_data[5].
				'}';


	echo $result;


}

?>