    var linha = 1;    

    function insereInput() {
        var idLinha = 'linha' + linha;
        var valorSelect = document.getElementById('volume').value;

        var div = document.createElement('div')
        div.className = 'row mb-2 ml-auto'
        div.id = idLinha;

        var inputProduto = document.createElement('input');
        var divInputGroupProduto = document.createElement('div');

        divInputGroupProduto.className = 'input-group col-md-2';
        inputProduto.placeholder = 'Item';
        inputProduto.type = 'text';
        inputProduto.className = 'form-control';
        divInputGroupProduto.appendChild(inputProduto);

        var inputValor = document.createElement('input');
        var divInputGroupValor = document.createElement('div');
        var divPrependValor = document.createElement('div');
        var spanPrependValor = document.createElement('span');
        var textPrependValor = document.createTextNode('R$');

        divInputGroupValor.className = 'input-group col-md-2';
        divPrependValor.className = 'input-group-prepend'; 
        spanPrependValor.className = 'input-group-text';
        inputValor.placeholder = 'Valor';
        inputValor.type = 'number';
        inputValor.className = 'form-control';
        inputValor.id = 'v' + idLinha;

        spanPrependValor.appendChild(textPrependValor);
        divPrependValor.appendChild(spanPrependValor);
        divInputGroupValor.appendChild(divPrependValor);
        divInputGroupValor.appendChild(inputValor);

          
        var inputQtd = document.createElement('input');
        var divInputGroupQtd = document.createElement('div');
        var divAppendQtd = document.createElement('div');
        var spanAppendQtd = document.createElement('span');

        if (valorSelect === 'l') {
            var textAppendQtd = document.createTextNode('litro(s)');
        }else if(valorSelect === 'kg') {
            var textAppendQtd = document.createTextNode('quilo(s)');
        }else if (valorSelect === 'un') {
            var textAppendQtd = document.createTextNode('unidade(s)');
        }else {
            alert('Escolha uma unidade válida');
        }
        

        divInputGroupQtd.className = 'input-group col-md-2';
        divAppendQtd.className = 'input-group-append'; 
        spanAppendQtd.className = 'input-group-text';
        inputQtd.placeholder = 'Qtd';
        inputQtd.id = 'q' + idLinha;
        inputQtd.type = 'number';
        inputQtd.className = 'form-control';
        inputQtd.onchange = function() {
            calculaResultado(idLinha);
        }      

        divInputGroupQtd.appendChild(inputQtd);
        spanAppendQtd.appendChild(textAppendQtd);
        divAppendQtd.appendChild(spanAppendQtd);
        divInputGroupQtd.appendChild(divAppendQtd);

        var inputResultado = document.createElement('input');
        var divInputResultado = document.createElement('div');

        divInputResultado.appendChild(inputResultado);
        divInputResultado.className = 'input-group col-md-2'
        inputResultado.type = 'text';
        inputResultado.id = 'r' + idLinha; 
        console.log(inputResultado.id);
        inputResultado.className = 'form-control';
        inputResultado.setAttribute('readonly', '');        

        var botaoExcluir = document.createElement('button');
        var textoBotaoExcluir = document.createTextNode('Excluir');
        var divBotaoExcluir = document.createElement('div');
        
        botaoExcluir.className = "btn btn-danger"
        botaoExcluir.appendChild(textoBotaoExcluir);
        botaoExcluir.onclick = () => excluiLinha(idLinha);
        divBotaoExcluir.appendChild(botaoExcluir);
        divBotaoExcluir.className = 'input-group col-md-1';

        div.appendChild(divInputGroupProduto);
        div.appendChild(divInputGroupValor);
        div.appendChild(divInputGroupQtd);
        div.appendChild(divInputResultado)
        div.appendChild(divBotaoExcluir);
        document.getElementById('div').appendChild(div);

        linha++
    }

    function excluiLinha(linha) {
        document.getElementById(linha).remove();
    }
    
    function calculaResultado(idLinha) {
        var qtd = document.getElementById('q' + idLinha).value;
        var valor = document.getElementById('v' + idLinha).value;
        var resultado = 'R$ ' + (valor/qtd).toFixed(2);

        return document.getElementById('r' + idLinha).setAttribute('value', resultado);
    }