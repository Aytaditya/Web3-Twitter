import { chain } from "@/app/chain"
import { client } from "@/app/client"
import { getContract } from "thirdweb"
import { contractABI } from "./contractABI"

const contractAddress="0xA7B28e2402201ABB5799917914d6162FCEdCd3B7"

export const contract=getContract({
    client:client,
    chain:chain,
    address:contractAddress,
    abi:contractABI,
})