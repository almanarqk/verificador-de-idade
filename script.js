function verificar(){
  var data = new Date ()
  var ano = data.getFullYear()
  var fano= document.getElementById('txtano')
  var res = document.querySelector('div#res')
  if (fano.value.length == 0 || fano.value > ano) {
    window.alert('VOCÊ É BURRO? NÃO SABE COLOCAR SUA DATA DE NASCIMENTO?')
  } else {
      var fsex = document.getElementsByName('radsex')
      var idade = ano - fano.value
      var gênero = ''
      var img = document.createElement('img')
      img.setAttribute('id', 'foto')
      if (fsex[0].checked) {
          gênero = 'homem'
          if (idade >=0 && idade < 10){
              //criança
              img.setAttribute('src','criançaM.png')
          } else if (idade < 19) {
              //adolecente
              img.setAttribute('src','adolecenteM.png')
          } else if (idade < 50){
          //adulto
          img.setAttribute('src','adultoM.png')
          } else {
              //idoso
              img.setAttribute('src','velhoM.png')
          }
                } else if (fsex[1].checked){   
          gênero = 'mulher'
          if (idade >=0 && idade < 10){
            //criança
            img.setAttribute('src','criançaF.png')
        } else if (idade < 19){
            //adolecente
            img.setAttribute('src','adolecenteF.png')
        } else if (idade < 50){
        //adulto
        img.setAttribute('src','adultoF.png')
        } else {
            //idoso
            img.setAttribute('src','velhoF.png')
        }
         
    }
      res.style.textAlign= 'center'
      res.innerHTML=`detectamos ${gênero} com ${idade} anos.`
      res.appendChild(img)
  }
}
