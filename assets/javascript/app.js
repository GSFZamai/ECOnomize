    class Item {
        constructor(nome, qtd, valor, unidade) {
            this.nome = nome;
            this.qtd = qtd;
            this.valor = valor;
            this.unidade = unidade;
            this.valorUnitario = (valor/qtd).toFixed(2);
        }

        validaDados() {
            for (let i in this) {
                if (this[i] === undefined || this[i] === '' || this[i] === null) {
                    return false;
                }
            }
            return true
        }
    }

    class Bd {
        constructor() {
            let id = localStorage.getItem('id');

            if (id === null) {
                localStorage.setItem('id', 0);
            }
        }

        getProximoId() {
            let proximoId = localStorage.getItem('id');

            return parseInt(proximoId) + 1;
        }

        registraItem(item) {
            let id = this.getProximoId();

            localStorage.setItem(id, JSON.stringify(item));

            localStorage.setItem('id', id);
        }

        listarItens() {
            let itens = []

            let id = localStorage.getItem('id');

            for (let i = 1; i <= id; i++) {
                let item = JSON.parse(localStorage.getItem(i));

                if (item == null) {
                    continue
                }

                itens.push(item);
            }

            return itens;
        }
    }

    let bd = new Bd();

    function cadastraItem() {
        let nome = document.getElementById('nome');
        let qtd = document.getElementById('qtd');
        let valor = document.getElementById('valor');
        let unidade = document.getElementById('unidade');

        let item = new Item(
            nome.value,
            qtd.value,
            valor.value,
            unidade.value
        )

        if (item.validaDados()) {
            bd.registraItem(item);
            carregaItens();
        }else {
            console.log('falta algo');
        }
    }

    function carregaItens() {
        let itens = [];

        itens = bd.listarItens();

        itens.forEach(item => console.log(item.nome, item.valorUnitario))
    }