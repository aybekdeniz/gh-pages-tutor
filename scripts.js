document.getElementById("menu").addEventListener("click", function() {
    this.classList.toggle("active");
    document.querySelector(" .topbar .topbar-links").classList.toggle("active");
    
});
function validateLogin() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if (!email || !password) {
        alert("Lutfen tum alanlari doldurunuz.");
        return false;
    }
    return true
}
function validateRegister() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if (!name || !email || !password) {
        alert("Lutfen tum alanlari doldurunuz");
        return false;
    }
    return true;
}