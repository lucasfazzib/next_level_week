### next_level_week

### Tcnologias: Node, React e React Native

#    => Next Level Week da Rocketseat, onde o projeto Ecoleta, totalmente voltado para fins ecológicos.  

#    => A ideia veio para reforçar a semana internacional do Meio Ambiente que acontece bem nessa semana. 

#    => O Ecoleta serve como um marketplace, uma conexão entre empresas/entidades que coletam resíduos orgânicos e inorgânicos e as pessoas que precisam descartar esses resíduos.  

#    => É uma aplicação incrível que ajuda pessoas a ajudarem o mundo. 

#    => Os participantes tem total liberdade de melhorar essa aplicação, acrescentar funcionalidades e colocar no mundo real após o evento &lt;nlw/>.


### Iniciando o projeto

#    => Criação de pasta server
    $ cd server
    $ npm init -y ( definir tudo padrão o package.json)     
#    => package.json (Vai conter todas as informações importantes do projeto e toda as dependencias também.)

#    => Instalação do microframework para lidar com ROTAS-> express
    $ npm install express

#    => É gerado o node_modules (que vai armazenar o código de todas as dependencias) e o package-lock(que não vamos mexer por enquanto)

#    => Criar pasta src (armazenar todos os códigos da aplicação irão ficar la)

#    => Criar arquivo server.ts
    $ npm install @types/express -D (dependencia de desenvolvimento)
    $ npm install ts-node -D (dependencia de desenvolvimento)
    $ npm install typescript -D

#    => Criação de arquivo para execução
    $ npx ts-node --init (cria arquivo de config. do typescript)

#    => Execução
    $ npx ts-node src/server.ts

#    => Instalação de pacote apra ficar observando o código e sempre que ouver alguma alteração ele executa de novo.
    $ npm install ts-node-dev -D

#    => Atualizar no package.json com o comando de execução para facilitar na atualização durante o desenvolvimento
    $ "scripts": {
                    "dev": "ts-node-dev src/server.ts"
                    }
    
#    => Executar a aplicação de outra maneira agora:
    $ npm run dev
    

### REACT

#    => Biblioteca para construção de interfaces.
#    => Utilizado para construção de SINGLE-PAGE-APPLICATIONS
#    => Tudo fica dentro do Javascript
#    => React / ReactJS / React Native;

#    VANTAGENS
#    => Organização do código
#    => Componentização
#    => Divisão de Responsabilidade
        - Back-end: Regra ed negócio
        - Front-end: Intreface
#    => Uma API, MÚLTIPLOS CLIENTES.

# Criar app react
    $  npx create-react-app web --template=typescript
    $  npm start

### REACT NATIVE e EXPO

#    => Abordagem tradicional:
        - Objective-C/Swif para IOS e Java (.ipa), Kotlin apra android (.apk)
#    => Abordagem React Native:
        - Todo código é geito em JAVASCRIPT, esse código não é convertido em código nativo, malhor do que isso,
        o dispositivo passa a entender o código JAVASCRIPT e a interface gerada é totalmente nativa.

# EXPO
        - Sem o EXPO, precisamos instalar em nosso sistema tanto o Android Studio para obter a SDK do android e o Scode para o mac para obter a SDK do IOS.
        
        - Nesse caso, nossa iniciação no desenvolvimento fica mais penosa, já que essa SDK'S não sçao extremamente simples de instalar e livres de erros.

        - Com o EXPO, nós instalamos um aplicativo no celular chama EXPO, e dentro dele, tudo o que precisamos para desenvolver no REACT NATIVE já está instalado, como as API's de mapa, geolocalização, camera, sensores, calendario, ...

        - Com isso não precisamo nos preocupar em gerar o aplicativo pra Android e IOS já que o app do EXPO instalado tem tudo o que precisamos e assim usamos apeans REACT.


### BACKEND da aplicação

#   ROTA
        - Endereção completo da requisição    
#   RECURSO
        - Qual entidade estamos acessando do sistema

### Métodos HTTP

#   GET
        - Buscar uma ou mais informações do BACKEND.
        - Muito semânticas -> GET http://localhost:333/users = LISTAR(exemplo)
        - Muito semânticas -> GET http://localhost:333/users/5 = LISTAR UM USER COM ID 5(exemplo)
#   POST
        - Criar uma nova informação no BACKEND.
        - Muito semânticas -> POST http://localhost:333/users = CRIAR (exemplo)
#   PUT
        - Atualizar uma informação existente no BACKEND.
