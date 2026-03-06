# Instalação do Laravel

## [Conheça o Laravel](https://laravel.com/docs/12.x/installation#meet-laravel)

Laravel é um framework para aplicações web com sintaxe expressiva e elegante. Um framework web fornece uma estrutura e um ponto de partida para a criação da sua aplicação, permitindo que você se concentre em criar algo incrível enquanto nós cuidamos dos detalhes.

O Laravel se esforça para fornecer uma experiência incrível ao desenvolvedor, ao mesmo tempo em que fornece recursos poderosos, como injeção de dependência completa, uma camada de abstração de banco de dados expressiva, filas e trabalhos agendados, testes de unidade e integração e muito mais.

Seja você iniciante em frameworks web PHP ou tenha anos de experiência, o Laravel é um framework que pode crescer com você. Ajudaremos você a dar seus primeiros passos como desenvolvedor web ou daremos um impulso para que você aprimore sua expertise. Mal podemos esperar para ver o que você criará.

### [Por que Laravel?](https://laravel.com/docs/12.x/installation#why-laravel)

Há uma variedade de ferramentas e frameworks disponíveis para você criar uma aplicação web. No entanto, acreditamos que o Laravel é a melhor escolha para criar aplicações web modernas e full-stack.

### Uma Estrutura Progressiva

