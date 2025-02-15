function toggleMode(){
  const html = document.documentElement
  /*Esta é a forma de se escrever a função de forma extensa*/
  //  if(html.classList.contains('light')){
    //  html.classList.remove('light')
    // } else {
      //  html.classList.add('light')
      // }
      // Escrevendo a função de forma simples
      html.classList.toggle('light')


 // pegar tag img 
 const img = document.querySelector("#profile img")
 // substituir a imagem
  if(html.classList.contains('light')){
    // se tiver light mode, adicionar imagem light
    img.setAttribute('src', './assets/avatar-light.png')
    img.setAttribute(
      'alt',
      'Foto de Marcos Marcelino sorrindo, usando camisa preta, com fone de ouvido em um local fechado com parede azul, uma porta a direita dele na foto e uma janela ao fundo a esquerda dele'
    )


  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute('src', './assets/avatar.png')
    img.setAttribute(
      'alt',
      'Foto de Marcos Marcelino com a feição de sério, usando camisa preta barba em um local fechado com parede azul, uma porta a direita dele na foto e uma janela ao fundo a esquerda dele'
    )
  }
}