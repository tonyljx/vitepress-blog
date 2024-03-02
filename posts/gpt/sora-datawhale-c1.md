source： [【AI+X 组队学习】Sora 原理与技术实战：Sora 技术路径详解\_哔哩哔哩\_bilibili](https://www.bilibili.com/video/BV1wm411f7gf/?vd_source=6d67eb57117d4fd1d607095915b81295)

内容

- 笔记
- 自己的心得

---

# 笔记

资源：[Sora 原理与技术实战 - 飞书云文档 (feishu.cn)](https://datawhaler.feishu.cn/wiki/LxSCw0EyRidru1kFkttc1jNQnnh)

课程目录

- sora 技术路径
- sd 技术解析，基于 sd 的视频生成介绍和介绍
- transformer 技术解析+实战
- transformer diffusion 的视频生成姐系
- 声音生成 tts 技术
- 训练 sora，video caption
- ai 短片

本节课目录

- 能力
- 训练
- 关键技术
- 思考

---

能力

- 长视频：最高支持 60 秒
- 视频插值：基于已有视频前后扩展，视频融合
- 一致性：人物场景的一致性（不同镜头，时间流逝下，人物保持一致）

- 同一场景的多角度（分镜）
- 任意分辨率，宽高比的视频输出
- 多模态：图，文，视频都可以作为输入

训练流程：

- visual encoder：原始数据
  - 术语：VAE 编码器（压缩到低维空间），潜空间（latent space）
- diffusion transformer：文本语义到图像雨衣
- transformer decoder：通过 vae 解码器恢复成视频数据

详细：

- 视频数据统一表达：
  - `N * h * W` 的图像，通过 Encoder 切分成 patch，然后编程一维享乐
  - 想象：立方体 -> 打平的一条线

> encoder 的时候，既有时间信息（立方体），也有空间信息（对相邻 x 个取平均，可以记录位置信息）

bg：Diffusion 知识补充

- diffusion：从噪声走构建样本
- 相关论文：DDPM（分步构建）
- 流程
  - encoder
  - noise 加噪
  - Unet
- 训练：Unet（网络模型结构，规定模型规模）DNN 作为骨架

---

核心技术拆解哦哦哦李可开票；

- Vit：vision transformer，图片用 patch 变换，patch 转换成一维向量作为 transformer 输入

  - 处理图片

- Vit + 时间序列
  - 视频数据包含时间序列
