// PT-BR

O que entendi?

O "Simple Factory" tem como objetivo simplificar determinados códigos onde manipulamos informações em diferentes locais, existindo uma certa similaridade na composição. A ideia é que obtenhamos através de um método/factory os elementos comuns e apenas apliquemos o que os torna diferente no contexto respectivo.

Exemplo:

Podemos criar uma factory para compor as caracteristicas de Carros, onde para os carros, as rodas, volante e motor sejam elementos comuns, porém existem diferentes tipos de carros; podemos então usar essa factory para complementar nossa estrutura de "Caminhões" e "Onibus" por exemplo, onde as rodas, volante e motor são comuns entre eles, porém o "tamanho", "peso" e finalidade são diferentes.

Beneficio baseado no exemplo:

A factory tornará o código menor ao centralizar boa parte das informações e possibilitando que escalemos e reutilizemos a estrutura de forma mais simples.