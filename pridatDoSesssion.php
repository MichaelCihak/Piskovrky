<?
session_start();

// načtení obsahu

$data = json_decode(file_get_contents("php://input"), true); // dekódováno jako pole

$_SESSION["jmeno1"] = $data["jmeno1"];
$_SESSION["jmeno2"] = $data["jmeno2"];

echo "Data byla úspěšně uložena do session.";
?>
