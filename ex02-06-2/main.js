$(document).ready(function() {
    "use strict";
    paper.install(window);
    paper.setup(document.getElementById("mainCanvas"));

    /* ここで描画する */
    let c = Shape.Circle(400, 400, 390);
    c.fillColor = "green";
    paper.view.draw();
});

