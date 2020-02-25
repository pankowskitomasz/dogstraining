module.exports = {
    plugins:[
        require("tailwindcss"),
        require("autoprefixer"),
        require("@fullhuman/postcss-purgecss")({
            content:[
                "./index.html",
                "./privacy.html",
                "./error.php.html",
                "./confirm.php.html"
            ],
            defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g)||[]
        })
    ]
}