
export default {
  plugins: [
    ['umi-plugin-react', {
      dva: true,
      routes: {
        exclude: [
          /model/,
        ],
      },
      locale: {
        enable: true,
        default: 'en-US',
        baseNavigator: true,
      },
    }],
    '../../plugins/sub',
  ],
}
