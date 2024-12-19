# Projeto de Rank de Séries com React

Este projeto tem como objetivo criar uma aplicação de **rank de séries** utilizando **React**. A ideia é permitir que os usuários possam adicionar suas séries favoritas, atribuir notas a elas e visualizar um ranking ordenado com base nas classificações. A aplicação foi desenvolvida com o uso de conceitos do React, como o **`useState`** e **`React Context`**, que facilitam o gerenciamento de estados locais e globais, respectivamente, e garantem uma experiência interativa e eficiente.

## Funcionalidades do Projeto

- **Classificação de Séries**: Usuários podem adicionar suas séries favoritas e atribuir uma pontuação para cada uma, permitindo uma avaliação personalizada.
- **Exibição do Ranking**: A aplicação apresenta as séries em uma lista ordenada com base nas classificações fornecidas pelos usuários, oferecendo uma visão clara do ranking.
- **Interatividade Dinâmica**: A interface da aplicação é reativa, sendo atualizada automaticamente sempre que o usuário faz mudanças nas classificações, graças ao hook **`useState`**.

## Tecnologias Utilizadas

- **React**: Framework utilizado para construir a interface de usuário de forma eficiente e declarativa.
- **`useState`**: Hook do React utilizado para gerenciar o estado local, como a lista de séries e suas respectivas classificações.
- **React Context**: Usado para gerenciar o estado global da aplicação, permitindo que as informações sobre o ranking das séries sejam acessadas e compartilhadas entre diferentes componentes sem a necessidade de passar props manualmente.

---

# Getting Started with Create React App

Este projeto foi inicializado com [Create React App](https://github.com/facebook/create-react-app), uma ferramenta oficial do React que configura automaticamente o ambiente de desenvolvimento.

## Scripts Disponíveis

No diretório do projeto, você pode executar os seguintes scripts:

### `npm start`

Inicia a aplicação em modo de desenvolvimento.  
Abra [http://localhost:3000](http://localhost:3000) no seu navegador para visualizá-la.

A página será recarregada automaticamente quando você fizer alterações no código.  
Você também verá quaisquer erros de lint no console.

### `npm test`

Inicia o runner de testes em modo interativo.  
Para mais informações sobre como rodar testes, consulte a seção de [testes do Create React App](https://facebook.github.io/create-react-app/docs/running-tests).

### `npm run build`

Cria uma versão otimizada da aplicação para produção na pasta `build`.  
Ela irá corretamente agrupar o React em modo de produção e otimizar o build para a melhor performance possível.

O build será minificado e os nomes dos arquivos incluirão hashes.  
Sua aplicação estará pronta para ser implantada.

Veja a seção de [deploy](https://facebook.github.io/create-react-app/docs/deployment) para mais informações.

### `npm run eject`

**Atenção: esta é uma operação irreversível. Após o comando `eject`, você não poderá voltar atrás!**

Caso não esteja satisfeito com as configurações padrão do Create React App, você pode "ejetar" a configuração a qualquer momento. Isso removerá a dependência única de build e copiará todas as configurações (como webpack, Babel, ESLint, etc.) diretamente para o seu projeto, permitindo que você tenha controle total sobre elas. Todos os outros comandos, exceto o `eject`, ainda funcionarão, mas apontarão para os scripts copiados, permitindo que você os modifique conforme necessário.

Você não precisa usar o comando `eject` caso as configurações padrão atendam às suas necessidades.

---
