const path = require('path')
const CopyPlugin = require('copy-webpack-plugin') //plugin nay hỗ trợ chuyển file tĩnh vào dist
const Dotenv = require('dotenv-webpack') // sữ dụng .env bằng webpack
const VENDOR_LIBS = [
    '@material-ui/data-grid',
    '@material-ui/lab',
    'axios',
    'body-scroll-lock',
    // "bootstrap",
    'clsx',
    'formik',
    'history',
    'jquery',
    'material-design-icons',
    'material-ui-phone-number',
    'react',
    'react-dom',
    'react-facebook-login',
    'react-image-magnify',
    'react-loadingg',
    'react-multi-carousel',
    'react-redux',
    'react-router',
    'react-router-dom',
    'recharts',
    'redux',
    'redux-saga',
    'use-dencrypt-effect',
    'yup',
    'react-scroll',
]

module.exports = {
    mode: 'development',
    entry: {
        bundle: './src/index.js',
        vendor: VENDOR_LIBS, //giúp lưu thư viện trên cache web
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'public/dist'),
        // publicPath: "/dist/" // tài nguyên mặc định
    },
    devServer: {
        // contentBase: path.join(__dirname, '/public/'),
        contentBase: __dirname + '/public/',
        inline: true,
        //  contentBasePublicPath: "/", // theo dõi mặc định
        open: 'chrome',
        port: 9000,
        overlay: true,
        historyApiFallback: true,
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                use: 'babel-loader',
                test: /\.js*/,
                exclude: '/node_modules/',
            },
            {
                use: ['style-loader', 'css-loader'],
                test: /\.css$/,
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
            {
                loader: 'file-loader',
                test: /\.(png|jpe?g|gif|woff2|eot|wav|mp3|ico|wav|ttf|svg)$/i,
                options: {
                    outputPath: 'images',
                    url: true,
                },
            },
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader'],
            },
        ],
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: 'src/assets/images/logo', to: 'logo' },
            ],
        }),
        new Dotenv(),
    ],
}
