#pragma strict

var player: GameObject;

function Update () {
	var screenPoint: Vector3 = Input.mousePosition;
	screenPoint.z = 10.0;
	var worldPoint: Vector3 = camera.ScreenToWorldPoint(screenPoint);
	Debug.Log(worldPoint);
	player.transform.position = worldPoint;
}