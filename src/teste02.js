const users = [
    {
      common: [
        {
          name: "Marcos",
          age: 12,
          email: "Marcos@gmail.com"
        },
        {
          name: "Maria",
          age: 16,
          email: "maria@gmail.com"
        },
        {
          name: "Diogo",
          age: 13,
          email: "Diogo@gmail.com"
        },
        {
          name: "Isadora",
          age: 13,
          email: "Isadora@gmail.com"
        },
        {
          name: "Julio",
          age: 24,
          email: "julio@gmail.com"
        },
      ],
      premium: [
        {
          name: "Rafael",
          age: 12,
          email: "Rafael@gmail.com"
        },
        {
          name: "Vanessa",
          age: 24,
          email: "Vanessa@gmail.com"
        },
        {
          name: "Claudio",
          age: 13,
          email: "Claudio@gmail.com"
        },
      ]
    }
  ]
  let userscommon = users[0].common;
  let userspremium = users[0].premium;
  
  console.log("Tabela de usuarios comuns");
  console.table(userscommon);
  
  console.log("Tabela dos usuarios assinantes do Premium");
  console.table(userspremium);
  