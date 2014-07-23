

var smile =[{top: 3, left:3}, {top: 3, left:5}, {top:5, left: 2}, {top:6, left: 3}, {top:6, left: 4}, {top:6, left: 5}, {top:5, left: 6}];


var drawSnake = function(snakeToDraw) {
	var drawableSnake = { color: "green", pixels: snakeToDraw};
	var drawableObjects = [drawableSnake];
	CHUNK.draw(drawableObjects);
}

var moveSegment = function(segment) {
	if (segment.direction === "down") {
		return {top: segment.top + 1, left: segment.left}
	} else if (segment.direction === "up") {
		return {top: segment.top - 1, left: segment.left}
	} else if (segment.direction === "right") {
		return {top: segment.top, left: segment.left + 1}
	} else if (segment.direction === "left") {
		return {top: segment.top, left: segment.left + 1}
	}
	return segment;
}

var moveSnake = function(snake) {
	var oldSegment = snake[0];
	var newSegment = moveSegment(oldSegment);
	newSegment.direction = oldSegment.direction;
	var newSnake = [newSegment];
	return newSnake;
}

var advanceGame = function() {
	snake = moveSnake(snake);
	drawSnake(snake);
}


var snake = [{ top: 0, left: 0, direction: "right"}];
	//array containing one object; keys and values 
CHUNK.executeNTimesPerSecond(advanceGame, 1);