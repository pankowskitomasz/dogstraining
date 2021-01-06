module.exports = {
    plugins:[
        require("tailwindcss"),
        require("autoprefixer"),
        require("@fullhuman/postcss-purgecss")({
            content:[
                "./index.html",
                "./contact.html",
                "./privacy.html",
                "./stories.html",
                "./training.html",
                "./error.php",
                "./confirm.php"
            ],
            defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g)||[]
        })
    ]
}