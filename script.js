document.onreadystatechange = function () {
    var loader = document.querySelector(".loader");
    if (document.readyState !== "complete") {
        loader.style.display = "flex";
    }
    else {
        loader.style.display = "none";
    }
};
