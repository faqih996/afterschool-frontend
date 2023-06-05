/** @type {import('next').NextConfig} */
const nextConfig = {}

const withPlugins = require("next-compose-plugins");
const withCss = require("@zeit/next-css");
const withReactSvg = require("next-react-svg");
const withImages = require("next-images");

const path = require("path")

module.exports = withPlugins([
    withCss({}),
    withImages({}),
    withReactSvg({
        include: path.resolve(__dirname, "./public/src/svg"),
        webpack(config, options) {
            return config;
        }
    })
]);
