OCP tem como foco novas features baseadas em métodos/funções/components previamente desenvolvidos e utilizados.

A idea é que funções, métodos e components tenham suas ações base mantidas e que para novos casos uma abstração seja desenvolvida recebendo os novos "comandos" e importante a base antigo. Isso no contexto que tais códigos estejam em uso em vários lugares e/ou que a nova funcionalidade seja direcionada para um caso especifico e limitando o código base para novas implementações, caso nessario; 

Dessa forma vamos manter o código base evitando quebra de funcionalidades e possibilitar o uso em novos casos, reaproveitar a base para contruir a nova especificidade e separar contextos.

Podemos pensar da seguite forma "Ao invés de colocar essa especificidade no meu código antigo, correr o risco de quebrar funcionaldades e tornar o código muito verboso, devo utilizar o base para contruir um novo método e implementar nele minha especificidade"
