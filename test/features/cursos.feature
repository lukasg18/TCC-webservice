#language: pt
Funcionalidade: Acessar os cursos disponiveis

Essa funcionalidade permite ao usuario acessar os cursos oferecidos.

Cenário: Exibindo todos os cursos
Dado o usuario deseja saber sobre todos os cursos
Quando o usuario solicitar os cursos
Então o sistema retorna a lista de cursos

Cenário: Exibindo os detalhes do curso
Dado o usuario quer saber os detalhes de um curso
E informa o id do curso
Quando o usuario solicitar os detalhes de um detarminado curso
Então o sistema retorna os detalhes daquele curso

Cenário: Exibindo os detalhes do curso inexistente
Dado o usuario quer saber os detalhes de um curso
E informa um id de curso inexistente
Quando o usuario solicitar os detalhes de um detarminado curso
Então o sistema retorna uma mensagem de erro