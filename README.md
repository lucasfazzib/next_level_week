### Projeto Next Level Week 

####    Next Level Week da Rocketseat, onde o projeto Ecoleta, totalmente voltado para fins ecológicos.  

####    A ideia veio para reforçar a semana internacional do Meio Ambiente que acontece bem nessa semana. 

####    O Ecoleta serve como um marketplace, uma conexão entre empresas/entidades que coletam resíduos orgânicos e inorgânicos e as pessoas que precisam descartar esses resíduos.  

####    É uma aplicação incrível que ajuda pessoas a ajudarem o mundo. 

####    Os participantes tem total liberdade de melhorar essa aplicação, acrescentar funcionalidades e colocar no mundo real após o evento &lt;nlw/>.


### Iniciando o projeto

####    Criação de pasta server
    $ cd server
    $ npm init -y ( definir tudo padrão o package.json)   
    
####    package.json (Vai conter todas as informações importantes do projeto e toda as dependencias também.)

####    Instalação do microframework para lidar com ROTAS-> express
    $ npm install express

####    É gerado o node_modules (que vai armazenar o código de todas as dependencias) e o package-lock(que não vamos mexer por enquanto)

####    Criar pasta src (armazenar todos os códigos da aplicação irão ficar la)

####    Criar arquivo server.ts
    $ npm install @types/express -D (dependencia de desenvolvimento)
    $ npm install ts-node -D (dependencia de desenvolvimento)
    $ npm install typescript -D

####    Criação de arquivo para execução
    $ npx ts-node --init (cria arquivo de config. do typescript)

####    Execução
    $ npx ts-node src/server.ts

####    Instalação de pacote apra ficar observando o código e sempre que ouver alguma alteração ele executa de novo.
    $ npm install ts-node-dev -D

####    Atualizar no package.json com o comando de execução para facilitar na atualização durante o desenvolvimento
    $ "scripts": {
                    "dev": "ts-node-dev src/server.ts"
                    }
    
####    Executar a aplicação de outra maneira agora:
    $ npm run dev
    

### REACT
    Biblioteca para construção de interfaces.
    Utilizado para construção de SINGLE-PAGE-APPLICATIONS
    Tudo fica dentro do Javascript
    React / ReactJS / React Native;

###    VANTAGENS
    Organização do código
    Componentização
    Divisão de Responsabilidade
        - Back-end: Regra de negócio
        - Front-end: Intreface
           
####    Uma API, MÚLTIPLOS CLIENTES.

####    Criar app react
    $  npx create-react-app web --template=typescript
    $  npm start

###    REACT NATIVE e EXPO

####    Abordagem tradicional:
        - Objective-C/Swif para IOS e Java (.ipa), Kotlin apra android (.apk)
####    Abordagem React Native:
        - Todo código é geito em JAVASCRIPT, esse código não é convertido em código nativo, malhor do que isso,
        o dispositivo passa a entender o código JAVASCRIPT e a interface gerada é totalmente nativa.

###    EXPO
        - Sem o EXPO, precisamos instalar em nosso sistema tanto o Android Studio para obter a SDK do android e o Scode para o mac para obter a SDK do IOS.
        
        - Nesse caso, nossa iniciação no desenvolvimento fica mais penosa, já que essa SDK'S não sçao extremamente simples de instalar e livres de erros.

        - Com o EXPO, nós instalamos um aplicativo no celular chama EXPO, e dentro dele, tudo o que precisamos para desenvolver no REACT NATIVE já está instalado, como as API's de mapa, geolocalização, camera, sensores, calendario, ...

        - Com isso não precisamo nos preocupar em gerar o aplicativo pra Android e IOS já que o app do EXPO instalado tem tudo o que precisamos e assim usamos apeans REACT.

        




    
    
