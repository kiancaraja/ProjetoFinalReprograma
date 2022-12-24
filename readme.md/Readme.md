PROJETO LIVRE

Eliene Maria da Silva - On18 Todas Em Tech


logo do projeto






Nome Projeto
Salve Pet?


Tema
Interlocução entre pessoas e ongs que procuram ou tenham  pets que aguardam um lar através de adoção responsável.


Objetivos
 Facilitar o acesso de pessoas que buscam adotar pets resgatados e que estejam em situação de abrigo ou lar temporário aguardando um adotante que os leve para um novo lar sob a orientação e acompanhamento destes animais no processo de trasição de institucionalizados para seus respectivos lares em proteção. a estabelecimentos especializados em corte, penteados e manutenção de cabelos crespos e cacheados por parte da população periférica, democratizando assim o acesso a procedimentos e produtos que valorizem a originalidade ancestralidade capilar, desconstruindo, também, estereótipos de beleza ultrapassados.


Desafios:
A estimativa da OMS (Organização Mundial da Saúde) era de que cerca de 30 milhões de cães e gatos viviam em situação de abandono no país até agoto de 2022. Só no Brasil isso sem citar outros países. Em defesa da causa da animal várias são as ongs existentes no Brasil, que segundo pesquisa realizada pelo Instituto Pet, chegando no ano de 2019, o país tinha 370 ONGs de proteção animal, tutelando 172 mil bichos, dados apontados em agosto agosto de 2022.

Proposta:
  Criação de um Pré Projeto de API que realize um CRUD completo conectado a um banco de dados que busca e cadastra animais em situação de abrigo ou lar temporário enquanto aguardam um adotante possibilitando interlocução e uma rede de apoio informações, sensibilizando e orientando, pessoas que buscam adotar um pet de forma segura, responsável e dígna visando a integridade deste animal e fortalencendo o vínculo entre o adotante e seu pet nesta nova transição de relação e adaptação entre família e o pet com objetivos a uma guarda promissora sem risco de reicidencia de abandono, maus tratos ou devolução do mesmo à ong ou lar temporário.
Fazer um CRUD - que contenha as ações de listar, cadastrar, atualizar e excluir dados dos animais que aguardam um adotante nos lares temporários ou nas ongs.

Termo de responsabilidade:
⦁	Não pode haver o mesmo animal cadastrado mais de uma vez;
⦁	Deve haver uma rota que traga todos os animais cadastrados e suas características (para que o adotante identifique e encontre o animal que deseja encontrar por raça e porte) e que a partir desta busca o adotante possa encontrar o animal em conformidade com seus anseios enquanto um guardião de pet partindo dos perfis cadastrados destes animais;
⦁	Deve ser possível atualizar os cadastros dos animais contando com a entrada ou saída destes das ongs ou lares temporários disponíveis;
⦁	Não pode haver duas ou mais ongs ou lares temporários o mesmo telefone;
⦁	Deve haver uma rota que retorne animais ("/animais"): Por nome; raça; porte ou  Por id.
⦁	Deve haver uma rota que retorne animais ("/animais"): Por nome; Por id.
⦁	Deve haver uma rota para cadastro de animais sem autenticação;
⦁	Deve haver uma rota para cadastro de loja com autenticação;
⦁	Deve haver uma rota para cadastro/atualização de animais;
⦁	Deve haver uma rota para cadastro de adotantes;
⦁	Deve haver uma rota para login de adotantes/ongs;
⦁	Deve ser possível adotante entrar em contato com a ong onde encontrar o pet de seu interesse para agendar um horário (reserva deste animal se for o caso) informações, orientações e iniciar o processo de adoção e acompanhamento;

Tecnologias 
⦁	Git/Github
⦁	JavaScript
⦁	MongoDB AtlasName
⦁	Node.js
⦁	Insomnia
⦁	VScode
⦁	Vercel

Dependências
⦁	Cors
⦁	Dotenv
⦁	Express
⦁	Mongoose
⦁	Nodemon

Rotas/EndPoints

GET /animais/all
GET/animais/all
GET/animais/all/:id

Rota que retorna uma lista com todos os animais (opção por nome e por id) cadastrados na API.
HTTP 200 OK


POST/animais/create

Rota que cadastra animais, ongs e telefone na API.
HTTP 201 CREATED

PATCH/animais/update/:id

Rota que atualiza os dados de animais na API pelo seu id. 
HTTP 200 OK 

DELETE/animais/update/:id

Rota que deleta animais na API pelo seu id.
HTTP 204 NO CONTENT

Exemplos?


Desenvolvido por Eliene Maria da Silva;