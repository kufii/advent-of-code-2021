import path from 'path'

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

    config.module.rules[4].include = [
      path.resolve(__dirname, 'src', 'routes'),
      path.resolve(__dirname, 'src', 'components'),
      path.resolve(__dirname, 'src', 'solutions')
    ]

    config.module.rules[5].exclude = [
      path.resolve(__dirname, 'src', 'routes'),
      path.resolve(__dirname, 'src', 'components'),
      path.resolve(__dirname, 'src', 'solutions')
    ]
  }
}
