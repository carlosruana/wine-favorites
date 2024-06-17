/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack(config, options) {
	  // Habilitar sourcemaps en desarrollo y producción
	  if (!options.dev) {
		config.devtool = 'source-map';
	  } else {
		config.devtool = 'eval-source-map';
	  }
	  return config;
	},
  };
  
  export default nextConfig;
  