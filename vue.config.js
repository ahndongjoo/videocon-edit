// const { defineConfig } = require('@vue/cli-service') 
// const target = 'http://127.0.0.1:3000';
// module.exports = defineConfig({ 
// transpileDependencies: true, 
// configureWebpack: {devServer: 
// { 
// headers: 
// { 
//    "Cross-Origin-Opener-Policy": "same-origin", 
//    "Cross-Origin-Embedder-Policy": "require-corp",
//   }
//   ,devServer: {
//     port: 8080,
//     proxy: {
//         //proxy 요청을 보낼 api 시작 부분
//         '^/api': {
//             target,
//             changeOrigin: true
//         }
//     }
// }
// }}})
const target = 'http://127.0.0.1:3000';

module.exports={
    devServer: {
        port: 8080,
        proxy: {
            //proxy 요청을 보낼 api 시작 부분
            '^/api': {
                target,
                changeOrigin: true
            }
        }
    }
}