import { Component } from '@angular/core';

@Component({
  selector: 'bitcoinsv-academy-big-little-endian',
  templateUrl: './big-little-endian.component.html',
  styleUrls: ['./big-little-endian.component.scss']
})
export class BigLittleEndianComponent {

    bigEndianEight;
    littleEndianEight;

    constructor() {

        //Big endian vs little endian example
        this.bigEndianEight = new Uint32Array(32);
        this.littleEndianEight = new Uint32Array(32);
        this.bigEndianEight[0] = 0xFF;
        this.littleEndianEight[0] = this.toLittleEndian(this.bigEndianEight[0]);

    }

    toLittleEndian (val:any) {
        return ((val & 0xFF) << 24)
        | ((val & 0xFF00) << 8)
        | ((val >> 8) & 0xFF00)
        | ((val >> 24) & 0xFF)
    }

}
