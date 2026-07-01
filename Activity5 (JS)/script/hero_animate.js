const wrapper = document.querySelector(".hero");
const home = document.querySelector("#start_home");

const left = document.querySelector(".left");
const right = document.querySelector(".right");

const MAX_SCALE = 0.4;
const MAX_RADIUS = 40;

function remap(value, start, end){

    return Math.min(
        Math.max((value - start)/(end-start),0),
        1
    );

}

window.addEventListener("scroll", () => {

    const animationHeight = wrapper.offsetHeight - window.innerHeight;

    const progress = Math.min(
        Math.max(window.scrollY / animationHeight, 0),
        1
    );

    const scale = 1 - (1 - MAX_SCALE) * progress;
    const radius = MAX_RADIUS * progress;

    const imageProgress = remap(progress, 0.45, 1);

    const leftX = - 300 + 220 * imageProgress;
    left.style.transform = `translate(${leftX}px,-50%)`;

    const rightX = 300 - 220 * imageProgress;
    right.style.transform = `translate(${rightX}px,-50%)`;

    left.style.opacity = imageProgress;
    right.style.opacity = imageProgress;

    home.style.transform = `scale(${scale})`;
    home.style.borderRadius = `${radius}px`;
    home.style.boxShadow = `0 30px 80px rgba(0,0,0,${0.4 * progress})`;
});