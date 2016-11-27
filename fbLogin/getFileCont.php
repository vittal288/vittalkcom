<?php

//$vrl = 'https://www.facebook.com/dialog/oauth?client_id=643887285645160&redirect_uri=http://www.vittalk.com/successPage.html';
$vrl = @$_REQUEST["urlName"];
echo $vrl;
$homepage = file_get_contents($vrl);
echo $homepage;
?>