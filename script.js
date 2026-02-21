function scrollToFleet(){
    document.getElementById("fleet").scrollIntoView({behavior:"smooth"});
}

window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("scrolled", window.scrollY > 50);
});

const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
    reveals.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            el.classList.add("active");
        }
    });
});

const tramData = {
    "KT8D5": "Classic articulated high-floor tram built by ČKD Tatra. 30m length, bi-directional.",
    "KT8D5.RN2P": "Modernized KT8D5 with low-floor middle section and upgraded electronics.",
    "KT8D5R.N2": "Reconstructed KT8D5 with partial low-floor and export certification.",
    "T6A5.3": "Upgraded T6A5 series with reinforced body and modern traction.",
    "K2S": "Modernized K2 articulated tram with improved passenger interior.",
    "K3P": "Three-section modernization platform. Limited units available.",
    "KT4D": "Compact articulated tram originally produced for German networks."
};

const modal = document.getElementById("tramModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");

document.querySelectorAll(".tram-card").forEach(card => {
    card.addEventListener("click", () => {
        const tram = card.dataset.tram;
        modalTitle.textContent = tram;
        modalDescription.textContent = tramData[tram];
        modal.style.display = "flex";
    });
});

document.querySelector(".close").onclick = () => modal.style.display = "none";
window.onclick = e => { if(e.target == modal) modal.style.display = "none"; };

document.getElementById("bookingForm").addEventListener("submit", function(e){
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const tram = document.getElementById("tramSelect").value;

    if(!name || !email || !tram){
        document.getElementById("formMessage").textContent = "Please fill all fields.";
        return;
    }

    document.getElementById("formMessage").textContent = "Booking request submitted successfully!";
});