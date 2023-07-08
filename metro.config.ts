// import {getDefaultConfig} from '@expo/metro-config'

// module.exports = async () => {
//   const {
//     resolver: { sourceExts, assetExts },
//   } = await getDefaultConfig(__dirname);
  
//   return {
//     resolver: {
//       assetExts: assetExts.filter((ext: any) => ext !== 'svg'),
//       sourceExts: [...sourceExts, 'jsx', 'js', 'ts', 'tsx'],
//       extraNodeModules: {
//         'components': `${__dirname}/src/components`,
//         'screens': `${__dirname}/src/screens`,
//         'layouts': `${__dirname}/src/layouts`,
//         'utils': `${__dirname}/src/utils`,
//         'types': `${__dirname}/src/types`,
//       },
//     },
//   };
// };