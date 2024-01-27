const users = [
  {
    common: [
      {
        name: "user 1",
        age: 12,
        email: "user1@gmail.com"
      },
      {
        name: "user 2",
        age: 16,
        email: "user2@gmail.com"
      },
      {
        name: "user 3",
        age: 13,
        email: "user3@gmail.com"
      },
    ],
    premium: [
      {
        name: "user 4",
        age: 12,
        email: "user4@gmail.com"
      },
      {
        name: "user 5",
        age: 16,
        email: "user5@gmail.com"
      },
      {
        name: "user 6",
        age: 13,
        email: "user6@gmail.com"
      },
    ]
  }
]

// Mudar o nome de user 1 para Marcos.
// Alterar o e-mail do user 2 para "maria@gmail.com"
// Alterar a idade do user 5 para 24 anos

users[0].common[0].name="marcos";
users[0].common[1].email="maria@gmail.com";
users[0].premium[1].age=24;

// Acrescentar dois novos usuários no plano (array) common.
// Pode conter o nome, email e idade de preferência, apenas tem que conter os novos usuários.

users[0].common.push({
  name: "Novo Usuário",
  age: 15,
  email: "novousuario1@gmail.com"
});

users[0].common.push({
  name: "Novo Usuário2",
  age: 10,
  email: "novousuario2@gmail.com"
});

let userscommon = users[0].common;
let userspremium = users[0].premium;

console.log("Tabela de usuários comuns atualizada");
console.table(users[0].common);

console.log("Tabela dos usuários assinantes do Premium atualizada");
console.table(users[0].premium);
