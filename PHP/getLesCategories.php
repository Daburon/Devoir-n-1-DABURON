<?php
include 'cnx.php';


$sql = $cnx->prepare("select idCateg, nomCateg from categorie");
$sql->execute();
echo "<select id='lstCateg' onchange='AfficherLesServices()'>";
foreach($sql->fetchAll(PDO::FETCH_ASSOC) as $ligne)
{
    echo "<option value='".$ligne['idCateg']."'>".$ligne['nomCateg']."</option>";
}
echo "</select>";
?>