export class UTXOModel {

    height = "";
    txPos = "";
    txHash = "";
    value = "";

    constructor(height: string, txPos: string, txHash: string, value: string) {
        this.height = height;
        this.txPos = txPos;
        this.txHash = txHash;
        this.value = value;
    }

}
