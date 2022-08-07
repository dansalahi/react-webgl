import { Unity, useUnityContext } from 'react-unity-webgl'

const App = () => {

  const { unityProvider } = useUnityContext({
    loaderUrl: "unitybuild/2020.1/myunityapp.loader.js",
    dataUrl: "unitybuild/2020.1/myunityapp.data",
    frameworkUrl: "unitybuild/2020.1/myunityapp.framework.js",
    codeUrl: "unitybuild/2020.1/myunityapp.wasm",
    streamingAssetsUrl: "unitybuild/2020.1/streamingassets",
    // Additional configuration options.
    webglContextAttributes: {
      preserveDrawingBuffer: true,
    },
  })
  return <Unity unityProvider={unityProvider} style={{ width:980, height:700 }}></Unity>
}


export default App