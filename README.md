# OpenSpec 演示项目

这是一个使用 OpenSpec 规范驱动开发流程构建的简单日历应用演示项目。

## 项目简介

本项目演示了如何使用 OpenSpec 系统来管理和实现一个简单的前端功能。通过完整的 OpenSpec 工作流程，从需求分析到最终实现，展示规范驱动开发的优势。

## 功能特性

- **简单日历显示**：显示当前月份的日期
- **月份切换**：支持向前/向后切换月份
- **当前日期高亮**：突出显示今天的日期

## 项目结构

```
.
├── calendar/          # 日历应用代码
│   ├── index.html     # 日历页面
│   ├── style.css      # 样式文件
│   └── script.js      # 交互逻辑
├── openspec/          # OpenSpec 规范目录
│   ├── changes/       # 变更记录
│   ├── specs/         # 规格说明
│   └── README.md      # OpenSpec 文档
└── README.md          # 本文件
```

## 快速开始

直接在浏览器中打开 `calendar/index.html` 即可查看日历应用：

```bash
# 使用浏览器打开
open calendar/index.html
```

## OpenSpec 工作流程

本项目使用 OpenSpec 进行规范驱动开发：

1. **Explore** - 分析问题，了解需求
2. **New** - 创建变更容器
3. **Proposal** - 编写提案文档
4. **Specs** - 编写规格说明
5. **Design** - 编写设计文档
6. **Tasks** - 创建任务清单
7. **Apply** - 实现任务
8. **Archive** - 归档变更

查看 `openspec/changes/archive/` 目录了解已完成的变更记录。

## 技术栈

- HTML5
- CSS3
- JavaScript (原生)

## 许可证

MIT License
