const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // Entry point for your application
    entry: './src/index.tsx', // Use .tsx file as the entry point

    // Output configuration
    output: {
        path: path.resolve(__dirname, 'dist'), // Output the bundled files in the 'dist' folder
        filename: 'bundle.js', // The name of the output bundle
        publicPath: '/task-nest-app/',
    },

    // Module configuration for processing files
    module: {
        rules: [
            {
                test: /\.tsx?$/, // Match both .ts and .tsx files
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader', // Use ts-loader for TypeScript files
                },
            },
            {
                test: /\.css$/, // If you have any CSS files
                use: ['style-loader', 'css-loader'],
            },
        ],
    },

    // Resolve file extensions for JSX/TSX
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'], // Add .ts and .tsx
    },

    // Plugins for handling HTML file generation
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html', // Specify the location of your index.html
        }),
    ],

    // Dev server configuration for development
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'), // Replace contentBase with static
        },
        port: 3000,
        open: true, // Open the browser automatically
    },
}
