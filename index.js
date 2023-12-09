import simpleLetterChecker from "simple-letter-checker";
import fs from 'fs';

const path = process.argv.slice(2)[0];
const text = fs.readFileSync(path, { encoding: 'utf-8' });

console.log(simpleLetterChecker(text));