#   DELETE
        - Remover uma informação do BACKEND.

### TIPOS DE PARAMETROS
        - Request Param: Parâmetros que vem na prórpia rota que identificam um recurso.
        - Query Param: Parâmetros que vem na própria rota geralmente opcionais para filtros, paginação...
        - Request Body: Corpo da requisição, parâmetros para criação/atualização de informações.

### BANCO DE DADOS
        -SQL: Postgres, MySQL,sqlITE, SQL Server
        -NoSQL: MongoDB, CouchDB

        - KNEXJS -> Query Builder
        - http://knexjs.org/
        - Ex: SELECT * FROM users WHERE name = "LUCAS" 
        - A mesma query usando knex ficaria:
            - knex('users').where('name', 'Lucas').select('*')~
        
        - Instalar KNEX
        - npm install knex
        - Instalar o SQLITE3
        - npm install sqlite3

        - __dirname = retorna o diretório do arquivo que a gente ta executando a varialve, o caminho para o diretório do arquivo que executa ele.

### ENTENDENDO ENTIDADES DO BANCO (ENTIDADES)
        - Identificando entidades
            # points ( pontos de coleta do app)
                - image
                - nome
                - email
                - whatsapp
                - Endereço é um ponto no mapa
                    - latitude
                    - longitude
                - city
                - uf
            # items ( Vai armazenar quais são os itens da coleta)
                - image
                - title

            # point_items (Armazenar o relacionamento dos items que um ponto coleta)
                - point_id
                - item_id

            - 1 ponto de coleta pode coletar varios items diferentes
            - 1 item pode ser coletado por varios pontos de coleta
            - O relacionamento acima é muitos para muitos (N - N) 
            - Esse relacionamento gera um TABELA PIVOT (nome geralmente derivado da junçao das tabelas agregadas.)

        - ALERTA DE PERFUMARIA
            - config no settings.json para o icone acompnhar o material icon them.
            "material-icon-theme.folders.associations": {
                "infra": "app",
                "entities": "class",
                "schemas": "class",
                "typeorm": "database",
                "repositories": "tools",
                "http": "container",
                "migrations": "tools",
                "modules": "components",
                "implementations": "core",
                "dtos": "typescript",
                "fakes": "mock",
                "websockets": "pipe",
                "protos": "pipe",
                "grpc": "pipe"
            }

        - Criando as MIGRATIONS
            - OBS: A ordem que elas vao ser criadas será a ordem que vai ser executado para criação. Ou seja as tabelas que tem relacionamento são necessarias serem criadas antes.
        

### CRIAÇÃO DE TABELAS
        - MIGRATIONS 
            - Histórico do banco de dados   
        - Basta executar um comando que o knex vai montar o mesmo formato do banco de dados para as duas pessoas que estão desenvolvendo.
         - Um arquivo que coloca o que precisa ser feito dentro do banco de dados quando aquela versão do software for executada.

        - migrations
            - Método UP é utilizado para criar a tabela
                $ export async function up() {}
            - Método DOWN é utilizado para remover a tabela
                $ export async function down() {}
            
            - Fazer o import necessário e informa o formato da variável para ganhar a inteligencia da IDE.
                import Knex from 'knex';
                export async function up(knex: Knex) {
                    knex.schema.createTable
                }
            - ATALHO: cntrl + D (selecionar todos campos e deletar o que nao utiliza)
            - Depois de criar toda estrutura das migrations e database rodar o comando abaixo na pasta server
            - npx knex migrate:latest --knexfile knexfile.ts migrate:latest


### FUNCIONALIDADES DA APLICAÇÃO

        - CADASTRO DE PONTO DE COLETA
        - LISTAR ITEMS DE COLETA
        - LISTAR PONTOS (FILTRO POR ESTADO/CIDADE/ITEMS) *mobile
        - LISTAR UM PONTO DE COLETA ESPECÍFICO *mobile
        
        -Iniciar criandos os SEEDS
        - Serve para popular nossa tabela que vai ser estática no app.
        



#   Incluir no setting.json as linha do emmet
        - cntrl + shift + p 
        - digitar preferences open settings setting JSON e selecionar o settings.json
        -    "emmet.syntaxProfiles": { "javascript": "jsx" },
        -    "emmet.includeLanguages": { "javascript": "javascriptreact" }
    
# JSX
        - É a habilidade de escrever HTML dentro do javascript
        - Sintaxe XML dentro do javascript, por isso a extensoa do arquivo é tsx (typescript com jsx)
    


        




    
    