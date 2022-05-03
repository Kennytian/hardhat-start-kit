/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface SimpleCrowdsaleInterface extends ethers.utils.Interface {
  functions: {
    "amountRaised()": FunctionFragment;
    "balance(address)": FunctionFragment;
    "beneficiary()": FunctionFragment;
    "buyToken()": FunctionFragment;
    "checkGoalReached()": FunctionFragment;
    "crowdsaleClosed()": FunctionFragment;
    "deadline()": FunctionFragment;
    "decimals()": FunctionFragment;
    "fundingGoal()": FunctionFragment;
    "fundingGoalReached()": FunctionFragment;
    "fundingList(uint256)": FunctionFragment;
    "price()": FunctionFragment;
    "safeWithdrawal()": FunctionFragment;
    "token()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "amountRaised",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "balance", values: [string]): string;
  encodeFunctionData(
    functionFragment: "beneficiary",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "buyToken", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "checkGoalReached",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "crowdsaleClosed",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "deadline", values?: undefined): string;
  encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "fundingGoal",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "fundingGoalReached",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "fundingList",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "price", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "safeWithdrawal",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "amountRaised",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "balance", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "beneficiary",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "buyToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "checkGoalReached",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "crowdsaleClosed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deadline", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "fundingGoal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fundingGoalReached",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fundingList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "price", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "safeWithdrawal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;

  events: {
    "FundTransfer(address,uint256,bool)": EventFragment;
    "GoalReached(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "FundTransfer"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "GoalReached"): EventFragment;
}

export type FundTransferEvent = TypedEvent<
  [string, BigNumber, boolean] & {
    _backer: string;
    _amount: BigNumber;
    _isContribution: boolean;
  }
>;

export type GoalReachedEvent = TypedEvent<
  [string, BigNumber] & { _beneficiary: string; _amountRaised: BigNumber }
>;

export class SimpleCrowdsale extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: SimpleCrowdsaleInterface;

  functions: {
    amountRaised(overrides?: CallOverrides): Promise<[BigNumber]>;

    balance(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    beneficiary(overrides?: CallOverrides): Promise<[string]>;

    buyToken(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    checkGoalReached(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    crowdsaleClosed(overrides?: CallOverrides): Promise<[boolean]>;

    deadline(overrides?: CallOverrides): Promise<[BigNumber]>;

    decimals(overrides?: CallOverrides): Promise<[number]>;

    fundingGoal(overrides?: CallOverrides): Promise<[BigNumber]>;

    fundingGoalReached(overrides?: CallOverrides): Promise<[boolean]>;

    fundingList(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    price(overrides?: CallOverrides): Promise<[BigNumber]>;

    safeWithdrawal(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    token(overrides?: CallOverrides): Promise<[string]>;
  };

  amountRaised(overrides?: CallOverrides): Promise<BigNumber>;

  balance(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  beneficiary(overrides?: CallOverrides): Promise<string>;

  buyToken(
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  checkGoalReached(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  crowdsaleClosed(overrides?: CallOverrides): Promise<boolean>;

  deadline(overrides?: CallOverrides): Promise<BigNumber>;

  decimals(overrides?: CallOverrides): Promise<number>;

  fundingGoal(overrides?: CallOverrides): Promise<BigNumber>;

  fundingGoalReached(overrides?: CallOverrides): Promise<boolean>;

  fundingList(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  price(overrides?: CallOverrides): Promise<BigNumber>;

  safeWithdrawal(
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  token(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    amountRaised(overrides?: CallOverrides): Promise<BigNumber>;

    balance(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    beneficiary(overrides?: CallOverrides): Promise<string>;

    buyToken(overrides?: CallOverrides): Promise<void>;

    checkGoalReached(overrides?: CallOverrides): Promise<void>;

    crowdsaleClosed(overrides?: CallOverrides): Promise<boolean>;

    deadline(overrides?: CallOverrides): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<number>;

    fundingGoal(overrides?: CallOverrides): Promise<BigNumber>;

    fundingGoalReached(overrides?: CallOverrides): Promise<boolean>;

    fundingList(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    price(overrides?: CallOverrides): Promise<BigNumber>;

    safeWithdrawal(overrides?: CallOverrides): Promise<void>;

    token(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "FundTransfer(address,uint256,bool)"(
      _backer?: null,
      _amount?: null,
      _isContribution?: null
    ): TypedEventFilter<
      [string, BigNumber, boolean],
      { _backer: string; _amount: BigNumber; _isContribution: boolean }
    >;

    FundTransfer(
      _backer?: null,
      _amount?: null,
      _isContribution?: null
    ): TypedEventFilter<
      [string, BigNumber, boolean],
      { _backer: string; _amount: BigNumber; _isContribution: boolean }
    >;

    "GoalReached(address,uint256)"(
      _beneficiary?: null,
      _amountRaised?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { _beneficiary: string; _amountRaised: BigNumber }
    >;

    GoalReached(
      _beneficiary?: null,
      _amountRaised?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { _beneficiary: string; _amountRaised: BigNumber }
    >;
  };

  estimateGas: {
    amountRaised(overrides?: CallOverrides): Promise<BigNumber>;

    balance(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    beneficiary(overrides?: CallOverrides): Promise<BigNumber>;

    buyToken(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    checkGoalReached(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    crowdsaleClosed(overrides?: CallOverrides): Promise<BigNumber>;

    deadline(overrides?: CallOverrides): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<BigNumber>;

    fundingGoal(overrides?: CallOverrides): Promise<BigNumber>;

    fundingGoalReached(overrides?: CallOverrides): Promise<BigNumber>;

    fundingList(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    price(overrides?: CallOverrides): Promise<BigNumber>;

    safeWithdrawal(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    amountRaised(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    balance(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    beneficiary(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    buyToken(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    checkGoalReached(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    crowdsaleClosed(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deadline(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    fundingGoal(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    fundingGoalReached(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    fundingList(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    price(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    safeWithdrawal(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
