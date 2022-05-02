/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { BusFactory, BusFactoryInterface } from "../BusFactory";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "Log",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "busList",
    outputs: [
      {
        internalType: "contract Bus",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "string",
        name: "_model",
        type: "string",
      },
    ],
    name: "calcualteAddressAsm",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "string",
        name: "_model",
        type: "string",
      },
      {
        internalType: "bytes32",
        name: "_salt",
        type: "bytes32",
      },
    ],
    name: "calcualteSaltAddress",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "string",
        name: "_model",
        type: "string",
      },
      {
        internalType: "bytes32",
        name: "_salt",
        type: "bytes32",
      },
    ],
    name: "calcualteSaltAddressAsm",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "string",
        name: "_model",
        type: "string",
      },
      {
        internalType: "bytes32",
        name: "_salt",
        type: "bytes32",
      },
    ],
    name: "create2AndSendEther",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "string",
        name: "_model",
        type: "string",
      },
    ],
    name: "createAndSendEther",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "string",
        name: "_model",
        type: "string",
      },
    ],
    name: "createBus",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "string",
        name: "_model",
        type: "string",
      },
      {
        internalType: "bytes32",
        name: "_salt",
        type: "bytes32",
      },
    ],
    name: "createBus2",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "getBus",
    outputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "string",
        name: "model",
        type: "string",
      },
      {
        internalType: "address",
        name: "bus_addr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611da8806100206000396000f3fe608060405260043610620000925760003560e01c80639f07d80b11620000615780639f07d80b146200014c578063c33cd615146200016c578063ca5bedc6146200018c578063e1ee1b0f14620001ba578063e203966014620001da5762000092565b80633d4b30151462000097578063423ac5ac14620000b75780637f6eb05714620000e55780639dc3d5c8146200012c575b600080fd5b620000b56004803603810190620000af919062000c54565b6200021e565b005b348015620000c457600080fd5b50620000e36004803603810190620000dd919062000bfa565b620002ce565b005b348015620000f257600080fd5b506200011160048036038101906200010b919062000d08565b62000375565b60405162000123949392919062000fea565b60405180910390f35b6200014a600480360381019062000144919062000c54565b62000598565b005b6200016a600480360381019062000164919062000c54565b62000748565b005b6200018a600480360381019062000184919062000bfa565b62000823565b005b3480156200019957600080fd5b50620001b86004803603810190620001b2919062000c54565b620008cc565b005b620001d86004803603810190620001d2919062000bfa565b62000979565b005b348015620001e757600080fd5b5062000206600480360381019062000200919062000d08565b62000a40565b6040516200021591906200103e565b60405180910390f35b60003482908585604051620002339062000a80565b6200024092919062000fb6565b82906040518091039083f5905090508015801562000262573d6000803e3d6000fd5b5090506000819080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b60008282604051620002e09062000a80565b620002ed92919062000fb6565b604051809103906000f0801580156200030a573d6000803e3d6000fd5b5090506000819080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050565b600060606000806000808681548110620003b8577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508073ffffffffffffffffffffffffffffffffffffffff16638da5cb5b6040518163ffffffff1660e01b815260040160206040518083038186803b1580156200042c57600080fd5b505afa15801562000441573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000467919062000bce565b8173ffffffffffffffffffffffffffffffffffffffff16630ad9d0526040518163ffffffff1660e01b815260040160006040518083038186803b158015620004ae57600080fd5b505afa158015620004c3573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250810190620004ee919062000cc3565b8273ffffffffffffffffffffffffffffffffffffffff16636438315e6040518163ffffffff1660e01b815260040160206040518083038186803b1580156200053557600080fd5b505afa1580156200054a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000570919062000bce565b8373ffffffffffffffffffffffffffffffffffffffff16319450945094509450509193509193565b600060405180602001620005ac9062000a80565b6020820181038252601f19601f820116604052508484604051602001620005d592919062000fb6565b604051602081830303815290604052604051602001620005f792919062000f8e565b6040516020818303038152906040529050600060ff60f81b308484805190602001206040516020016200062e949392919062000f38565b60405160208183030381529060405280519060200120905060008160001c90507f1dfffa052d4a63bd70f14b863e128979d1c59e3589a0a3beb2633a120047042d816040516200067f9190620010f1565b60405180910390a16000843488886040516200069b9062000a80565b620006a892919062000fb6565b82906040518091039083f59050905080158015620006ca573d6000803e3d6000fd5b5090507f1dfffa052d4a63bd70f14b863e128979d1c59e3589a0a3beb2633a120047042d81604051620006fe9190620010bf565b60405180910390a18173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146200073f57600080fd5b50505050505050565b6000604051806020016200075c9062000a80565b6020820181038252601f19601f8201166040525084846040516020016200078592919062000fb6565b604051602081830303815290604052604051602001620007a792919062000f8e565b604051602081830303815290604052905060008282516020840134f59050803b620007d157600080fd5b7f1dfffa052d4a63bd70f14b863e128979d1c59e3589a0a3beb2633a120047042d816040516200080291906200108d565b60405180910390a18073ffffffffffffffffffffffffffffffffffffffff16ff5b6000348383604051620008369062000a80565b6200084392919062000fb6565b6040518091039082f090508015801562000861573d6000803e3d6000fd5b5090506000819080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050565b6000818484604051620008df9062000a80565b620008ec92919062000fb6565b8190604051809103906000f59050801580156200090d573d6000803e3d6000fd5b5090506000819080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b6000604051806020016200098d9062000a80565b6020820181038252601f19601f820116604052508383604051602001620009b692919062000fb6565b604051602081830303815290604052604051602001620009d892919062000f8e565b6040516020818303038152906040529050600081516020830134f09050803b62000a0157600080fd5b7f1dfffa052d4a63bd70f14b863e128979d1c59e3589a0a3beb2633a120047042d8160405162000a3291906200105b565b60405180910390a150505050565b6000818154811062000a5157600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6109fe806200137583390190565b600062000aa562000a9f8462001157565b62001123565b90508281526020810184848401111562000abe57600080fd5b62000acb84828562001258565b509392505050565b600062000aea62000ae48462001157565b62001123565b90508281526020810184848401111562000b0357600080fd5b62000b1084828562001267565b509392505050565b60008135905062000b298162001326565b92915050565b60008151905062000b408162001326565b92915050565b60008135905062000b578162001340565b92915050565b600082601f83011262000b6f57600080fd5b813562000b8184826020860162000a8e565b91505092915050565b600082601f83011262000b9c57600080fd5b815162000bae84826020860162000ad3565b91505092915050565b60008135905062000bc8816200135a565b92915050565b60006020828403121562000be157600080fd5b600062000bf18482850162000b2f565b91505092915050565b6000806040838503121562000c0e57600080fd5b600062000c1e8582860162000b18565b925050602083013567ffffffffffffffff81111562000c3c57600080fd5b62000c4a8582860162000b5d565b9150509250929050565b60008060006060848603121562000c6a57600080fd5b600062000c7a8682870162000b18565b935050602084013567ffffffffffffffff81111562000c9857600080fd5b62000ca68682870162000b5d565b925050604062000cb98682870162000b46565b9150509250925092565b60006020828403121562000cd657600080fd5b600082015167ffffffffffffffff81111562000cf157600080fd5b62000cff8482850162000b8a565b91505092915050565b60006020828403121562000d1b57600080fd5b600062000d2b8482850162000bb7565b91505092915050565b62000d3f81620011bc565b82525050565b62000d5a62000d5482620011bc565b6200129d565b82525050565b62000d7562000d6f82620011d0565b620012b1565b82525050565b62000d9062000d8a82620011fc565b620012bb565b82525050565b600062000da3826200118a565b62000daf8185620011a0565b935062000dc181856020860162001267565b80840191505092915050565b62000dd88162001230565b82525050565b600062000deb8262001195565b62000df78185620011ab565b935062000e0981856020860162001267565b62000e148162001308565b840191505092915050565b600062000e2e601383620011ab565b91507f63616c6375616c74654164647265737341736d000000000000000000000000006000830152602082019050919050565b600062000e70601783620011ab565b91507f63616c6375616c746553616c744164647265737341736d0000000000000000006000830152602082019050919050565b600062000eb2601683620011ab565b91507f6e6577206164647265737320776974682073616c7420000000000000000000006000830152602082019050919050565b600062000ef4601183620011ab565b91507f70726564696374656441646472657373200000000000000000000000000000006000830152602082019050919050565b62000f328162001226565b82525050565b600062000f46828762000d60565b60018201915062000f58828662000d45565b60148201915062000f6a828562000d7b565b60208201915062000f7c828462000d7b565b60208201915081905095945050505050565b600062000f9c828562000d96565b915062000faa828462000d96565b91508190509392505050565b600060408201905062000fcd600083018562000d34565b818103602083015262000fe1818462000dde565b90509392505050565b600060808201905062001001600083018762000d34565b818103602083015262001015818662000dde565b905062001026604083018562000d34565b62001035606083018462000f27565b95945050505050565b600060208201905062001055600083018462000dcd565b92915050565b60006040820190508181036000830152620010768162000e1f565b905062001087602083018462000d34565b92915050565b60006040820190508181036000830152620010a88162000e61565b9050620010b9602083018462000d34565b92915050565b60006040820190508181036000830152620010da8162000ea3565b9050620010eb602083018462000d34565b92915050565b600060408201905081810360008301526200110c8162000ee5565b90506200111d602083018462000d34565b92915050565b6000604051905081810181811067ffffffffffffffff821117156200114d576200114c620012d9565b5b8060405250919050565b600067ffffffffffffffff821115620011755762001174620012d9565b5b601f19601f8301169050602081019050919050565b600081519050919050565b600081519050919050565b600081905092915050565b600082825260208201905092915050565b6000620011c98262001206565b9050919050565b60007fff0000000000000000000000000000000000000000000000000000000000000082169050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006200123d8262001244565b9050919050565b6000620012518262001206565b9050919050565b82818337600083830152505050565b60005b83811015620012875780820151818401526020810190506200126a565b8381111562001297576000848401525b50505050565b6000620012aa82620012c5565b9050919050565b6000819050919050565b6000819050919050565b6000620012d28262001319565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b60008160601b9050919050565b6200133181620011bc565b81146200133d57600080fd5b50565b6200134b81620011fc565b81146200135757600080fd5b50565b620013658162001226565b81146200137157600080fd5b5056fe6080604052604051620009fe380380620009fe833981810160405281019062000029919062000204565b816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550806001908051906020019062000081929190620000cb565b5030600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050620003dd565b828054620000d9906200032f565b90600052602060002090601f016020900481019282620000fd576000855562000149565b82601f106200011857805160ff191683800117855562000149565b8280016001018555821562000149579182015b82811115620001485782518255916020019190600101906200012b565b5b5090506200015891906200015c565b5090565b5b80821115620001775760008160009055506001016200015d565b5090565b6000620001926200018c8462000292565b6200025e565b905082815260208101848484011115620001ab57600080fd5b620001b8848285620002f9565b509392505050565b600081519050620001d181620003c3565b92915050565b600082601f830112620001e957600080fd5b8151620001fb8482602086016200017b565b91505092915050565b600080604083850312156200021857600080fd5b60006200022885828601620001c0565b925050602083015167ffffffffffffffff8111156200024657600080fd5b6200025485828601620001d7565b9150509250929050565b6000604051905081810181811067ffffffffffffffff8211171562000288576200028762000394565b5b8060405250919050565b600067ffffffffffffffff821115620002b057620002af62000394565b5b601f19601f8301169050602081019050919050565b6000620002d282620002d9565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60005b8381101562000319578082015181840152602081019050620002fc565b8381111562000329576000848401525b50505050565b600060028204905060018216806200034857607f821691505b602082108114156200035f576200035e62000365565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620003ce81620002c5565b8114620003da57600080fd5b50565b61061180620003ed6000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80630ad9d0521461005c57806313af40351461007a57806346d75c8c146100965780636438315e146100b25780638da5cb5b146100d0575b600080fd5b6100646100ee565b6040516100719190610410565b60405180910390f35b610094600480360381019061008f9190610343565b61017c565b005b6100b060048036038101906100ab919061036c565b6101bf565b005b6100ba6101d9565b6040516100c791906103f5565b60405180910390f35b6100d86101ff565b6040516100e591906103f5565b60405180910390f35b600180546100fb90610523565b80601f016020809104026020016040519081016040528092919081815260200182805461012790610523565b80156101745780601f1061014957610100808354040283529160200191610174565b820191906000526020600020905b81548152906001019060200180831161015757829003601f168201915b505050505081565b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b80600190805190602001906101d5929190610223565b5050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b82805461022f90610523565b90600052602060002090601f0160209004810192826102515760008555610298565b82601f1061026a57805160ff1916838001178555610298565b82800160010185558215610298579182015b8281111561029757825182559160200191906001019061027c565b5b5090506102a591906102a9565b5090565b5b808211156102c25760008160009055506001016102aa565b5090565b60006102d96102d484610463565b610432565b9050828152602081018484840111156102f157600080fd5b6102fc8482856104e1565b509392505050565b600081359050610313816105c4565b92915050565b600082601f83011261032a57600080fd5b813561033a8482602086016102c6565b91505092915050565b60006020828403121561035557600080fd5b600061036384828501610304565b91505092915050565b60006020828403121561037e57600080fd5b600082013567ffffffffffffffff81111561039857600080fd5b6103a484828501610319565b91505092915050565b6103b6816104af565b82525050565b60006103c782610493565b6103d1818561049e565b93506103e18185602086016104f0565b6103ea816105b3565b840191505092915050565b600060208201905061040a60008301846103ad565b92915050565b6000602082019050818103600083015261042a81846103bc565b905092915050565b6000604051905081810181811067ffffffffffffffff8211171561045957610458610584565b5b8060405250919050565b600067ffffffffffffffff82111561047e5761047d610584565b5b601f19601f8301169050602081019050919050565b600081519050919050565b600082825260208201905092915050565b60006104ba826104c1565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b82818337600083830152505050565b60005b8381101561050e5780820151818401526020810190506104f3565b8381111561051d576000848401525b50505050565b6000600282049050600182168061053b57607f821691505b6020821081141561054f5761054e610555565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b6105cd816104af565b81146105d857600080fd5b5056fea26469706673582212201d6f3b28f724d8d0d3bd94c2e835723239d5cc2387fd3dfc1078c0880c8bd19664736f6c63430008000033a2646970667358221220f850bc8930c909a3305f6c32ba6ef5c22ea45aca5225c0bedaa721718cec9f8a64736f6c63430008000033";

export class BusFactory__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BusFactory> {
    return super.deploy(overrides || {}) as Promise<BusFactory>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): BusFactory {
    return super.attach(address) as BusFactory;
  }
  connect(signer: Signer): BusFactory__factory {
    return super.connect(signer) as BusFactory__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BusFactoryInterface {
    return new utils.Interface(_abi) as BusFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BusFactory {
    return new Contract(address, _abi, signerOrProvider) as BusFactory;
  }
}
