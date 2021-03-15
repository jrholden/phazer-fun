let path = require('path');
let externals = require('webpack-node-externals');


const entry = path.join(__dirname, 'src/server/server');
const deployPath = path.resolve(__dirname, 'dist/server')

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: entry,
    target: 'node',
    node: {
        __dirname: false
    },
    output: {
        filename: 'server.bundle.js',
        path: deployPath,
        clean: true
    },
    plugins: [
        
      ],

    module: {
        rules: [
            {
                
            }
        ]
    },
    
    externals: [ externals() ]

};
