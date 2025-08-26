<?php
$host = getenv("dpg-d2mn0c3uibrs73bjs9kg-a");
$port = getenv("5432");
$dbname = getenv("sasinclone");
$user = getenv("sasinclone_user");
$password = getenv("GGRnJ1OXZemepF8xwQXpIkoauRXJaiOZ");

// Kết nối
$conn = pg_connect("host=$host port=$port dbname=$dbname user=$user password=$password");

if (!$conn) {
    die("Kết nối PostgreSQL thất bại!");
}

// Test
echo "Kết nối PostgreSQL thành công!";
?>
