<?php
	$comment = $_POST['comment'];
	$time = date('H:i, jS F Y');

	$DOCUMENT_ROOT = $_SERVER['DOCUMENT_ROOT'];
	$client_ip = $_SERVER['REMOTE_ADDR'];
	
	$comment =$time."\r\nFrom:$client_ip"."\r\n". $comment. "\r\n"."-------------\r\n";
	$fp = fopen("$DOCUMENT_ROOT/ss/comment.txt",'a');
	fwrite($fp,$comment);

	// echo "<meta http-equiv='Content-Type'' content='text/html; charset=utf-8'>";
	echo "留言成功！♪(^∇^*)'";
	
?>