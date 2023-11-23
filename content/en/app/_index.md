---
# SPDX-FileCopyrightText: 2022 100µPET
# SPDX-License-Identifier: CC-BY-4.0
title: "Check for yourself!"
menu:
  main:
    weight: 40
---

<!DOCTYPE html>
<html lang="en">
	<head>
	    <meta charset="UTF-8" />
	    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
	    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link rel="stylesheet" type="text/css" href="../styles.css">
	</head>
		<style>
  			/* Custom CSS to style the disabled dat.GUI control */
  			.disabled .property-name,
  			.disabled .c input[type="text"] {
    		color: #999 !important;
  			}
		</style>
		<div style="margin-top: 3em; margin-left: -1em;">
			<label for="file_GEN"></label>
			<input type="file" name="file_GEN" id="file_GEN" label="LOR GEN file"/>
			<label for="file_GEN">(Formats supported: 3dm, epd)</label>
		</div>
		<div style="display: flex; flex-direction: column; align-items: center; margin-top: 0em;">
			<div id="scene-container" style="height: 86vh;"></div>
			<script src="https://cdn.jsdelivr.net/npm/three@0.155.0/build/three.js"></script>
			<script src="https://cdn.jsdelivr.net/npm/three@0.132.2/examples/js/loaders/GLTFLoader.js"></script>
			<script src="https://cdn.jsdelivr.net/npm/three@0.132.2/examples/js/libs/stats.min.js"></script>
			<script src="https://cdn.jsdelivr.net/npm/three@0.132.2/examples/js/libs/dat.gui.min.js"></script>
			<script src="https://cdn.jsdelivr.net/npm/three@0.132.2/examples/js/controls/OrbitControls.js"></script>
	    	<script type="importmap"> { "imports": { "three": "https://unpkg.com/three@0.155.0/build/three.module.js" } } </script>
	    	<script src="main.js"></script>
		</div>
	
</html>
