document.onreadystatechange = function () {
    var loader = document.querySelector(".loader");
    if (document.readyState !== "complete") {
        loader.style.display = "flex";
    }
    else {
        loader.style.display = "none";
    }
};

const counters = document.querySelectorAll('.counter');
const speed = 10; // The higher the number, the slower the count

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        let count = +counter.innerText;

        // Calculate the increment dynamically based on the difference between target and current count
        const increment = target > count ? Math.ceil((target - count) / speed) : -Math.ceil((count - target) / speed);

        if ((target > count && count < target) || (target < count && count > target)) {
            counter.innerText = count + increment;
            setTimeout(updateCount, 2000 / speed);
        } else {
            counter.innerText = target;
        }
    };

    updateCount();
});

