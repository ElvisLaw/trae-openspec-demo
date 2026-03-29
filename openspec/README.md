# OpenSpec 项目文档

## 1. OpenSpec 简介

OpenSpec 是一个 AI 原生的规范驱动开发系统，用于管理项目的需求、设计和实现过程。它通过结构化的文档和工作流程，帮助团队保持一致的开发标准和最佳实践。

## 2. 项目结构

```
openspec/
├── config.yaml         # OpenSpec 配置文件
├── changes/            # 变更目录
│   ├── <change-name>/  # 具体变更
│   │   ├── proposal.md # 提案文档
│   │   ├── design.md   # 设计文档
│   │   ├── tasks.md    # 任务清单
│   │   └── specs/      # 规格说明
│   └── archive/        # 已归档的变更
├── specs/              # 全局规格说明
└── README.md           # 本文档
```

## 3. 核心概念

### 3.1 变更 (Change)
变更是 OpenSpec 中的基本单位，代表一个完整的工作项，包含所有相关的文档和任务。

### 3.2 工件 (Artifact)
工件是变更中的文档，包括：
- **提案 (Proposal)**：说明为什么要做这个变更
- **设计 (Design)**：说明如何实现这个变更
- **规格 (Specs)**：定义具体的需求和验收标准
- **任务 (Tasks)**：分解工作为可执行的任务

### 3.3 工作流程
1. **Explore**：分析问题，了解需求
2. **New**：创建变更容器
3. **Proposal**：编写提案文档
4. **Specs**：编写规格说明
5. **Design**：编写设计文档
6. **Tasks**：创建任务清单
7. **Apply**：实现任务
8. **Archive**：归档变更

## 4. 命令参考

### 4.1 核心命令

| 命令 | 描述 |
|------|------|
| `openspec init` | 初始化 OpenSpec 项目 |
| `openspec new change <name>` | 创建新的变更 |
| `openspec list` | 列出所有变更 |
| `openspec show <change>` | 查看变更详情 |
| `openspec validate <change>` | 验证变更的完整性 |
| `openspec archive <change>` | 归档完成的变更 |

### 4.2 技能命令

| 命令 | 描述 |
|------|------|
| `/opsx:propose` | 创建变更并生成所有工件 |
| `/opsx:explore` | 分析问题，思考解决方案 |
| `/opsx:apply` | 实现变更中的任务 |
| `/opsx:archive` | 归档完成的变更 |
| `/opsx:onboard` | 引导新用户使用 OpenSpec |

## 5. 最佳实践

### 5.1 文档编写
- 保持文档简洁明了
- 使用清晰的结构和格式
- 确保文档与代码同步
- 定期更新文档

### 5.2 变更管理
- 每个变更专注于一个功能或修复
- 保持变更的粒度适中
- 及时归档完成的变更
- 定期清理未完成的变更

### 5.3 团队协作
- 所有团队成员都应了解 OpenSpec 工作流程
- 代码审查时参考 OpenSpec 文档
- 新成员加入时提供 OpenSpec 培训
- 鼓励团队成员提出改进建议

## 6. 配置指南

### 6.1 config.yaml

`openspec/config.yaml` 文件用于配置 OpenSpec 项目的全局设置：

```yaml
schema: spec-driven

# 项目上下文
context: |
  Tech stack: JavaScript, HTML, CSS
  Project type: Frontend web application
  Conventions: Use semantic HTML, CSS Grid for layout

# 规则配置
rules:
  proposal:
    - 保持提案简洁，不超过 500 字
    - 必须包含 "Non-goals" 部分
  specs:
    - 每个需求必须包含至少一个场景
    - 使用 WHEN/THEN/AND 格式编写场景
  design:
    - 包含清晰的技术决策和理由
    - 考虑性能和可维护性
  tasks:
    - 将任务分解为最多 2 小时的工作块
    - 每个任务应该有明确的完成标准
```

## 7. 常见问题

### 7.1 如何创建新的变更？
使用 `openspec new change <name>` 命令，或使用 `/opsx:propose` 技能。

### 7.2 如何验证变更的完整性？
使用 `openspec validate <change>` 命令检查变更的所有工件是否完整。

### 7.3 如何归档完成的变更？
使用 `openspec archive <change>` 命令，或使用 `/opsx:archive` 技能。

### 7.4 如何查看已归档的变更？
已归档的变更存储在 `openspec/changes/archive/` 目录中。

## 8. 故障排除

### 8.1 验证失败
- 检查 spec 文件是否包含正确的 delta 部分（如 `## ADDED Requirements`）
- 确保每个 requirement 都包含至少一个 scenario
- 确保 requirement 描述中包含 SHALL 或 MUST 关键字

### 8.2 命令执行失败
- 检查 OpenSpec CLI 是否正确安装
- 确保当前目录是项目根目录
- 检查命令语法是否正确

## 9. 示例

### 9.1 创建新变更

```bash
# 创建新变更
openspec new change "add-user-login"

# 查看变更目录
ls openspec/changes/add-user-login/
```

### 9.2 验证变更

```bash
# 验证变更
openspec validate add-user-login

# 查看验证结果
```

### 9.3 归档变更

```bash
# 归档变更
openspec archive add-user-login

# 查看归档目录
ls openspec/changes/archive/
```

## 10. 总结

OpenSpec 是一个强大的规范驱动开发系统，通过结构化的文档和工作流程，帮助团队提高开发效率和代码质量。本文档提供了项目级的 OpenSpec 使用指南，希望能帮助团队成员更好地理解和使用 OpenSpec。

如需更多信息，请参考 OpenSpec 官方文档或联系项目管理员。