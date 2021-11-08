import {
  Address,
  Bn,
  KeyPair,
  PrivKey,
  PubKey,
  TxBuilder,
  TxOut,
  Random,
  Base58,
  Base58Check,
  Hash,
  Bip39,
  Bip32
} from '@ts-bitcoin/core';

export class Wallet {

    private hdPrivKey: Bip32;
    private mnemonic: string;
    private testPrivKey: PrivKey;
    private testAddress: string;

    constructor(mnemonic: string) {
        if(mnemonic === null)
            this.mnemonic = this.generateNewMnemonic();
        else
            this.mnemonic = mnemonic;

        this.hdPrivKey = this.generateNewhdPriveKey();
        this.testPrivKey = this.generateNewPrivKey();
        this.testAddress = this.generateNewTestAddress();
    }

    private generateNewMnemonic(): string {
        return new Bip39().fromRandom().toString();
    }

    private generateNewhdPriveKey(): Bip32 {
        const seed = Bip39.fromString(this.mnemonic).toSeed();
        return new Bip32().fromSeed(seed);
    }

    private generateNewPrivKey(): PrivKey {
        return this.hdPrivKey.privKey;
    }

    private generateNewTestAddress(): string {
        return this.testAddress = Address.Testnet.fromPrivKey(this.testPrivKey).toString();
    }



//Getters

    public getMnemonic(): string {
        return this.mnemonic;
    }

    public getTestPrivKey(): PrivKey {
        return this.testPrivKey;
    }

    public getTestAddress(): string {
        return this.testAddress;
    }

}
