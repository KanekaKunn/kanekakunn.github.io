# Portfólio — Marcos Alcantara

Site estático (HTML/CSS/JS puro, sem build) pronto para publicar no GitHub Pages.

## Estrutura

```
index.html       → Home
projetos.html     → Projetos
sobre.html       → Sobre
contato.html     → Contato
css/style.css     → Estilos
js/main.js       → Menu mobile
```

## Como publicar no GitHub Pages

1. Crie um repositório novo no GitHub (ex: `portfolio` ou `seu-usuario.github.io`).
2. Suba todos os arquivos desta pasta para a raiz do repositório (não dentro de uma subpasta).
3. No repositório, vá em **Settings → Pages**.
4. Em **Source**, selecione a branch `main` e a pasta `/root`, depois clique em **Save**.
5. Aguarde alguns minutos — o GitHub mostra o link do site no topo da mesma página (algo como `https://seu-usuario.github.io/portfolio/`).

Se o nome do repositório for `seu-usuario.github.io`, o site fica direto em `https://seu-usuario.github.io/`.

## Trocar os placeholders pelas imagens reais

Cada projeto em `projetos.html` tem uma `div class="project-thumb"` com um ícone no lugar da imagem. Para trocar por uma imagem de verdade:

1. Coloque o arquivo de imagem dentro de `assets/` (ex: `assets/zombie-fps.jpg`).
2. Na `project-thumb` correspondente, troque o conteúdo por:
   ```html
   <img src="assets/zombie-fps.jpg" alt="Descrição da imagem">
   ```
3. Remova a classe de cor (`t-coral`, `t-teal` ou `t-gold`) se quiser que a imagem ocupe o espaço todo, ou mantenha como fundo atrás de uma imagem com transparência.

## Links dos projetos

Em `projetos.html`, cada card tem um botão que hoje aponta para `href="#"` (placeholder) — procure os comentários `<!-- TODO: substituir... -->` acima de cada link e troque pela URL real:

- **FPS estilo COD Zombies** → link do itch.io
- **Catapimbas** (dungeon crawler) → link do itch.io
- **Cavaleiro medieval** → link da página do projeto no ArtStation

## Seletor de idioma (PT/EN)

O site tem um botão PT/EN no canto superior direito do menu. A tradução funciona por atributos `data-i18n="chave"` no HTML — o dicionário com os textos em português e inglês fica em `js/i18n.js`. Pra editar um texto, procure a chave correspondente nesse arquivo (ex: `"home.h1"`) e altere o valor em `pt` e/ou `en`. O idioma escolhido fica salvo no navegador da pessoa que visita o site.

## Editar textos

Todo o conteúdo (nome, bio, projetos, contato) está direto no HTML de cada página — não há CMS nem arquivo de dados separado. Basta abrir o `.html` da página desejada e editar o texto (ou, se o elemento tiver `data-i18n`, editar em `js/i18n.js` para que a tradução continue funcionando).
