export default {
  webpack(config, env, helpers) {
    config.resolve.modules.push(env.src)
    const publicPath = process.env.GITHUB_PAGES
      ? `/${process.env.GITHUB_PAGES}/`
      : '/'
    const ghEnv =
      process.env.GITHUB_PAGES && JSON.stringify(`${process.env.GITHUB_PAGES}`)

    config.output.publicPath = publicPath
    const { plugin } = helpers.getPluginsByName(config, 'DefinePlugin')[0]
    Object.assign(plugin.definitions, { 'process.env.GITHUB_PAGES': ghEnv })
  }
}
