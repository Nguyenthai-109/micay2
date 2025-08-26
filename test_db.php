<?php
require_once "db.php";

$result = pg_query($conn, "SELECT NOW() as time");
$row = pg_fetch_assoc($result);

echo "Giờ trên DB: " . $row['time'];
?>
