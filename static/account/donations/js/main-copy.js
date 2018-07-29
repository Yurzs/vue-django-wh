window.addEventListener("DOMContentLoaded", () => {
    addBtnEffect();

    document.querySelector("div.box").addEventListener("click", function (e) {

        document.querySelectorAll(".payment-form .form").forEach(form => {
            form.style.display = "none";
            form.style.opacity = "0";
        })
        document.querySelectorAll(".payment-method div").forEach(item => {
            item.classList.remove("active");
        });

        var form = document.querySelector(".payment-form");

        if (e.target.classList.contains("paypal") || e.target.classList.contains("webmoney")) {
            form.style.height = "96px";
        } else if (e.target.classList.contains("master-visa")) {
            form.style.height = "96px";
        } else {
            form.style.height = "157px";
        }

        form.style.padding = "20px 55px 40px";

        var activeForm = document.querySelector(`.payment-form .${e.target.classList}`);
        activeForm.style.display = "block";

        e.target.classList.add("active");

        raf(function () {
            activeForm.style.opacity = "1";
        });
    });

    document.querySelectorAll(".form .btn").forEach(btn => {
        btn.addEventListener("click", function (e) {
            // e.preventDefault();

            var spin = e.target.firstChild;
            spin.style.display = "inline-block";

            //имитация ajax
            // setTimeout(() => {
            //     document.querySelector(".card .front").style.transform = "rotateY(180deg)";
            //     document.querySelector(".card .back").style.transform = "rotateY(360deg)";
            //     spin.style.display = "none";
            // }, 1500);

            //удалить setTimeout, раскоментить текущий блок
            document.querySelector(".card .front").style.transform = "rotateY(180deg)";
            document.querySelector(".card .back").style.transform = "rotateY(360deg)";
            spin.style.display = "none";
            
        });
    });
});

function raf(callback) {
    window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
            callback();
        })
    })
}

function addBtnEffect() {
    var btn = document.getElementsByClassName("btn");

    Array.prototype.forEach.call(btn, item => {
        item.addEventListener("click", (e) => {

            var coords = item.getBoundingClientRect();
            var max = Math.max(item.offsetWidth, item.offsetHeight);
            var div = document.createElement("div");
            div.className = "ps";
            div.style.width = max + "px";
            div.style.height = max + "px";

            div.style.left = e.clientX - coords.left - max / 2 + "px";
            div.style.top = e.clientY - coords.top - max / 2 + "px";

            item.appendChild(div);

            setTimeout(function () {
                div.remove();
            }, 600);
        });
    });
}
