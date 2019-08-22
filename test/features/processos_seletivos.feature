#language: pt
Funcionalidade: Acessar os processos seletivos disponiveis

Essa funcionalidade permite ao usuario acessar os processos seletivos abertos, previstos e finalizados.

Cenário: Exibindo todos os processos seletivos
Dado o usuario deseja saber sobre todos os processos seletivos
Quando o usuario solicitar os processos seletivos
Então o sistema retorna a lista de processos seletivos

Cenário: Exibindo os detalhes do processo seletivo
Dado o usuario quer saber os detalhes de um processo seletivo
E informa o id do processo seletivo
Quando o usuario solicitar os detalhes de um detarminado processo seletivo
Então o sistema retorna os detalhes daquele processo seletivo

Cenário: Exibindo os detalhes do processo seletivo inexistente
Dado o usuario quer saber os detalhes de um processo seletivo
E informa um id do processo seletivo inexistente
Quando o usuario solicitar os detalhes de um detarminado processo seletivo
Então o sistema retorna uma mensagem de erro

Cenário: Exbindo os cursos relacionados a um processo seletivo
Dado o usuario quer saber os cursos de um processo seletivo
E informa o id do processo seletivo
Quando o usuario solicitar os cursos de um detarminado processo seletivo
Então o sistema retorna uma lista dos cursos relacionados ao processos seletivos

Cenário: Exibindo os cursos do processo seletivo inexistente
Dado o usuario quer saber os cursos de um processo seletivo
E informa um id do processo seletivo inexistente
Quando o usuario solicitar os cursos de um detarminado processo seletivo
Então o sistema retorna uma mensagem de erro