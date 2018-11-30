const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');
const util = require('util');
const open = require('open');
const commandLineArgs = require('command-line-args');

const readDir = util.promisify(fs.readdir);
const outputDir = path.resolve(__dirname, '../output');

const getNextFileName = async () => {
  const files = await readDir(outputDir);

  const lastFileNo = files.reduce((max, file) => {
    const matches = /result-([0-9]+)\.pdf/.exec(file);
    const no = matches ? parseInt(matches[1]) : 0;
    return max > no ? max : no;
  }, 0);

  return path.join(outputDir, `result-${lastFileNo + 1}.pdf`);
};

const convertPdf = async ({ port, paperSize = 'a4' }) => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();

  await page.goto(`http://localhost:${port}?paper-size=${paperSize.toLowerCase()}&raw=true`, {
    waitUntil: 'networkidle2',
  });

  const fileName = await getNextFileName();

  await page.emulateMedia('screen');
  await page.pdf({
    path: fileName,
    format: paperSize,
    printBackground: true,
    pageRanges: '1',
  });

  open(fileName);

  await browser.close();
};


const options = commandLineArgs([
  { name: 'paperSize', alias: 'p', type: String },
]);

convertPdf({
  port: process.env.PORT || 3000,
  paperSize: options.paperSize,
}).catch(console.error);