Gostamos de chamar o Laravel de um framework "progressivo". Com isso, queremos dizer que o Laravel cresce com você. Se você está apenas dando os primeiros passos no desenvolvimento web, a vasta biblioteca de documentação, guias e [tutoriais em vídeo](https://laracasts.com/) do Laravel ajudará você a aprender o básico sem se sentir sobrecarregado.

Se você é um desenvolvedor sênior, o Laravel oferece ferramentas robustas para [injeção de dependências](https://laravel.com/docs/12.x/container) , [testes unitários](https://laravel.com/docs/12.x/testing) , [filas](https://laravel.com/docs/12.x/queues) , [eventos em tempo real](https://laravel.com/docs/12.x/broadcasting) e muito mais. O Laravel é otimizado para a construção de aplicações web profissionais e está pronto para lidar com cargas de trabalho corporativas.

### Uma estrutura escalável

O Laravel é incrivelmente escalável. Graças à natureza amigável do PHP e ao suporte integrado do Laravel para sistemas de cache distribuídos e rápidos, como o Redis, o escalonamento horizontal com o Laravel é muito fácil. De fato, os aplicativos Laravel foram facilmente escaláveis ​​para lidar com centenas de milhões de solicitações por mês.

Precisa de escalabilidade extrema? Plataformas como [o Laravel Cloud](https://cloud.laravel.com/) permitem que você execute seu aplicativo Laravel em escala quase ilimitada.

### Uma Estrutura Comunitária

O Laravel combina os melhores pacotes do ecossistema PHP para oferecer o framework mais robusto e amigável ao desenvolvedor disponível. Além disso, milhares de desenvolvedores talentosos do mundo todo [contribuíram para o framework](https://github.com/laravel/framework) . Quem sabe você até se torna um colaborador do Laravel?

## [Criando uma aplicação Laravel](https://laravel.com/docs/12.x/installation#creating-a-laravel-project)

### [Instalando o PHP e o instalador do Laravel](https://laravel.com/docs/12.x/installation#installing-php)

Antes de criar seu primeiro aplicativo Laravel, certifique-se de que sua máquina local tenha [PHP](https://php.net/) , [Composer](https://getcomposer.org/) e [o instalador do Laravel](https://github.com/laravel/installer) instalados. Além disso, você deve instalar [o Node e o NPM](https://nodejs.org/) ou [o Bundle](https://bun.sh/) para poder compilar os recursos de front-end do seu aplicativo.

Se você não tiver o PHP e o Composer instalados em sua máquina local, os comandos a seguir instalarão o PHP, o Composer e o instalador do Laravel no macOS, Windows ou Linux:

**No macOS:**

    /bin/bash -c  "$(curl -fsSL  https://php.new/install/mac/8.4)"

**No WindowsPowerShell:**

    # Run as administrator...
    Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://php.new/install/windows/8.4'))

**No Linux:**

    /bin/bash -c "$(curl -fsSL https://php.new/install/linux/8.4)"

Após executar um dos comandos acima, reinicie sua sessão de terminal. Para atualizar o PHP, o Composer e o instalador do Laravel após instalá-los via `php.new`, você pode executar o comando novamente no seu terminal.

Se você já tem o PHP e o Composer instalados, você pode instalar o instalador do Laravel via Composer:

    composer global require laravel/installer

#   

### [Criando um aplicativo](https://laravel.com/docs/12.x/installation#creating-an-application)

Após instalar o PHP, o Composer e o instalador do Laravel, você estará pronto para criar uma nova aplicação Laravel. O instalador do Laravel solicitará que você selecione seu framework de testes, banco de dados e kit inicial preferidos:

    laravel new example-app

## ⚙️ Parte 2: Configurando um Projeto Laravel

### 1. **Acesse a pasta do seu projeto Laravel no PowerShell**

Se você já tem o projeto Laravel baixado (por exemplo, via Git), entre na pasta com:

```bash
cd caminho\da\sua\pasta
```

Exemplo:

```bash
cd C:\Users\seuUsuario\Documents\projeto-laravel
```

### 2. **Instalar as dependências PHP com o Composer**

No terminal:

```bash
composer install
```

* Isso criará a pasta `vendor/` com todas as bibliotecas do Laravel.

### 3. **Instalar as dependências do front-end (JavaScript)**

No mesmo terminal:

```bash
npm install
```

* Este comando instalará as bibliotecas JavaScript que o Laravel utiliza (ex: Vite, Tailwind, etc).

### 4. **Compilar os arquivos JS/CSS**

Após o `npm install`, rode:

```bash
npm run build
```

* Esse comando vai gerar os arquivos compilados e prontos para uso no navegador.

---

### 5. **Configurar o arquivo `.env`**

1. **Abra o Visual Studio Code** (VS Code).

   ```bash
   code .
   ```

2. No VS Code, localize o arquivo `.env.example`.

3. Clique com o botão direito sobre ele e escolha **Copiar**. Em seguida, clique com o botão direito na pasta e escolha **Colar**.

4. Renomeie o novo arquivo de `env.example` para `.env` (inclua o ponto no início!).

5. Este arquivo `.env` é onde ficam as configurações da aplicação, como nome do app, conexão com banco de dados, porta etc.

---

### 6. **Gerar a chave única do Laravel**

No terminal PowerShell:

```bash
php artisan key:generate
```

* Este comando cria uma chave de segurança única para o projeto funcionar corretamente.

---

### 7. **Executar as migrações do banco de dados**

Ainda no terminal:

```bash
php artisan migrate
```

* Ele vai perguntar se você deseja continuar. Digite `yes` e pressione Enter.

* Esse comando cria as tabelas padrão do Laravel no banco de dados configurado no seu `.env`.

---

## ✅ Pronto!

Seu projeto Laravel agora está:

* Com as dependências instaladas
* Arquivos JS compilados
* Ambiente `.env` configurado
* Tabelas do banco criadas

Se quiser iniciar o servidor Laravel:

```bash
php artisan serve
```

Acesse no navegador: [http://127.0.0.1:8000](http://127.0.0.1:8000)

---


# 📘 Documentação Didática: Criando uma View no Laravel e Trabalhando com Tailwind CSS

[](https://github.com/ViniciusDinisDias/pwii-Vinicius-Oliveira#-documenta%C3%A7%C3%A3o-did%C3%A1tica-criando-uma-view-no-laravel-e-trabalhando-com-tailwind-css)

## 🧠 Objetivo

[](https://github.com/ViniciusDinisDias/pwii-Vinicius-Oliveira#-objetivo)

Esta documentação tem como propósito ensinar de forma clara, prática e explicativa como:

-   Criar uma  **view**  no Laravel usando Blade
    
-   Integrar e utilizar  **Tailwind CSS**
    
-   Compreender  **cada etapa**,  **cada comando**  e  **cada linha de código**
    
-   Aplicar  **boas práticas**  para desenvolvimento web moderno
    

----------

## 🛠️ Pré-requisitos

[](https://github.com/ViniciusDinisDias/pwii-Vinicius-Oliveira#%EF%B8%8F-pr%C3%A9-requisitos)

Antes de seguir este tutorial, certifique-se de que tem os seguintes itens instalados:

-   PHP ≥ 8.1
    
-   Composer
    
-   Laravel
    
-   Node.js e NPM
    

Você pode verificar suas versões com:

php -v
composer -V
npm -v

----------

## 📦 1. O que é uma View no Laravel?

[](https://github.com/ViniciusDinisDias/pwii-Vinicius-Oliveira#-1-o-que-%C3%A9-uma-view-no-laravel)

No Laravel, uma  **view**  (ou visão) é um  **arquivo responsável por apresentar o conteúdo HTML ao usuário**.

Ela geralmente fica em:

```
resources/views/


```

As views usam o sistema de templates chamado  **Blade**, exclusivo do Laravel.  
Com Blade, podemos incluir lógica simples diretamente no HTML, como:

@if($usuario)
  <p>Bem-vindo, {{ $usuario->nome }}!</p>
@endif

Ou estender layouts:

@extends('layouts.app')

----------

## ✨ 2. O que é o Tailwind CSS?

[](https://github.com/ViniciusDinisDias/pwii-Vinicius-Oliveira#-2-o-que-%C3%A9-o-tailwind-css)

O  **Tailwind CSS**  é um framework CSS baseado em  **classes utilitárias**.

> **Utilitário**  significa que cada classe tem uma função específica e direta.  
> Ex:  `bg-blue-500`  define a cor de fundo azul.  `p-4`  define padding de 1rem.

Ao contrário de frameworks como Bootstrap, ele não vem com componentes prontos.  
Você  **monta a interface**  com classes, como peças de LEGO.

Vantagens:

-   Menos arquivos CSS personalizados
    
-   Responsividade nativa
    
-   Estilização rápida e consistente
    
-   Fácil de manter em projetos grandes
    

----------

## 🚀 3. Criando um Projeto Laravel + Tailwind CSS

[](https://github.com/ViniciusDinisDias/pwii-Vinicius-Oliveira#-3-criando-um-projeto-laravel--tailwind-css)

### 3.1 Criar um novo projeto Laravel

[](https://github.com/ViniciusDinisDias/pwii-Vinicius-Oliveira#31-criar-um-novo-projeto-laravel)

composer create-project laravel/laravel minha-aplicacao
cd minha-aplicacao

### 3.2 Instalar Tailwind CSS

[](https://github.com/ViniciusDinisDias/pwii-Vinicius-Oliveira#32-instalar-tailwind-css)

npm install -D tailwindcss
npx tailwindcss init

> Isso criará o arquivo  `tailwind.config.js`, onde configuramos os caminhos de onde Tailwind vai procurar classes CSS.

### 3.3 Configurar Tailwind

[](https://github.com/ViniciusDinisDias/pwii-Vinicius-Oliveira#33-configurar-tailwind)

Abra o arquivo  `tailwind.config.js`  e edite:

module.exports = {
  content: [
    './resources/**/*.blade.php', // views Blade
    './resources/**/*.js',        // scripts JS
    './resources/**/*.vue',       // componentes Vue, se usar
  ],
  theme: {
    extend: {}, // você pode customizar temas aqui
  },
  plugins: [],
}

### 3.4 Criar o arquivo CSS com Tailwind

[](https://github.com/ViniciusDinisDias/pwii-Vinicius-Oliveira#34-criar-o-arquivo-css-com-tailwind)

Crie o arquivo  `resources/css/app.css`  com o seguinte conteúdo:

@tailwind base;
@tailwind components;
@tailwind utilities;

> Isso carrega as funcionalidades principais do Tailwind.

----------

## ⚙️ 4. Compilando com Vite

[](https://github.com/ViniciusDinisDias/pwii-Vinicius-Oliveira#%EF%B8%8F-4-compilando-com-vite)

Laravel usa o  **Vite**  como sistema de build moderno.

No arquivo  `vite.config.js`, verifique se está assim:

import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
  plugins: [
    laravel({
      input: ['resources/css/app.css', 'resources/js/app.js'],
      refresh: true,
    }),
  ],
});

Depois, rode os comandos:

npm install
npm run dev

> O  `npm run dev`  inicia um servidor que compila o Tailwind automaticamente em tempo real.

----------

## 📄 5. Criando uma View Blade com Tailwind

[](https://github.com/ViniciusDinisDias/pwii-Vinicius-Oliveira#-5-criando-uma-view-blade-com-tailwind)

### 5.1 Criar a rota

[](https://github.com/ViniciusDinisDias/pwii-Vinicius-Oliveira#51-criar-a-rota)

Abra o arquivo  `routes/web.php`  e adicione:

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('home');
});

> Aqui, definimos a rota  `/`  que irá carregar a view  `home.blade.php`.

----------

### 5.2 Criar a view

[](https://github.com/ViniciusDinisDias/pwii-Vinicius-Oliveira#52-criar-a-view)

Crie o arquivo  `resources/views/home.blade.php`:

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Home - Laravel + Tailwind</title>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="bg-gray-100 text-gray-900 font-sans">

    <div class="max-w-2xl mx-auto mt-16 p-8 bg-white rounded-lg shadow">
        <h1 class="text-4xl font-bold text-blue-600 mb-4">Bem-vindo ao Laravel com Tailwind</h1>
        <p class="text-lg text-gray-700 mb-6">
            Esta é uma view simples utilizando Blade para estrutura e Tailwind CSS para o estilo.
        </p>

        <a href="/contato" class="inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            Ir para Contato
        </a>
    </div>

</body>
</html>

----------

## 🧪 6. Formulário com Tailwind (Exemplo Prático)

[](https://github.com/ViniciusDinisDias/pwii-Vinicius-Oliveira#-6-formul%C3%A1rio-com-tailwind-exemplo-pr%C3%A1tico)

<div class="max-w-xl mx-auto mt-12 bg-white p-6 rounded-lg shadow">
    <h2 class="text-2xl font-semibold mb-4">Formulário de Contato</h2>

    <form method="POST" action="/contato">
        @csrf

        <div class="mb-4">
            <label class="block text-gray-700 font-medium mb-2">Nome</label>
            <input type="text" name="nome" class="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none">
        </div>

        <div class="mb-4">
            <label class="block text-gray-700 font-medium mb-2">Email</label>
            <input type="email" name="email" class="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none">
        </div>

        <div class="mb-6">
            <label class="block text-gray-700 font-medium mb-2">Mensagem</label>
            <textarea name="mensagem" rows="4" class="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"></textarea>
        </div>

        <button type="submit" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Enviar Mensagem
        </button>
    </form>
</div>

### Explicação das classes:

[](https://github.com/ViniciusDinisDias/pwii-Vinicius-Oliveira#explica%C3%A7%C3%A3o-das-classes)

`bg-white`: Fundo branco

`p-6`: Padding interno

`rounded-lg`: Bordas arredondadas

`shadow`: Adiciona sombra

`text-gray-700`: Cor do texto

`focus:ring-*`: Efeito de anel ao focar no campo

`hover:bg-blue-700`: Muda a cor do botão ao passar o mouse

----------

## 📋 Recapitulando

[](https://github.com/ViniciusDinisDias/pwii-Vinicius-Oliveira#-recapitulando)

**View:**  Arquivo Blade responsável pela interface do usuário

**Blade:**  Sistema de templates do Laravel com sintaxe amigável

**Tailwind CSS:**  Framework CSS baseado em classes utilitárias

`@vite(...)`: Inclui os arquivos CSS/JS processados pelo Vite

`bg-*`,  `text-*`, etc. Classes do Tailwind para estilização rápida:

`resources/views`  Diretório onde ficam as views no Laravel:

`@csrf`  Token de proteção contra requisições maliciosas (CSRF) em formulários

`npm run dev`: Comando que compila Tailwind e mantém o hot reload ativo

----------

## 💡 Dicas e Boas Práticas

[](https://github.com/ViniciusDinisDias/pwii-Vinicius-Oliveira#-dicas-e-boas-pr%C3%A1ticas)

-   🔄  **Evite repetir HTML**: Use  `@extends`  e  `@include`  para layouts e componentes.
    
-   🎨  **Crie componentes Blade personalizados**: Ideal para botões, alertas, inputs.
    
-   📁  **Organize views em subpastas**:  `views/pages`,  `views/components`, etc.
    
-   📦  **Use o Tailwind com responsabilidade**: Muitas classes inline podem poluir o HTML.
    
-   ✅  **Valide os formulários**  com regras no controller para segurança e clareza.
Aula lecionada pelo professor João Siles
