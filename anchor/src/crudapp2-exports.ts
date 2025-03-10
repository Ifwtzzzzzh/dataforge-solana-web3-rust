// Here we export some useful types and functions for interacting with the Anchor program.
import { AnchorProvider, Program } from "@coral-xyz/anchor";
import { Cluster, PublicKey } from "@solana/web3.js";
import CrudIDL from "../target/idl/crud.json";
import type { Crud } from "../target/types/crud";

// Re-export the generated IDL and type
export { Crud, CrudIDL };

// The programId is imported from the program IDL.
export const COUNTER_PROGRAM_ID = new PublicKey(CrudIDL.address);

// This is a helper function to get the Crudapp2 Anchor program.
export function getCrudapp2Program(
  provider: AnchorProvider,
  address?: PublicKey
) {
  return new Program(
    {
      ...CrudIDL,
      address: address ? address.toBase58() : CrudIDL.address,
    } as Crud,
    provider
  );
}

// This is a helper function to get the program ID for the Crudapp2 program depending on the cluster.
export function getCrudapp2ProgramId(cluster: Cluster) {
  switch (cluster) {
    case "devnet":
    case "testnet":
      // This is the program ID for the Crudapp2 program on devnet and testnet.
      return new PublicKey("3qvvESvw2WA9bkhgrN8WosoP9QQEvS9PUV3Sy4yeDtHo");
    case "mainnet-beta":
    default:
      return COUNTER_PROGRAM_ID;
  }
}
