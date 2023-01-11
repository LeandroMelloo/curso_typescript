import * as path from 'path';
import moduleAlias from 'module-alias';

/* __dirname => pega o diretorio atual
'../../' => volta duas pastas e pega todos os arquivos */
const files = path.resolve(__dirname, '../../');

// addAliases => aceita uma lista de modulos
moduleAlias.addAliases({
  '@src': path.join(files, 'src'),
  '@test': path.join(files, 'test'),
});
