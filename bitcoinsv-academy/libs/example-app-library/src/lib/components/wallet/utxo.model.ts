export class UTXOModel {

    height = "";
    tx_pos = "";
    tx_hash = "";
    value = "";

    constructor(height: string, txPos: string, txHash: string, value: string) {
        this.height = height;
        this.tx_pos = txPos;
        this.tx_hash = txHash;
        this.value = value;
    }

}
