export class TransactionModel {

    txid = "";
    h = "";
    size = "";
    version = "";
    locktime = "";
    vin: string[] = [];
    vout: string[] = [];
    blockhash = "";
    confirmations = "";
    time = "";
    blocktime = "";

    constructor(txid: string, hash: string, size: string, version: string, locktime: string, vin: string[], vout: string[], blockhash: string, confirmations: string, time: string, blocktime: string) {
        this.txid = txid;
        this.h = hash;
        this.size = size;
        this.version = version;
        this.locktime = locktime;
        this.vin = vin;
        this.vout = vout;
        this.blockhash = blockhash;
        this.confirmations = confirmations;
        this.time = time;
        this.blocktime = blocktime
    }

}
