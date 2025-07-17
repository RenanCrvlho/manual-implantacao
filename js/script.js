window.onload = () => {
    // VARIÁVEIS E CONSTANTES

    const btnDark = document.querySelector('.btn-dark');
    const darkImg = document.querySelector('.dark-img');
    const lightImg = document.querySelector('.light-img');
    
    const menuLateral = document.querySelector('#menu-lateral');
    const menu = document.querySelector('#menu-lateral');
    const linkTexto = document.querySelectorAll('.link-paragrafo');
    const abrirMenu = document.querySelector('.menu1');
    const fecharMenu = document.querySelector('.menu2');
    const mainConteudo = document.querySelector('#main-conteudo');

    let textoSuperior = document.querySelector('#texto-superior');
    let icone = document.querySelector('#icone');

    const inicio = document.querySelector('#inicio');
    const filtro = document.querySelector('#filtros');
    const relatorios = document.querySelector('#relatorios');
    const tasks = document.querySelector('#tasks');
    const configCampanha = document.querySelector('#config-campanha');
    const termos = document.querySelector('#termos');

    const filtros = document.querySelectorAll('.filtros');

      //FILTROS

    let conteudoFiltro = document.querySelector('.conteudo-filtro');
    let conteudoCabecalhoFiltro = document.querySelector('.cabecalho-conteudo-filtro');
    let corpoConteudoFiltro = document.querySelector('.corpo-conteudo-filtro');

    let filtroMaes = document.querySelector('#filtro-maes');
    let filtrosMaes = document.querySelector('#filtros-maes');

    let filtroNamorados = document.querySelector('#filtro-namorados');
    let filtrosNamorados = document.querySelector('#filtros-namorados');

    let filtroPais = document.querySelector('#filtro-pais');
    let filtrosPais = document.querySelector('#filtros-pais');

    let filtroNatal = document.querySelector('#filtro-natal');
    let filtrosNatal = document.querySelector('#filtros-natal');

      //FILTROS

      //RELATÓRIOS

    let conteudoRelatorio = document.querySelector('.conteudo-relatorio');
    let conteudoCabecalhoRelatorio = document.querySelector('.cabecalho-conteudo-relatorio');
    let corpoConteudoRelatorio = document.querySelector('.corpo-conteudo-relatorio');

    let relatorioMaes = document.querySelector('#relatorio-maes');
    let relatoriosMaes = document.querySelector('#relatorios-maes');

    let relatorioNamorados = document.querySelector('#relatorio-namorados');
    let relatoriosNamorados = document.querySelector('#relatorios-namorados');

    let relatorioPais = document.querySelector('#relatorio-pais');
    let relatoriosPais = document.querySelector('#relatorios-pais');

    let relatorioNatal = document.querySelector('#relatorio-natal');
    let relatoriosNatal = document.querySelector('#relatorios-natal');

      //RELATÓRIOS

      //TASKS

    let conteudoTask = document.querySelector('.conteudo-task');
    let conteudoCabecalhoTask = document.querySelector('.cabecalho-conteudo-task');
    let corpoConteudoTask = document.querySelector('.corpo-conteudo-task');

    let taskMaes = document.querySelector('#task-maes');
    let tasksMaes = document.querySelector('#tasks-maes');

    let taskNamorados = document.querySelector('#task-namorados');
    let tasksNamorados = document.querySelector('#tasks-namorados');

    let taskPais = document.querySelector('#task-pais');
    let tasksPais = document.querySelector('#tasks-pais');

    let taskNatal = document.querySelector('#task-natal');
    let tasksNatal = document.querySelector('#tasks-natal');

      //TASKS


      //CAMPANHA

    let conteudoCampanha = document.querySelector('.conteudo-campanha');
    let corpoConteudoCampanha = document.querySelector('.corpo-conteudo-campanha');

    let campanha = document.querySelector('#campanha');

      //CAMPANHA

      //TERMO

    let conteudoTermo = document.querySelector('.conteudo-termo');
    let conteudoCabecalhoTermo = document.querySelector('.cabecalho-conteudo-termo');
    let corpoConteudoTermo = document.querySelector('.corpo-conteudo-termo');

    let termoCrmall = document.querySelector('#termo-crmall');
    let termosCrmall = document.querySelector('#termos-crmall');

    let termoMulti = document.querySelector('#termo-multi');
    let termosMulti = document.querySelector('#termos-multi');

    let termoSyn = document.querySelector('#termo-syn');
    let termosSyn = document.querySelector('#termos-syn');


      //TERMO
    

    // VARIÁVEIS E CONSTANTES
    

    // FUNÇÕES GERAIS

    btnDark.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      darkImg.classList.toggle('conteudo-oculto');
      lightImg.classList.toggle('conteudo-oculto');
    })

    abrirMenu.addEventListener('click', () => {    
      abrirMenu.classList.add('conteudo-oculto'); 
      fecharMenu.classList.remove('conteudo-oculto');   
      menu.classList.add('menu-lateral-expandido');
      linkTexto.forEach((e) => {
        e.classList.add('link-texto');
      })
    })

    fecharMenu.addEventListener('click', () => {
      abrirMenu.classList.remove('conteudo-oculto'); 
      fecharMenu.classList.add('conteudo-oculto');
      menu.classList.remove('menu-lateral-expandido');
      linkTexto.forEach((e) => {
        e.classList.remove('link-texto');
      })
    })

    inicio.addEventListener('click', () => {
      mainConteudo.classList.remove('main-conteudo-personalizado');
      textoSuperior.innerHTML = "Início";
      icone.src = "./src/home.png"

      conteudoRelatorio.classList.add('conteudo-oculto');
      conteudoCabecalhoRelatorio.classList.add('conteudo-oculto');

      conteudoTask.classList.add('conteudo-oculto');
      conteudoCabecalhoTask.classList.add('conteudo-oculto');

      conteudoCampanha.classList.add('conteudo-oculto');
      corpoConteudoCampanha.classList.add('conteudo-oculto');

      conteudoTermo.classList.add('conteudo-oculto');
      conteudoCabecalhoTermo.classList.add('conteudo-oculto');
      corpoConteudoTermo.classList.add('conteudo-oculto');

      conteudoFiltro.classList.add('conteudo-oculto');
      conteudoCabecalhoFiltro.classList.add('conteudo-oculto');
    })

    filtro.addEventListener('click', () => {
      mainConteudo.classList.add('main-conteudo-personalizado');
      textoSuperior.innerHTML = "Filtro";
      icone.src = "./src/filter.png";      

      conteudoRelatorio.classList.add('conteudo-oculto');
      conteudoCabecalhoRelatorio.classList.add('conteudo-oculto');

      conteudoTask.classList.add('conteudo-oculto');
      conteudoCabecalhoTask.classList.add('conteudo-oculto');

      conteudoCampanha.classList.add('conteudo-oculto');
      corpoConteudoCampanha.classList.add('conteudo-oculto');

      conteudoTermo.classList.add('conteudo-oculto');
      conteudoCabecalhoTermo.classList.add('conteudo-oculto');
      corpoConteudoTermo.classList.add('conteudo-oculto');

      conteudoFiltro.classList.remove('conteudo-oculto');
      conteudoCabecalhoFiltro.classList.remove('conteudo-oculto');
    })

    relatorios.addEventListener('click', () => {
      mainConteudo.classList.add('main-conteudo-personalizado');
      textoSuperior.innerHTML = "Relatórios";
      icone.src = "./src/relatorio.png";

      conteudoFiltro.classList.add('conteudo-oculto');
      conteudoCabecalhoFiltro.classList.add('conteudo-oculto');

      conteudoTask.classList.add('conteudo-oculto');
      conteudoCabecalhoTask.classList.add('conteudo-oculto');

      conteudoCampanha.classList.add('conteudo-oculto');
      corpoConteudoCampanha.classList.add('conteudo-oculto');

      conteudoTermo.classList.add('conteudo-oculto');
      conteudoCabecalhoTermo.classList.add('conteudo-oculto');
      corpoConteudoTermo.classList.add('conteudo-oculto');

      conteudoRelatorio.classList.remove('conteudo-oculto');
      conteudoCabecalhoRelatorio.classList.remove('conteudo-oculto');
    })

    tasks.addEventListener('click', () => {
      mainConteudo.classList.add('main-conteudo-personalizado');
      textoSuperior.innerHTML = "Tasks";
      icone.src = "./src/tasks.png";

      conteudoFiltro.classList.add('conteudo-oculto');
      conteudoCabecalhoFiltro.classList.add('conteudo-oculto');

      conteudoRelatorio.classList.add('conteudo-oculto');
      conteudoCabecalhoRelatorio.classList.add('conteudo-oculto');

      conteudoCampanha.classList.add('conteudo-oculto');
      corpoConteudoCampanha.classList.add('conteudo-oculto');

      conteudoTermo.classList.add('conteudo-oculto');
      conteudoCabecalhoTermo.classList.add('conteudo-oculto');
      corpoConteudoTermo.classList.add('conteudo-oculto');

      conteudoTask.classList.remove('conteudo-oculto');
      conteudoCabecalhoTask.classList.remove('conteudo-oculto');
    })

    configCampanha.addEventListener('click', () => {
      mainConteudo.classList.add('main-conteudo-personalizado');
      textoSuperior.innerHTML = "Configuração de Campanhas 4C";
      icone.src = "./src/4c.png";

      conteudoFiltro.classList.add('conteudo-oculto');
      conteudoCabecalhoFiltro.classList.add('conteudo-oculto');

      conteudoRelatorio.classList.add('conteudo-oculto');
      conteudoCabecalhoRelatorio.classList.add('conteudo-oculto');

      conteudoTask.classList.add('conteudo-oculto');
      conteudoCabecalhoTask.classList.add('conteudo-oculto');

      conteudoTermo.classList.add('conteudo-oculto');
      conteudoCabecalhoTermo.classList.add('conteudo-oculto');
      corpoConteudoTermo.classList.add('conteudo-oculto');

      conteudoCampanha.classList.remove('conteudo-oculto');
      corpoConteudoCampanha.classList.remove('conteudo-oculto');
      campanha.classList.remove('conteudo-oculto');
    })

    termos.addEventListener('click', () => {
      mainConteudo.classList.add('main-conteudo-personalizado');
      textoSuperior.innerHTML = "Termos e Condições";
      icone.src = "./src/termos.png";

      conteudoFiltro.classList.add('conteudo-oculto');
      conteudoCabecalhoFiltro.classList.add('conteudo-oculto');

      conteudoRelatorio.classList.add('conteudo-oculto');
      conteudoCabecalhoRelatorio.classList.add('conteudo-oculto');

      conteudoTask.classList.add('conteudo-oculto');
      conteudoCabecalhoTask.classList.add('conteudo-oculto');

      conteudoCampanha.classList.add('conteudo-oculto');
      corpoConteudoCampanha.classList.add('conteudo-oculto');
      campanha.classList.add('conteudo-oculto');

      conteudoTermo.classList.remove('conteudo-oculto');
      conteudoCabecalhoTermo.classList.remove('conteudo-oculto');
      corpoConteudoTermo.classList.remove('conteudo-oculto');
      // termo.classList.remove('conteudo-oculto');
    })

    const btnPesquisa = document.querySelector('#filtro-pesquisar');
    let mudaTexto = document.querySelector('#filtro');
    let pegaAno = document.querySelector('#ano-filtro');
    const inputFiltros = document.querySelector('#filtrosDesc');
    
    let texto = document.querySelectorAll('.desc-filtro-pesquisa');
    let anoFiltro = document.querySelectorAll('.desc-filtro-ano');

    btnPesquisa.addEventListener('click', () => {      
      texto.forEach((e) => {
        e.innerHTML = mudaTexto.value;
      })

      anoFiltro.forEach((e) => {
        e.innerHTML = pegaAno.value;
      })
      inputFiltros.classList.remove('conteudo-oculto');
      
    })

    const btnPesquisaRelatorio = document.querySelector('#relatorio-pesquisar');
    let mudaTextoRelatorio = document.querySelector('#relatorio');
    let pegaAnoRelatorio = document.querySelector('#ano-relatorio');
    const inputRelatorios = document.querySelector('#relatoriosDesc');
    
    let textoRelatorio = document.querySelectorAll('.desc-relatorio-pesquisa');
    let anoRelatorio = document.querySelectorAll('.desc-relatorio-ano');

    btnPesquisaRelatorio.addEventListener('click', () => {      
       textoRelatorio.forEach((e) => {
         e.innerHTML = mudaTextoRelatorio.value;
       })

       anoRelatorio.forEach((e) => {
         e.innerHTML = pegaAnoRelatorio.value;
       })
       
       inputRelatorios.classList.remove('conteudo-oculto');
    });

    const btnPesquisaTask = document.querySelector('#task-pesquisar');
    let mudaTextoTask = document.querySelector('#task');
    let pegaAnoTask = document.querySelector('#ano-task');
    const inputTasks = document.querySelector('#tasksDesc');
    
    let textoTask = document.querySelectorAll('.desc-task-pesquisa');
    let anoTask = document.querySelectorAll('.desc-task-ano');

    btnPesquisaTask.addEventListener('click', () => {      
       textoTask.forEach((e) => {
         e.innerHTML = mudaTextoTask.value;
       })

       anoTask.forEach((e) => {
         e.innerHTML = pegaAnoTask.value;
       })
       
       inputTasks.classList.remove('conteudo-oculto');
    });

    // FUNÇÕES GERAIS


    // FUNÇÕES PARA OS TERMOS

    termoCrmall.addEventListener('click', () => {
      corpoConteudoTermo.classList.remove('conteudo-oculto');
      termosCrmall.classList.remove('conteudo-oculto');

      if(!(termosMulti.classList.contains('conteudo-oculto')) || !(termosSyn.classList.contains('conteudo-oculto'))){
        termosMulti.classList.add('conteudo-oculto');
        termosSyn.classList.add('conteudo-oculto');
      }

      if(!(termoCrmall.classList.contains('mudaCor')) || !(termosSyn.classList.contains('mudaCor'))){
        termoCrmall.classList.add('mudaCor');
        termoMulti.classList.remove('mudaCor');
        termoSyn.classList.remove('mudaCor');
      }
    })

    termoMulti.addEventListener('click', () => {
      corpoConteudoTermo.classList.remove('conteudo-oculto');
      termosMulti.classList.remove('conteudo-oculto');

      if(!(termosCrmall.classList.contains('conteudo-oculto')) || !(termosSyn.classList.contains('conteudo-oculto'))){
        termosCrmall.classList.add('conteudo-oculto');
        termosSyn.classList.add('conteudo-oculto');
      }

      if(!(termoMulti.classList.contains('mudaCor')) || !(termosSyn.classList.contains('mudaCor'))){
        termoMulti.classList.add('mudaCor');        
        termoCrmall.classList.remove('mudaCor');
        termoSyn.classList.remove('mudaCor');
      }
    })

    termoSyn.addEventListener('click', () => {
      corpoConteudoTermo.classList.remove('conteudo-oculto');
      termosSyn.classList.remove('conteudo-oculto');

      if(!(termosCrmall.classList.contains('conteudo-oculto')) || !(termosMulti.classList.contains('conteudo-oculto'))){
        termosCrmall.classList.add('conteudo-oculto');
        termosMulti.classList.add('conteudo-oculto');
      }

      if(!(termoMulti.classList.contains('mudaCor')) || !(termosCrmall.classList.contains('mudaCor'))){
        termoSyn.classList.add('mudaCor');
        termoMulti.classList.remove('mudaCor');
        termoCrmall.classList.remove('mudaCor');
      }
    })

    relatorioPais.addEventListener('click', () => {
      corpoConteudoRelatorio.classList.remove('conteudo-oculto');
      relatoriosPais.classList.remove('conteudo-oculto');

      if(!(relatoriosMaes.classList.contains('conteudo-oculto')) || !(relatoriosNamorados.classList.contains('conteudo-oculto')) || !(relatoriosNatal.classList.contains('conteudo-oculto'))){
        relatoriosMaes.classList.add('conteudo-oculto');
        relatoriosNamorados.classList.add('conteudo-oculto');
        relatoriosNatal.classList.add('conteudo-oculto');
      }

      if(!(relatorioPais.classList.contains('mudaCor'))){
        relatorioPais.classList.add('mudaCor');
        relatorioMaes.classList.remove('mudaCor');
        relatorioNamorados.classList.remove('mudaCor');
        relatorioNatal.classList.remove('mudaCor');
      }
    })

    relatorioNatal.addEventListener('click', () => {
      corpoConteudoRelatorio.classList.remove('conteudo-oculto');
      relatoriosNatal.classList.remove('conteudo-oculto');

      if(!(relatoriosMaes.classList.contains('conteudo-oculto')) || !(relatoriosNamorados.classList.contains('conteudo-oculto')) || !(relatoriosPais.classList.contains('conteudo-oculto'))){
        relatoriosMaes.classList.add('conteudo-oculto');
        relatoriosNamorados.classList.add('conteudo-oculto');
        relatoriosPais.classList.add('conteudo-oculto');
      }

      if(!(relatorioNatal.classList.contains('mudaCor'))){
        relatorioNatal.classList.add('mudaCor');
        relatorioMaes.classList.remove('mudaCor');
        relatorioNamorados.classList.remove('mudaCor');
        relatorioPais.classList.remove('mudaCor');
      }
    })

    // FUNÇÕES PARA OS RELATÓRIOS
}