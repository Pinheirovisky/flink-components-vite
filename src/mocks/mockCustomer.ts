import { Customers } from "protocols/customers";

const mockCustomer: Customers = {
  id: 1,
  cliente: 1,
  origemCliente: 1,
  tipoCliente: {
    nome: "PESSOA_FISICA",
    descricao: "Pessoa física",
  },
  tipoClienteValue: "213",
  numeroUnidadeCNPJ: "123455",
  digitoVerificador: "123541",
  clientePrincipal: "S",
  razaoSocial: "MARCOS DE VASCONCELOS GOMES",
  inscricaoMunicipal: "",
  inscricaoEstadual: "",
  contribuinte: "S",
  operadorTransporteMultimodal: "S",
  faturaEdi: "S",
  impressaoRelatorioDacte: "S",
  relatorioFaturaVagao: "S",
  relatorioCancelamentoFaturas: "S",
  relatorioXml: "S",
  relatorioDacte: "S",
  relatorioDemonstrativoFaturaCliente: "S",
  telefones: [],
  emails: [
    {
      id: 6132,
      endereco: "",
      tipoEmail: {
        codigo: "2",
        nome: "FATURA_FNS",
        descricao: "Fatura FNS",
      },
      enviarEmail: "S",
      ativo: "S",
    },
    {
      id: 6134,
      endereco: "ITRI-FCA@EMAIL.COM",
      tipoEmail: {
        codigo: "3",
        nome: "FATURA_FCA",
        descricao: "Fatura FCA",
      },
      enviarEmail: "S",
      ativo: "S",
    },
    {
      id: 6133,
      endereco: "",
      tipoEmail: {
        codigo: "1",
        nome: "FATURA_VLI",
        descricao: "Fatura VLI",
      },
      enviarEmail: "S",
      ativo: "S",
    },
  ],
  endereco: {
    id: 10186,
    tipoEndereco: {
      codigo: "2",
      nome: "PRINCIPAL",
      descricao: "Endereço principal",
    },
    municipio: {
      id: 12,
      nome: "Curitiba",
      unidadeFederacao: {
        id: "PARANÁ",
        sigla: "PR",
      },
      ativo: "S",
      microrregioes: [
        {
          descricao: "DESCRICAO 56655 TEST",
          id: 1124740,
          tipoMicrorregiao: {
            codigo: "F",
            descricao: "FATURAMENTO",
          },
        },
      ],
    },
    cep: "30180-112",
    bairro: "LOURDES",
    endereco: " AV. OLEGARIO MACIEL. 1903. APTO 502",
    ativo: "S",
  },
  cpfCnpj: "00002984687",
};

export { mockCustomer };
