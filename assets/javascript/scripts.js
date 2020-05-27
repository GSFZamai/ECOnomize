    var linha = 1;

    function insereInput() {
        var idLinha = 'linha' + linha;
        var valorSelect = document.getElementById('volume').value;

        console.log(valorSelect)

        var div = document.createElement('div')
        div.className = 'row mb-2 ml-auto'
        div.id = idLinha;

        var inputProduto = document.createElement('input');
        var divInputGroupProduto = document.createElement('div');

        divInputGroupProduto.className = 'input-group col-md-3';
        inputProduto.placeholder = 'Nome do Produto';
        inputProduto.type = 'text';
        inputProduto.className = 'form-control';
        divInputGroupProduto.appendChild(inputProduto);

        var inputValor = document.createElement('input');
        var divInputGroupValor = document.createElement('div');
        var divPrependValor = document.createElement('div');
        var spanPrependValor = document.createElement('span');
        var textPrependValor = document.createTextNode('R$');

        divInputGroupValor.className = 'input-group col-md-3';
        divPrependValor.className = 'input-group-prepend'; 
        spanPrependValor.className = 'input-group-text';
        inputValor.placeholder = 'Valor do produto';
        inputValor.type = 'number';
        inputValor.className = 'form-control';

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
        }else {
            var textAppendQtd = document.createTextNode('kilo(s)');
        }
        

        divInputGroupQtd.className = 'input-group col-md-3';
        divAppendQtd.className = 'input-group-append'; 
        spanAppendQtd.className = 'input-group-text';
        inputQtd.placeholder = 'Quantidade';
        inputQtd.type = 'number';
        inputQtd.className = 'form-control';

        divInputGroupQtd.appendChild(inputQtd);
        spanAppendQtd.appendChild(textAppendQtd);
        divAppendQtd.appendChild(spanAppendQtd);
        divInputGroupQtd.appendChild(divAppendQtd);

        var botaoExcluir = document.createElement('button');
        var textoBotaoExcluir = document.createTextNode('Excluir');
        
        botaoExcluir.className = "btn btn-danger"
        botaoExcluir.appendChild(textoBotaoExcluir);
        botaoExcluir.onclick = () => excluiLinha(idLinha);
    
        div.appendChild(divInputGroupProduto);
        div.appendChild(divInputGroupValor);
        div.appendChild(divInputGroupQtd);
        div.appendChild(botaoExcluir);
        document.getElementById('div').appendChild(div);

        linha++
    }

    function excluiLinha(linha) {
        document.getElementById(linha).remove();
    }