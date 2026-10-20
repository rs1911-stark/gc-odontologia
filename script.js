const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
  menuToggle.textContent = isOpen ? "×" : "☰";
});
mainNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  mainNav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Abrir menu");
  menuToggle.textContent = "☰";
}));
document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("bookingForm").addEventListener("submit", event => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const name = String(form.get("name") || "").trim();
  const phone = String(form.get("phone") || "").trim();
  const service = String(form.get("service") || "").trim();
  const date = String(form.get("date") || "").trim();
  const message = String(form.get("message") || "").trim();
  const lines = [
    "Olá! Gostaria de consultar um horário na GC Odontologia.",
    "",
    "Nome: " + name,
    phone ? "Telefone: " + phone : "",
    "Atendimento: " + service,
    date ? "Período preferido: " + date : "",
    message ? "Observação: " + message : "",
    "",
    "Se possível, me informem a disponibilidade. Obrigado(a)!"
  ].filter(Boolean);
  window.open("https://wa.me/5511980328389?text=" + encodeURIComponent(lines.join("\n")), "_blank", "noopener,noreferrer");
});