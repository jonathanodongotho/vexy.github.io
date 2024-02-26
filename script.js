document.onreadystatechange = function () {
    var loader = document.querySelector(".loader");
    if (document.readyState !== "complete") {
        loader.style.display = "initial";
    }
    else {
        loader.style.display = "none";
    }
};
