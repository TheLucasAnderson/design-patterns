LSP tem como conceito a estruturação do código de modo que a subsituição entre elementos "pai" e "filho";

A ideia é que objetos/components possam ser substituidos por seus subtipos sem afetar o funcionamento do código.

Dessa forma quando estivermos importando/reutilizando um determinado código seja por herança ou composição (no caso do React) iremos implementar o que diferencia os envolvidos mas caso seja necessario em determinados caso alterar o código pai pelo filho, isso seja possivel sem que instabilidades ocorram.

Podemos pensar da seguinte forma, quando customizamos visualmente um component por exemplo de um design system, estamos aplicando o LSP, pois, numa situação demonstrativa onde esse component é um input no design system e é utilizado em algumas telas, porém em outras o herdamos e customizamos o estilo, ainda assim seria possivel substituir ambos components entre eles, o mesmo pode ocorrer com o composition do react.

Esse é um pricinpio que até então mais apresenta complexidade no entendimento, talvez pelo fato de que os exemplos podem ser visto em objeto e component, não somente em OOO.