import { buildWebpackConfig } from './config/webpack/build/buildWebpackConfig';
import { BuildMode, IBuildEnv, IBuildPaths } from './config/webpack/build/types/config';
import path from 'path';

export default (env: IBuildEnv) => {

    const paths: IBuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
    };

    const mode: BuildMode = env.mode || 'development';
    const PORT = env.port || 3000;

    const isDev = mode === 'development';

    return buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT,
    });
};
