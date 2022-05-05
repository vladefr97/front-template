module.exports = (env, args) => require(`./webpack.${args.mode}.config.js`)
