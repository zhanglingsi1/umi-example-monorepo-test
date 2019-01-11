import { join } from 'path';

export default (api, options = {}) => {
  const { cwd, paths, winPath } = api;
  api.chainWebpackConfig(config => {
    config.externals({
      'react': 'window.React',
      'react-dom': 'window.ReactDOM',
      'dva': 'window.dva',
    });
  });

  api.addHTMLHeadScript(() => {
    const scripts = (options.scripts || []).map(sub => {
      return { src: sub };
    });
    return [
      { src: 'https://unpkg.com/react@16.7.0-alpha.2/umd/react.development.js' },
      { src: 'https://unpkg.com/react-dom@16.7.0-alpha.2/umd/react-dom.development.js' },
      { src: 'https://unpkg.com/dva@2.4.1/dist/dva.min.js' },
      ...scripts,
    ];
  });

  api.addHTMLLink(() => {
    return (options.stylesheets || []).map(sub => {
      return { href: sub, rel: 'stylesheet' };
    });
  });
  console.log(paths);
  api.addRuntimePlugin(
    join(__dirname, 'app.js'),
  );
}
