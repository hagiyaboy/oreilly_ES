$(document).ready(function() {
    "use strict";
    console.log("main.jsを読み込み中...");

    paper.install(window);
    paper.setup(document.getElementById("mainCanvas"));

    /* ここで描画する */
    let tool = new Tool();

    tool.onMouseDown = function(event){
        let c = Shape.Circle(event.point.x, event.point.y, 20);
        c.fillColor = "green";
    }
    paper.view.draw();
});

