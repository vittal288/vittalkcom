 <?php
           /* //Variables for connecting to your database.
            //These variable values come from your hosting account.
            $hostname = "movid.db.11511409.hostedresource.com";
            $username = "movid";
            $dbname = "movid";

            //These variable values need to be changed by you before deploying
            $password = "Password1@";
            $usertable = "tbl_report";
            $yourfield = "state";
        
            //Connecting to your database
            mysql_connect($hostname, $username, $password) OR DIE ("Unable to 
            connect to database! Please try again later.");
            mysql_select_db($dbname);

            //Fetching from your database table.
            $query = "SELECT * FROM $usertable";
            $result = mysql_query($query);

            if ($result) {
                while($row = mysql_fetch_array($result)) {
                    $name = $row["$yourfield"];
                    echo "Name: $name<br>";
                }
            }*/
            
            
            
            
            /**
 * connection settings
 * replace with your own hostname, database, username and password 
 */
$hostname_conn = "182.50.133.151";
$database_conn = "movid";
$username_conn = "movid";
$password_conn = "Password1@";
$conn = mysql_pconnect($hostname_conn, $username_conn, $password_conn) or trigger_error(mysql_error(),E_USER_ERROR);
mysql_select_db($database_conn, $conn);
mysql_query("SET NAMES 'utf8'");
if($conn)
{
     echo "Connected";
     global $conn;
     $query_recordset ="select * from tbl_report";
     $recordset = mysql_query($query_recordset, $conn);
	 if ($recordset)
	 {
		$toret = array();
		while ($row_recordset = mysql_fetch_assoc($recordset)) 
		{
			array_push($toret, $row_recordset);
		}
	}
	else
	{
		$toret = array(
			"data" => array("error" => mysql_error()), 
			"metadata" => array()
		);
	}
	echo json_encode(array('rows'=>$toret));
}
else
{
    echo "Failed";
}
?>

