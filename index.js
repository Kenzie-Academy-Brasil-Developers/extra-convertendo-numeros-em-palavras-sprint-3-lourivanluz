const unidade = {0:'zero',1:'um',2:'dois',3:'três',4:'quatro',5:'cinco',6:'seis',7:'sete',8:'oito',9:'nove'}
const dezena1 = {0:'dez',1:'onze',2:'doze',3:'treze',4:'quatorze',5:'quinze',6:'desesseis',7:'desessete',8:'dezoito',9:'dezenove'}
const dezena = {0:'',2:'vinte',3:'trinta',4:'quarenta',5:'cinquanta',6:'sessenta',7:'setenta',8:'oitotenta',9:'noveventa'}
const centena = {100:'cem',1:'cento',2:'duzentos',3:'trezentos',4:'quatrocentos',5:'quinhentos',6:'seiscentos',7:'setecentos',8:'oitocentos',9:'novecentos'}
const milhar = {1000:'mil'}


const botao = document.querySelector('#Converter')
botao.addEventListener('click',()=>{
    const numeroObj = document.querySelector('#input_numero')
    const numero = numeroObj.value
    const result = document.querySelector('#resposta')
    let resultado = '<br>'
    result.innerHTML = ''
    numeroObj.value = ''

        if(numero.length ===4){
            resultado+= milhar[numero];
        }

        if (numero.length ===3){
            
            if(numero[0]=== '1'){  
                if(numero[1]==='0'&& numero[2]==='0'){
                    resultado+= centena[numero];
                }else{
                    resultado+=centena[numero[0]]
                    if(numero[1]==='1'){
                        resultado+= ' e '+dezena1[numero[2]] 
                    }else{
                        if(numero[1]!=='0'){
                            resultado+=' e '+dezena[numero[1]]
                        }
                        if(numero[2]!=='0'){
                            resultado+=' e '+unidade[numero[2]]
                        }
                    } 
                }
            }else{
                resultado+=centena[numero[0]]
                if(numero[1]!=='0'){
                    resultado+=' e '+dezena[numero[1]]
                }
                if(numero[2]!=='0'){
                    resultado+=' e '+unidade[numero[2]]
                }
            }
        }
        if (numero.length ===2 && numero >=20){
            resultado+=dezena[numero[0]]
            
            if (numero[1]!=='0'){ /// gambiarra ?

                resultado+=' e '+unidade[numero[1]] 
            }
        }
        if (numero.length ===2 && numero < 20){
            resultado+=dezena1[numero[1]]
        }
        
        if(numero.length===1){
            resultado+= unidade[numero]
        }

        
    result.innerHTML = resultado
})