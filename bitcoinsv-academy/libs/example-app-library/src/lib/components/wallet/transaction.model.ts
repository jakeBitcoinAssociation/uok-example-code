export class Transaction {

    txid = "";
    hash = "";
    size = "";
    version = "";
    locktime = "";
    vin: string[] = [];
    vout: string[] = [];
    blockhash = "";
    confirmations = "";
    time = "";
    blocktime = "";

    constructor(txid?: string, hash?: string, size?: string, version?: string,
               locktime?: string, vin?: string[], vout?: string[], blockhash?: string,
               confirmations?: string, time?: string, blocktime?: string) {

        if (txid)
            this.txid = txid;
        else
            this.txid = "";

        if (hash)
            this.hash = hash;
        else
            this.hash = "";

        if (size)
            this.size = size;
        else
            this.size = "";

        if (version)
            this.version = version;
        else
            this.version = "";

        if (locktime)
            this. locktime = locktime;
        else
            this.locktime = "";

        if (vin)
            this.vin = vin;
        else
            this.vin = [];

        if (vout)
            this.vout = vout;
        else
            this.vout = [];

        if (blockhash)
            this.blockhash = blockhash;
        else
            this.blockhash = "";

        if (confirmations)
            this.confirmations = confirmations;
        else
            this.confirmations = "";

        if (time)
            this.time = time;
        else
            this.time = "";

        if (blocktime)
            this.blocktime = blocktime;
        else
            this.blocktime = "";
    }

}
