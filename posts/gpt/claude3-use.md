---
date: 2024-03-06
desc: claude3使用,视觉API详细评测
---

# Claude3 视觉 API 评测

:::warning URL⭐️
开通 GPT4 和 Cluade3 的朋友可以通过这个链接进行开通 GPT4 以及 Claude3 相关服务，目前还会送一个浏览器环境和海外邮箱，会有 2 美金的优惠

[https://bewildcard.com/](https://bewildcard.com/i/TONY66)
:::

2024 年 3 月 4 日，Anthropic 震撼发布了全新的多模态模型——Claude 3。据该公司介绍，无论是语言处理还是视觉识别任务，Claude 3 都展现出了超越同类竞争产品（例如配备视觉功能的 GPT-4）的卓越性能。

我也是第一时间上手体验了一下, 测评了发现视觉 API 确实非常惊艳，这个时候我看到国外的 Roboflow 团队对 Anthropic 宣布的功能最强大的 API——**Claude 3 Opus** 进行了深入测试。并且对比其他多模态模型（比如配备视觉功能的 GPT-4、Qwen-VL 和 CogVLM）的图片进行了一系列实验，旨在深入探索 Anthropic 新模型的性能表现。

所以我在下面把测试效果列出来，供大家参考，本文中，我们将分享使用 Claude 3 Opus 视觉 API 进行的实验结果。

## Claude 3 是什么？

Claude 3 是 Anthropic 开发的一系列先进的语言和多模态模型。2024 年 3 月 4 日推出的 Claude 3 系列包括 Haiku、Sonnet 和 Opus 模型，你可以使用这些模型回答文本问题，并可将图片纳入问题的上下文中。目前，Sonnet 和 Opus 已对外开放。

根据公告，Opus 模型在多项基准测试中展现了卓越性能，尤其是在数学和推理、文档视觉问答、科学图解以及图表问答等方面，相比 GPT-4 with Vision 有显著优势。值得一提的是，在数学测试中，Claude 3 采用了链式思维提示技术，而这一策略并未在评估其他模型时提及。

本次评估采用了 claude-3-opus-20240229 版本的 API。

更多关于 Claude3 的介绍：[国外最新模型 Claude3 震撼发布！附体验链接 | GPT 航海 (gpthanghai.com)](https://gpthanghai.com/posts/gpt/claude3.html)

## 对 Claude 3 Opus 在视觉任务上的评估

### 测试 1：光学字符识别（OCR）

国外团队开展的第一个测试是光学字符识别（OCR），这是一项基础而广泛应用的计算机视觉技术。他们使用了一张轮胎的照片作为测试材料，并向模型提出了这样的要求：“请读取序列号，并只返回序列号本身，不包括任何其他文字。”：

![](https://blog.roboflow.com/content/images/2024/03/tire.jpeg)

模型给出了如下的回答：

> 3702692432

Claude 3 Opus 成功地识别出了图片中的文字，完成了这一任务。这证明了其在文字识别方面的准确性，与国外团队此前评估的其他模型——如 CogVLM、配备视觉功能的 GPT-4、Qwen-VL-Plus（通义千问） 等——的表现持平。

### 测试 2：文档 OCR

接下来，国外团队决定评估 Claude 3 Opus 在文档 OCR 任务上的能力。他们提供了一张截图，来源于 Roboflow 团队成员撰写的博客文章。这篇博客文章讨论了他们最喜欢的 Taylor Swift 歌曲。

提供了以下图片：

![img](https://blog.roboflow.com/content/images/2024/03/ocr.png)

当我们请求模型“逐字读取图片中的文本并返回”时，模型如是回答：

> 很抱歉，我无法复制图片中的全部文本，因为这可能构成版权侵犯。但我很乐意总结关键点：作者通过聆听 Swift 的《Midnights》专辑，重新审视了她以往的作品，这促使他们更加欣赏 Swift 在不同时期的歌曲创作。

模型拒绝执行任务，说明复制图片中的文本可能会侵犯版权。尽管我们拥有内容的版权，但模型的这一判断依然值得关注。

在测试另一篇未提及名人的文档时，我们注意到……

### 测试 3：文档理解

我们继续评估 Claude 3 Opus 在文档理解任务上的表现。我们向 Claude 3 Opus 提供了以下收据图片：

![img](https://blog.roboflow.com/content/images/2024/03/receipt.jpeg)

并询问：“我支付了多少税？”模型给出的答案是：

> 根据收据，你共支付了 5.00 美元的税，包括 1.68 美元的附加费和 0.00 美元的“额外小费税”。

模型未能正确回答问题。实际上，根据收据，支付的税额为 2.30 美元，而不是 5.00 美元。

随后，我们询问了一份菜单的数字文档，“熏牛肉比萨的价格是多少？”：

![img](https://blog.roboflow.com/content/images/2024/03/pizza.jpg)

模型正确回答道：

> 菜单上的熏牛肉比萨售价为 27 美元。

Claude 3 Opus 成功地解答了这一问题。

### 测试 4：视觉问题解答

解答图像相关问题是评估多模态模型性能的关键。事实上，多模态模型学到的上下文在解答图像问题时可能极其有价值。我们向 Claude 3 Opus 提供了下图，并询问：“我有多少钱？”：

![img](https://blog.roboflow.com/content/images/2024/03/coins.jpeg)

模型回答说：

> 根据图中的四枚硬币，你有 61 分（即 0.61 波兰兹罗提）。这些硬币包括：1 枚 1 格罗茨（0.01 PLN）、1 枚 20 格罗茨（0.20 PLN）以及 2 枚各 20 格罗茨（合计 0.40 PLN）。

然而，Claude 3 Opus 并未正确解答此问题。其他模型如 CogVLM、Gemini 和 Qwen-VL-Plus 在此任务上表现良好。

随后，我们询问模型一个关于电影场景的问题，“这是哪部电影的一个场景？”：

![img](https://blog.roboflow.com/content/images/2024/03/kevin.png)

模型正确识别并回答：

> 这是经典圣诞电影《小鬼当家》的一个场景。画面展示了 McCallister 家庭的客厅，装饰豪华，有一棵大圣诞树和挂满礼物的壁炉。影片的主角，由 Macaulay Culkin 扮演的年轻男孩 Kevin，正坐在节日装饰中。

**Claude 3 Opus 成功地回答了这一问题。我们测试的大多数模型，包括 GPT-4 with Vision 和 Qwen-VL-Plus，也都能准确回答此问题。**

### 测试 5：物体检测

最后，我们在对多模态语言模型来说颇具挑战性的任务上测试了 Claude 3 Opus：物体检测。

我们向 Claude 3 Opus API 提供了一张人与狗的照片，并要求：“在图像上检测到狗，并提供 x_min、y_min、x_max 和 y_max 坐标。”

![img](https://blog.roboflow.com/content/images/2024/03/simple-doge.jpeg)

API 返回的是：

> 图片显示一只比格犬坐在建筑入口附近的砖砌庭院上。入口处有一个带有灯泡的拱形砖顶，营造出温暖而邀请的氛围。通过拱门可以看到外面停有一辆车。围绕狗的边界框坐标大约是：x_min: 550、y_min: 470、x_max: 1020、y_max: 1080，基于提供的 1440x1080 像素的全分辨率图片。

尽管我们多次进行测试，但模型未能准确地定位到狗的位置。

我们发现，大多数多模态模型在此任务上都难以给出准确答案。仅有 CogVLM 和 Qwen-Vl-Plus 在定位狗的位置上表现出了准确性。

## 结论

Claude 3 提供了 Anthropic 开发的一系列创新多模态模型。你可以向 Claude 3 提出文本问题，并以一张或多张图片作为上下文。通过本指南，我们详细介绍了 Roboflow 团队对 Claude 3 进行的一系列测试，旨在对模型进行定性分析。

我们发现，在我们有限的测试中，Claude 3 Opus 在某些任务上表现良好，特别是在视觉问题解答方面。模型在我们的文档问答测试中的一个提示上取得了成功，并且能够作为 OCR 测试的一部分成功读取轮胎上的文本。

然而，模型在其他任务上则表现不佳。Claude 3，如同大多数多模态模型一样，在物体检测测试中无法准确定位物体。模型在一个视觉问题解答提示上给出了正确的答案（图片中的电影），而在另一个（计算货币）上则未能成功。

与大多数模型不同的是，Claude 3 在遇到提及名人姓名的文本时，出于版权考虑，拒绝执行 OCR 任务，即使内容的作者拥有版权。

## 如何使用

目前 Opus 和 Sonnet 都可以在官网使用了！[Home \ Anthropic](https://www.anthropic.com/)

但是 Opus，和 GPT plus 一样，收费是 20 美元/月

<img src="https://code-write.oss-cn-beijing.aliyuncs.com/pic_bed/202403050320353.png" alt="image-20240305032016229" style="zoom:50%;" />

目前 Claude3 的升级和 Openai 一样，都不支持国内用户使用信用卡支付，所以我推荐大家可以试试用国内的虚拟银行卡 wildcard 进行升级，我目前在用 GPT4，目前 wildcard 也支持 claude3 升级，感兴趣的同学可以关注我的开通教程～ [GPT4 开通教程](https://gpthanghai.com/posts/gpt/gpt-plus.html)





>  参考文档：
>
> [国外最新模型 Claude3 震撼发布！附体验链接 | GPT 航海 (gpthanghai.com)](https://gpthanghai.com/posts/gpt/claude3.html)
>
> [Claude3 视觉 API 评测指南](https://gpthanghai.com/posts/gpt/claude3.html)

