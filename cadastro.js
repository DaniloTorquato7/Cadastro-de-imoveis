const imoveis = [];

let menu;

do {
    menu = prompt(`Cadastro de imoveis:
    Imoveis Cadastrados: ${imoveis.length}
    1- Salvar um novo imóvel
    2- Mostrar imóveis cadastrados
    3- Sair`);

    switch (menu) {
        
        case "1":
            const novoImovel = {
                nome: prompt("Qual o nome do proprietario"),
                quartos: parseInt(prompt("Quantos quartos?")),
                banheiros: parseInt(prompt("Quantos banheiros?")),
                garagem: prompt("Possui garagem? (Sim/Não)").toLowerCase() === 'sim'
            };

            imoveis.push(novoImovel);
            break;
            
        case "2":
            if (imoveis == 0) {
                alert("Não ha imóveis cadastrados")
            }
            else{alert("Imóveis cadastrados:\n" + JSON.stringify(imoveis, null, 2));
        }
            
            break;
        case "3":
            alert('Encerrando...')
            alert('Até breve!')
            break;
    
        default:
            alert("Opção invalida")
            break;
        }
} while (menu !== '3');


