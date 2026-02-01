function exibirSobremim(){
    document.getElementById('informacoes').style.visibility = 'visible';
    document.getElementById('introducao').style.visibility = 'hidden';
    document.getElementById('pgnInicial').style.visibility = 'visible';
    document.getElementById('caixaForm').style.visibility = 'hidden';
    document.getElementById('contatos').style.visibility = 'hidden';
}

function exibirPerfil(){
    document.getElementById('informacoes').style.visibility = 'hidden';
    document.getElementById('introducao').style.visibility = 'visible';
    document.getElementById('pgnInicial').style.visibility = 'hidden';
    document.getElementById('caixaForm').style.visibility = 'hidden';
    document.getElementById('contatos').style.visibility = 'hidden';
}

function exibirContatos(){
     document.getElementById('informacoes').style.visibility = 'hidden';
    document.getElementById('introducao').style.visibility = 'hidden';
    document.getElementById('pgnInicial').style.visibility = 'visible';
    document.getElementById('contatos').style.visibility = 'visible';
    document.getElementById('caixaForm').style.visibility = 'hidden';

    
}

function exibirForm(){
         document.getElementById('informacoes').style.visibility = 'hidden';
    document.getElementById('introducao').style.visibility = 'hidden';
    document.getElementById('pgnInicial').style.visibility = 'visible';
    document.getElementById('contatos').style.visibility = 'hidden';
    document.getElementById('caixaForm').style.visibility = 'visible';
}
