<?php
  $guk = $_REQUEST['guk'];
  $gwa = $_REQUEST['gwa'];
  $team = $_REQUEST['team'];

  echo file_get_contents('./data/d'.$guk.$gwa.$team.'.json');
?>