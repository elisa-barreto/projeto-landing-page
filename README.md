# Responsive Landing Page with Interactive Image Section

This project consists of a responsive landing page developed as part of my learning in a front-end course. The main objective was to create an attractive and functional web page with an interactive image display section.

## Concepts Addressed

* **Semantic HTML:** The page structure was carefully built using semantic HTML tags to ensure the correct interpretation of the content by browsers and screen readers.
* **CSS for Styling and Responsiveness:** CSS was used to apply attractive visual styles and to make the page adaptable to different devices through Media Queries, ensuring a good experience on desktops and mobile devices. Flexbox was used for the layout of elements such as the header and panels.
* **JavaScript for Interactivity:** JavaScript was implemented to add interactivity to the image section, allowing navigation between them using the "advance" and "back" buttons. This involved DOM manipulation to display the correct images and control the visibility of the buttons.

## My Learnings

During the development of this project, I deepened my knowledge in HTML (semantics), CSS (specificity), and JavaScript (DOM manipulation).

## Challenges and How I Overcame Them

One of the challenges I encountered was when trying to visually indicate when there were no more images to advance or go back to, by changing the opacity of the buttons. Initially, the `.ultimo` class added via JavaScript was not working as expected.

After a careful analysis of my CSS file, I realized that the problem was in the selector specificity. The rule I had defined expected a child element with the `.ultimo` class inside the arrow element, which was not the case. This was because there was a space between `.btn-voltar` and `.ultimo` (and `.btn-avancar` and `.ultimo`). By removing the space between `.btn-voltar` and `.ultimo` (and `.btn-avancar` and `.ultimo`), I told the CSS to apply this style only to the elements that have both classes simultaneously.

# Landing Page Responsiva com Seção de Imagens Interativa

Este projeto consiste em uma landing page responsiva desenvolvida como parte do meu aprendizado em um curso de front-end. O objetivo principal era criar uma página web atraente e funcional, com uma seção de exibição de imagens interativa.

## Conceitos Abordados

* **HTML Semântico:** A estrutura da página foi cuidadosamente construída utilizando tags HTML semânticas para garantir a correta interpretação do conteúdo pelos navegadores 
e leitores de tela.
* **CSS para Estilização e Responsividade:** O CSS foi utilizado para aplicar estilos visuais atraentes e para tornar a página adaptável a diferentes dispositivos através 
de Media Queries, garantindo uma boa experiência em desktops e dispositivos móveis. Foi utilizado Flexbox para o layout de elementos como o cabeçalho e os painéis.
* **JavaScript para Interatividade:** O JavaScript foi implementado para adicionar interatividade à seção de imagens, permitindo a navegação entre elas através dos botões "avançar" e "voltar". Isso envolveu a manipulação do DOM para exibir as imagens corretas e controlar a visibilidade dos botões.

## Meus Aprendizados

Durante o desenvolvimento deste projeto, aprofundei meus conhecimentos em html(semântica), css(especificidade) e javascript(manipulação do DOM)

## Desafios e Como os Superei

Um dos desafios que encontrei foi ao tentar indicar visualmente quando não havia mais imagens para avançar ou voltar, através da mudança de opacidade nos botões. 
Inicialmente, a classe `.ultimo` adicionada via JavaScript não estava funcionando como esperado.

Após uma análise cuidadosa do meu arquivo CSS, percebi que o problema estava na especificidade do seletor. A regra que eu havia definido esperava um elemento filho com a classe `.ultimo` dentro do elemento da seta, o que não era o caso. Pois havia um espaço entre .btn-voltar e .ultimo (e .btn-avancar e .ultimo) e ao remover o espaço entre .btn-voltar e .ultimo (e .btn-avancar e .ultimo), disse ao CSS para aplicar esse estilo apenas aos elementos que possuem ambas as classes simultaneamente.
