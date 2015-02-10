
module.exports = {
    module: {
        loaders: [
            {test: /\.tpl\.html$/, loaders: ["html"]},
            {test: /\.css$/, loaders: ["style/useable", "css"]},
            {test: /\.less$/, loaders: ["style/useable", "css", "less"]},
        ]
    },
    output: {
        path: "js/",
        publicPath: "js/",
        filename: "bundle.js"
    }
};
