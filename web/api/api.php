<?php
function time_cmp($a, $b)
{
	return $a["time"] > $b["time"];
}

function version_cmp($a, $b) {
	return $a["version"] < $b["version"];
}

function scan_dir($dir) {
    $ignored = array('.', '..', '.php', '.html');

    $versions;
	$file = array();
	$count = 0;
    foreach (scandir($dir) as $file) {
        if (in_array($file, $ignored)) continue;
        $files[] = array("time" => filemtime($dir . '/' . $file), "name" => $file);
    }
    usort($files, "time_cmp");
	foreach ($files as $file) {
		$info = array("version" => $count++, "url" => "http://127.0.0.1/assets/". $file["name"], "size" => filesize($dir . "/" . $file["name"]), "time" => filemtime($dir . '/' . $file["name"]));
		$versions[] = $info;
	}
    $files = array_keys($files);

    return $versions;
}

if(@$_GET["request"] == "versions") {
	$files = scan_dir("../assets/");
	usort($files, "version_cmp");
	echo json_encode($files);
}
?>
