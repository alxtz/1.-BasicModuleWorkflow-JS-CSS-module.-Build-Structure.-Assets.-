// to fix the "The provided value ./Release is not an absolute path!" issue
const path = require('path');

module.exports = {

    entry: './Develop/entry.js',

    output: {
        path: path.resolve(__dirname, 'Release'),
        filename: 'build.js'
    },

    module: {

        rules: [
            {

                test: /\.css/,
                use: [
                    {
                        // merge css to build.js
                        loader: 'style-loader'
                    },
                    {
                        // add capability to require css, but still not merge to build.js
                        loader: 'css-loader'
                    }
                ]


            }
        ]

    }

}
