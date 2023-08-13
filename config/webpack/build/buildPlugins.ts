import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { IBuildOptions } from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import dotenv from 'dotenv';

export const buildPlugins = ({ paths, isDev }: IBuildOptions): webpack.WebpackPluginInstance[] => {
    const plugins = [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin( {
            template: paths.html,
        } ),
        new MiniCssExtractPlugin( {
            filename: 'css/[name].[contenthash:8].css',
        } ),
        new webpack.DefinePlugin( {
            __IS_DEV__: JSON.stringify( isDev ),
        } ),
        new webpack.DefinePlugin( {
            'process.env': JSON.stringify( dotenv.config().parsed )
        } )
    ];

    if (isDev) {
        plugins.push( new webpack.HotModuleReplacementPlugin() );
    }

    return plugins;
};
