PROJETO LIVRE

Reprograma

Eliene Maria da Silva - On18 Todas Em Tech

Nome Projeto

Adote um Pet!

Tema

Interlocução entre pessoas e animais que esperam por um adotante nas ongs ou lares temporários para adoção responsável.

Objetivos

 Facilitar o acesso de pessoas que buscam adotar pets resgatados e que estejam em situação de abrigo ou lar temporário aguardando um adotante que os leve para um novo lar sob a orientação e acompanhamento destes adotants e os animais no processo de trasição de institucionalizados para a inserção em seus respectivos lares protejidos.

Desafios:

A estimativa da OMS (Organização Mundial da Saúde) era de que cerca de 30 milhões de cães e gatos viviam em situação de abandono no país até agoto de 2022. Só no Brasil isso sem citar outros países. Em defesa da causa da animal várias são as ongs existentes no Brasil, que segundo pesquisa realizada pelo Instituto Pet, chegando no ano de 2019, o país tinha 370 ONGs de proteção animal, tutelando 172 mil bichos, dados apontados em agosto de 2022.

Proposta:

  Criação de um Pré Projeto de API que realize um CRUD completo conectado a um banco de dados que busca,cria,cadastra e deleta animais em situação de abrigo ou lar temporário enquanto aguardam um adotante possibilitando interlocução e uma rede de apoio com informações, sensibilização e orientações fomentando o interesse das pessoas por adotar um pet de forma segura, responsável e dígna visando a integridade deste animal e fortalencendo o vínculo entre o adotante e seu pet neste lar para que, a relação e adaptação entre família e o pet,realize a guarda de forma responsável, sem risco de reincidência de abandono, maus tratos ou devolução do mesmo para esta ong ou este lar temporário.

Fazer um CRUD - que contenha as ações de criar, cadastrar, atualizar e excluir dados dos animais que aguardam um adotante nos lares temporários ou nas ongsdeste banco de dados.

Proibições:

⦁	Não pode haver o mesmo animal cadastrado mais de uma vez;
⦁	Deve haver uma rota que traga todos os animais cadastrados por características (para que o adotante identifique e encontre o animal que procura por nome; porte, telefone ou id);
⦁	Deve ser possível atualizar os cadastros dos animais;
⦁	Deve haver uma rota que retorne animais ("/animais"): Por nome; porte ou  Por id.
⦁	Deve haver uma rota que retorne animais ("/animais"): Por nome; Por id.
⦁	Deve haver uma rota para cadastro/atualização de animais;

Tecnologias 

⦁	Git/Github
⦁	JavaScript
⦁	MongoDB AtlasName
⦁	Node.js
⦁	Insomnia
⦁	VScode
⦁	Vercel

Dependências

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

Desenvolvido por Eliene Maria da Silva
Assistente Social - desde 2004;em transição para a carreira de Dev Back - pela escola Reprograma - Curso Todas em Tech - Turma On18. 