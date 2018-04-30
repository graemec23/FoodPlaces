const Config = {
    development: {
      path: '../../client/public',
      port: process.env.PORT || 8080,
      cacheTime: process.env.CACHE_TIME
    },
    test: {
      port: process.env.PORT || 8080,
    }
  };
  
  const getConfigByEnv = () => Config[process.env.NODE_ENV || 'development'];
  
  Config.getConfigByEnv = getConfigByEnv;
  
  module.exports = Config;
  