const program = require('commander');
const soap = require('soap');
const url = "http://typograf.artlebedev.ru/webservices/typograf.asmx";

const entities = {
  html: 1,
  xml: 2,
  mixed: 3,
  none: 4,
};

const options = {
  entityType: entities.html,
  useBr: false,
  useP: false,
  maxNobr: 0,
};

function useP() { 
  options.useP = true;
}

function useBr() { 
  options.useBr = true;
}

function setEntity(entity) { 
  options.entityType = entities[entity];
}

function setMaxNoBr(value) { 
  options.maxNobr = +value;
}

program
  .option('-p, --useP', 'Use html paragraphs', useP)
  .option('-br, --useBr', 'Use br elements', useBr)
  .option('-e, --entity <html|xml|mixed|none>', 'Set input type', setEntity)
  .option('-n, --noBr', 'Set max br elements', setMaxNoBr)
  ;

program
  .command('* <text>')
  .action(function (env) {
    soap.createClient(url, function (err, client) {
      if (err) return console.error(err);
      client.ProcessText(Object.assign(options, { text: env }), function (err, res) {
        if (err) return console.error(err);
        console.log(res.ProcessTextResult);
      })
    })
  });

program.parse(process.argv);