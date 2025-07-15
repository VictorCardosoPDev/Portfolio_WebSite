function toggleProjeto(header) {
    const conteudo = header.nextElementSibling;
    const isVisible = conteudo.style.display === "flex";
    document.querySelectorAll('.projeto-conteudo').forEach(c => c.style.display = 'none');
    conteudo.style.display = isVisible ? "none" : "flex";
}