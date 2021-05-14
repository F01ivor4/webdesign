// module.exports = {
//     webpack(config) {
//         console.log('config', config.module.rules[1].oneOf.unshift({
//             test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
//             loader: require.resolve('url-loader'),
//             options: {
//                 limit: 10,
//                 name: 'static/media/[name].[hash:8].[ext]'
//             }
//         }));
//         return config
//     }
// }

const withPlugins = require('next-compose-plugins');
const css = require('@zeit/next-css')

const nextConfig = {
    webpack: function (config) {
        config.module.rules.push({
            test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 100000,
                    // name: 'static/media/[name].[hash:8].[ext]'
                    name: '[name].[ext]'
                }
            }
        })
        return config
    }
}

module.exports = withPlugins([
    [css],
], nextConfig);