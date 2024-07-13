const curs_ouline = document.getElementById('cursor-dot-outline');
const curs = document.getElementById('cursor-dot');
const hid = document.querySelector('.uppergo');
const nav = document.querySelector('.navbar');

document.addEventListener('scroll', () => {
    if (window.scrollY > 250) {
        nav.classList.add('scrolled');
        hid.style.display = "block";
    }
    else {
        nav.classList.remove('scrolled');
        hid.style.display = "none";
    }
});

document.onmousemove = (e) => {
    posX = e.pageX;
    posY = e.pageY;
    curs.style.top = `${posY}px`;
    curs.style.left = `${posX}px`;

    curs_ouline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards" });
};

document.addEventListener('scroll', () => {
    const sk = document.querySelectorAll('.ksk');

    if (window.scrollY > 2800) {
        sk.forEach(element => {
            element.classList.add("skill-per")
        });
    };
});

var typed = new Typed('#element', {
    strings: ['A Web Developer', 'A Web Designer', 'A Programmer', 'A Android Developer', 'A Video Editor', 'A Freelancer'],
    typeSpeed: 70,
    backSpeed: 70,
    loop: true,
});


AOS.init();


const c_number = document.querySelectorAll(".data-numbs");
const speed = 200;

document.addEventListener('scroll', () => {
    if (window.scrollY > 4400) {
        c_number.forEach(element => {
            const updateNUMB = () => {
                const targetnumb = parseInt(element.dataset.numb);
                const initial = parseInt(element.innerText);

                const incriment = Math.trunc(targetnumb / speed);

                if (initial < targetnumb) {
                    element.innerHTML = `${initial + incriment}+`
                }
                setTimeout(updateNUMB, 5);
            }

            updateNUMB();
        });
    }
});