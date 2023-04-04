import { SigningStargateClient, StargateClient } from '@cosmjs/stargate';
import { OfflineSigner } from '@cosmjs/proto-signing';
import { SeiSigningStagateClientOptions, SeiStagateClientOptions } from './types';
export declare const getStargateClient: (rpcEndpoint: string, options?: SeiStagateClientOptions) => Promise<StargateClient>;
export declare const getSigningClient: (rpcEndpoint: string, signer: OfflineSigner, options?: SeiSigningStagateClientOptions) => Promise<SigningStargateClient>;
