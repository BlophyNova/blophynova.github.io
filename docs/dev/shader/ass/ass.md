# Abbreviated Shader Source简介

Abbreviated Shader Source(简称ass)是被设计用于降低Blophy谱师制作Shader时的难度的一种文件格式,文件后缀名为`*.ass`,编译结果为`*.shader`.

## 结构

其结构为:
```
shader <name1>:
    properties: //材质属性...
        //...
    sub shader: //第一个子着色器的代码...
        //...
    sub shader: //第二个子着色器的代码...
        //...
    using customEditor: //自定义编辑器声明...
    using fallback: //Fallback声明...
    
shader <name2>:
    properties: //材质属性...
        //...
    sub shader: //子着色器的代码...
        //...
    using customEditor: //自定义编辑器声明...
    using fallback: //Fallback声明...
```

与官方的`*.shader`文件不同,同一个`*.ass`中可以声明多个shader.

## 简单的示例

如下定义一个ass文件,对标[这里](https://docs.unity3d.com/cn/2021.3/Manual/SL-Shader.html)的示例:

```
shader example:
    using customEditor: exampleCustomEditor
    properties:
        // 材质属性声明...
    sub shader:
        pass:
            // 定义通道的代码...
    fallback: exampleFallbackShader
```

## 自定义编辑器

下面简单演示customEditor的语法:

> 简单使用

```
using customEditor: <你的类名>
```

> For Render Pipeline

```
using customEditor: <你的类名>
    with <特定渲染管线资源名称> uses <自定义编辑器名>
```

就像

```
using customEditor: exampleShaderGUI
    with exampleRenderPipelineShaderGUI uses exampleRenderPipelineAsset
    with otherExampleRenderPipelineShaderGUI uses otherExampleRenderPipelineAsset
```

## 材质属性

### 如何定义属性

在ass中,一个属性可按以下语法声明:

```
attr <name>[(friendlyName)]: <type> [= defaultValue] [with attributes...]
```

示例如下:

```
attr mainTex(MainTexture): 2D = white
```

这等价于下面的ShaderLab:

```
_mainTex ("MainTexture", 2D) = "white" {}
```

### SubShader写法

下面是一个基本的SubShader:

```
sub shader:
    with tags:
        RenderType = Opaque
    lod = 200
    pass:
        name: base
        with tages:
            LightMode = ForwardBase
        with settings:
            blend: 
                src: SrcAlpha
                target: OneMinusSrcAlpha
            zwrite: on
        with code:
            type: hlsl/cg
            file: 
                targetcode.hlsl
                targetcode.cginc
```