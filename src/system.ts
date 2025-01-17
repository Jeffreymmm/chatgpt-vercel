import type { Model } from "./types"

import image from "../assets/maoliang.png"

export const defaultSetting = {
  continuousDialogue: true,
  archiveSession: false,
  openaiAPIKey: "",
  openaiAPITemperature: 60,
  password: "",
  systemRule: "",
  model: "gpt-3.5-turbo" as Model
}

export const defaultMessage = `Powered by OpenAI Vercel
- 如果本项目对你有所帮助，可以给小猫 [买点零食](${image})，但不接受任何付费功能请求。
- [[Shift]] + [[Enter]] 换行。开头输入 [[/]] 或者 [[空格]] 提供“搜索预设”。[[↑]] 可编辑最近一次提问。点击顶部名称滚动到顶部，点击输入框滚动到底部。
- 请在左下角[[设置]]按钮输入网站密码：chatopenai`

export type Setting = typeof defaultSetting

export const defaultResetContinuousDialogue = false

export const defaultMaxInputTokens: Record<Model, number> = {
  "gpt-3.5-turbo": 3072,
  "gpt-4": 6144,
  "gpt-4-32k": 24576
}

export const defaultModel: Model = "gpt-3.5-turbo"
