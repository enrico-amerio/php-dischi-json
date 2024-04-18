<?php 
$json_string = file_get_contents('../dischi.json');
$discs = json_decode($json_string, true);

if(isset($_POST['newDiscTitle'])){
  $new_fav = [
    'title' => $_POST['newDiscTitle'],
    'author' => $_POST['newDiscAuthor'],
    'year' => $_POST['newDiscYear'],
    'poster' => $_POST['newDiscPoster'],
    'genre' => $_POST['newDiscGenre'],
    'addedBy' => $_POST['newDiscAddedBy']
  ];
  $discs['favourites'][] = $new_fav;
  file_put_contents('../dischi.json', json_encode($discs, JSON_PRETTY_PRINT));

}
if(isset($_POST['discToDelete'])){
  $discToDelete = $_POST['discToDelete'];
  array_splice($discs['favourites'], $discToDelete,1);
  file_put_contents('../dischi.json', json_encode($discs, JSON_PRETTY_PRINT));
}

header('Content-Type: application/json');
echo json_encode($discs);
?>