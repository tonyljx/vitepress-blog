---
date: 2024-03-07
desc: 大模型入门使用教程 2-提示词工程，结合openai和claude进行提示词学习
---

# 大模型入门使用教程 2-提示词工程

::: tip

推荐大家可以尝试 GPT4，如果不知道怎么升级的话，可以

- 参考教程 [GPT Plus 升级 | GPT 航海 (gpthanghai.com)](http://link.zhihu.com/?target=https%3A//gpthanghai.com/posts/gpt/gpt-plus.html) 进行升级
- 或者直接通过我的链接进行升级 [wildcard](https://card.gpthanghai.com) 用过 GPT4 以后，才知道和 GPT3.5 的差距有多大

GPT4/3.5 账号咨询： WX：runningdogg

:::

## 写在前面

本文主要对 这是第二篇教程，关于提示词一共有 4 篇，分别是入门篇，方法论篇，实践篇，最佳实践应用篇。**本篇为方法论，介绍写 Prompt 的心法**

这是目前使用最频繁的基于语言的技术，用好了可以显著提升模型的表现，希望读者可以掌握内功（写提示词的心法）和外功（具体怎么写）



## 提示词工程是什么

提示词工程，是一门经验/实践科学，因为我们是用人类语言和模型对话，所以说的多了，自然就会有更高效的沟通方法，能让模型更好的理解我们的意图。



通常提示词工程有不同的阶段，但是我们需要有一套「评估体系」，来评价我们的 prompt 写的好不好，如果没有评估这个步骤，我们没有办法量化/感知到自己写的好不好。



所以，在整个提示工程的过程中，大量的时间并不是用来直接编写这些输入提示的。相反，更多的时间被投入到构建一套有效的评估标准上，接着是根据这些标准进行反复的测试和优化。



## 提示词工程开发步骤（完整）



推荐一个基于原则和测试驱动的开发方法来确保提示性能的最优化。下面，我们将介绍在为特定任务开发提示时，我们遵循的关键高层次流程，如下图所示。



**总的来说，先定义目标，然后再定义优化的标准；想清楚这两个点，再往下看，七十都是针对这两点的补充**



![img](https://image.chatrepo.top/49181ae-Prompt_eng_lifecycle.png)

1. **定义任务和成功标准**：首先也是最重要的一步，是明确定义你希望具体任务。**任务的范围可以从实体提取、问题回答、文本总结到更为复杂的任务，如代码生成或创意写作等。确定了具体任务后，接下来要设立能指导评估和优化流程的成功标准。**

   考虑的关键成功标准包括：

   - **性能和准确性**：模型在任务上需要达到何种水平的表现？
   - **响应时间**：模型的可接受响应时间是多久？这将依你的应用实时需求和用户期望而定。
   - **成本**：你为运行模型预算了多少？考虑到每次API调用的成本、模型大小及使用频次等因素。

   从开始就设立清晰、可量化的成功标准，将帮助你在采用过程中做出知情决策，并确保你优化的目标是正确的。

2. **制定测试案例**：在定义了任务和成功标准之后，下一步是创建一组多样化的测试案例，覆盖应用的预期用例。应包含典型例子及边缘情况，确保你的提示具有强大的鲁棒性。预先明确定义的测试案例，将使你能够客观评估提示针对成功标准的表现。

3. **设计初步提示**：接下来，设计一个初步的提示，概括任务定义、良好响应的特征及 Claude 所需的任何必要背景。理想情况下，应添加一些标准输入和输出的示例，供 Claude 参考。这个初步提示将作为后续改进的起点。

4. **针对测试案例测试提示**：用初步提示输入测试案例。仔细评价模型的响应是否符合你的预期输出和成功标准。无论是通过人工评估、与标准答案对比

5. **优化提示**：根据第4步的结果，迭代优化你的提示，以便在测试案例上提高性能，并更好地满足你的成功标准。这可能涉及添加说明、示例或限制以引导 Claude 的行为。注意不要过度针对一小部分输入进行优化，以避免过度拟合和泛化性能差。

6. **部署优化后的提示**：一旦你得到一个在各测试案例上表现良好且符合成功标准的提示，就可以将其部署在你的应用中了。在实际使用中监控模型的表现，并根据需要做出进一步的优化。可能会遇到在初步测试中未预见到的边缘情况。



整个过程中，从功能最强大的模型和不限长度的提示开始，来设定性能上限是有价值的。一旦实现了所需的输出质量，就可以尝试进行优化，如使用更短的提示或更小的模型，根据需要减少延迟和成本。

通过遵循这种测试驱动的方法，并事先仔细定义任务和成功标准，你将能够有效地利用 Claude 为你的特定情景赋能。如果你投入时间设计健壮的测试案例和提示，你将在模型性能和可维护性方面收获益处。





## 方法论✨

这里参考了 claude 和 openai 的官网文档，列出了最全的方法论，不少方法论是底层逻辑是相通的，大家先看，有疑惑也不要紧，后面结合例子就能看明白了



GPT4（Openai ）的方法论总结

### [编写清晰的指令](https://platform.openai.com/docs/guides/prompt-engineering/write-clear-instructions)

这些模型不能读懂你的心思。如果输出太长，要求简短回复。如果输出过于简单，请求专家级别的写作。如果你不喜欢格式，展示你希望看到的格式。模型猜测你想要什么的次数越少，你得到想要的结果的可能性就越大。



### [提供参考文本](https://platform.openai.com/docs/guides/prompt-engineering/provide-reference-text)

当询问关于深奥话题或要求引用和URL时，语言模型可以自信地编造假答案。就像一张笔记纸能帮助学生在考试中取得更好成绩一样，向这些模型提供参考文本可以帮助它们减少编造答案。



### [将复杂任务拆分为更简单的子任务](https://platform.openai.com/docs/guides/prompt-engineering/split-complex-tasks-into-simpler-subtasks)

正如在软件工程中将一个复杂系统分解为一组模块化组件是一个好习惯一样，提交给语言模型的任务也是如此。复杂任务往往比简单任务有更高的错误率。此外，复杂任务通常可以重新定义为一系列更简单任务的工作流，其中早期任务的输出用于构建后续任务的输入。



### [给模型时间“思考”](https://platform.openai.com/docs/guides/prompt-engineering/give-the-model-time-to-think)

如果被要求计算17乘以28，你可能不会立刻知道答案，但给予时间你仍然可以算出来。同样，模型在试图立即回答时会犯更多的推理错误，而不是花时间算出答案。在答案之前要求一个“思考链”可以帮助模型更可靠地推理出正确答案。



### [使用外部工具](https://platform.openai.com/docs/guides/prompt-engineering/use-external-tools)

通过输入其他工具的输出来弥补模型的弱点。例如，一个文本检索系统（有时称为RAG或检索增强生成）可以告知模型相关文档。像OpenAI的代码解释器这样的代码执行引擎可以帮助模型进行数学计算和运行代码。如果一个任务可以通过工具而不是通过语言模型更可靠或高效地完成，那么将其外包以获得双方的最佳效果。



### [系统地测试变化](https://platform.openai.com/docs/guides/prompt-engineering/test-changes-systematically)

如果你可以测量性能，提高性能就更容易。在某些情况下，对提示的修改在几个孤立的例子上可能会取得更好的性能，但在更具代表性的示例集上可能会导致整体性能下降。因此，为了确保一个变化对性能有正面影响，可能需要定义一个全面的测试套件（也称为“评估”）。





Claude 的方法论总结补充

- [清晰直接](https://docs.anthropic.com/claude/docs/be-clear-direct)：提供明确的指令和背景信息，以引导 Claude 的回应。
- [使用示例](https://docs.anthropic.com/claude/docs/use-examples)：在你的提示中加入示例，以展示期望的输出格式或风格。
- [赋予 Claude 角色](https://docs.anthropic.com/claude/docs/give-claude-a-role)：为 Claude 设定一个特定角色（如专家），以提升针对你的用例的性能。
- [使用 XML 标签](https://docs.anthropic.com/claude/docs/use-xml-tags)：利用 XML 标签来组织提示和回应，使其更加清晰。
- [链接提示](https://docs.anthropic.com/claude/docs/chain-prompts)：将复杂任务分解成更小、可管理的步骤，以获得更好的结果。
- [让 Claude 思考](https://docs.anthropic.com/claude/docs/let-claude-think)：鼓励逐步思考，以提高 Claude 输出的质量。
- [预填充 Claude 的回应](https://docs.anthropic.com/claude/docs/prefill-claudes-response)：以几个词开始 Claude 的回应，以指导其输出朝着期望的方向。
- [控制输出格式](https://docs.anthropic.com/claude/docs/control-output-format)：明确指定所需的输出格式，以确保一致性和可读性。
- [请求 Claude 重写](https://docs.anthropic.com/claude/docs/ask-claude-for-rewrites)：基于评分标准请求修改，让 Claude 迭代并改进其输出。
- [利用长上下文窗口的技巧](https://docs.anthropic.com/claude/docs/long-context-window-tips)：优化利用 Claude 较长上下文窗口的提示。****



参考文档：

- [Prompt engineering (anthropic.com)](https://docs.anthropic.com/claude/docs/prompt-engineering)
- [Prompt engineering - OpenAI API](https://platform.openai.com/docs/guides/prompt-engineering)



## 小结

本次教程带大家了解了提示词工程，以及提示词工程的完整流程，重点介绍了提示词工程的方法论。希望大家对提示词工程有了更好的了解，下面一篇教程将带大家结合例子，看一下提示词工程是如何优化的。 感谢观看
