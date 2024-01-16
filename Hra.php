<?php
session_start();

$jmeno1 = isset($_SESSION["jmeno1"]) ? $_SESSION["jmeno1"] : "";
$jmeno2 = isset($_SESSION["jmeno2"]) ? $_SESSION["jmeno2"] : "";

if ($jmeno1 == "") {
    echo "Jméno hráče 1 není uloženo";
}

if ($jmeno2 == "") {
    echo "Jméno hráče 2 není uloženo";
}
?>

<!DOCTYPE html>
<html lang="cs">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="./Scripty/herniPole.js"></script>
    <script src="./Scripty/KontrolaVyhry.js"></script>
    <link rel="stylesheet" type="text/css" href="./Styl/herniPoleStyl.css">
    <title>Piškvorky</title>
</head>
<body id="hraBody">
    <h1 id="nadpis">Piškvorky</h1>

<?php
    print "<p id = 'hraciOba'>Hráči:</p>";
    print "<p id = 'jmenoh1'>1. $jmeno1</p>";
    print "<p id = 'jmenoh2'>2. $jmeno2</p>";
    ?>

 <div id="moznosti">
<label for="velikostPole">Vyberte velikost pole:</label>
    <select id="velikostPole">
        <option value="3">3x3</option>
        <option value="4">4x4</option>
        <option value="5">5x5</option>

    </select>
</div>
</body>
</html>
