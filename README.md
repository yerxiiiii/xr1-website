# XR1 餐厅后厨人形机器人项目

XR1 是针对 B 端团餐场景（企业、学校、医院食堂等）开发的人形服务机器人。本仓库集中存放**原始规格与场景资料**、**AIGC / 实拍视觉素材**，以及由此衍生的**产品手册、宣传册、官网、视频脚本**等交付物。

---

## 目录结构（当前）

```text
XR1/
├── 参数/                          # 硬件规格原始资料
│   ├── XR1 SPEC V0.1.xlsx         # 详细硬件参数表（唯一权威 Excel 源）
│   └── XR1_03.png                 # 产品渲染参考图
├── 餐厅场景分析及拆解.pdf           # 后厨场景、任务拆解与技术路线
├── 实拍/                          # 真机实拍视频（体积较大，官网待压缩嵌入）
├── 素材/                          # AIGC 出图（Midjourney / i2i / v2 场景图等）
├── 视频/                          # AIGC 图生视频（Seedance、Kling 等）
├── brochure/                      # 宣传册定稿页（由 AIGC 流程产出，8 张）
├── ui/                            # 官网 UI 参考截图（1x.tech 对标，1.png–8.png）
├── website/                       # XR1 单页官网（Vite 静态站，已填入图片）
├── scripts/                       # 视频脚本 Excel 重建 / 更新脚本
├── 未命名文件夹/
│   ├── cankao/                    # 外部产品手册参考（排版与视觉风格）
│   ├── 餐厅视频脚本0523 update.xlsx
│   ├── 餐厅视频脚本0523_30s优化.md
│   └── 餐厅视频脚本0528.xlsx
├── xr1_02.png                     # 产品图（根目录留存）
├── package.json                   # 根目录快捷命令（dev/build 转发至 website/）
└── README.md                      # 本说明文档
```

> **已移除、不再维护的文件**（文档中请勿再引用路径）：
> - `XR1/restaurant_robot_v4.pptx` — 商业计划 PPT，内容已沉淀至产品手册 Markdown
> - `XR1/米黄机器人产品规格书.pdf` — 外观色板与材质定义已写入 [`XR1_产品手册_草图.md`](XR1_产品手册_草图.md) / [`XR1_产品手册_展会版.md`](XR1_产品手册_展会版.md)
> - 根目录 `cankao/` — 已迁至 `未命名文件夹/cankao/`
> - 子目录 `XR1/` — 规格表与场景 PDF 已拆出至 `参数/` 与根目录

---

## 原始素材清单

| 类别 | 路径 | 说明 |
|------|------|------|
| **硬件规格** | `参数/XR1 SPEC V0.1.xlsx` | 19 DOF、1150 Tops、560mm 身宽、夹爪 150N 等权威参数 |
| **产品渲染** | `参数/XR1_03.png`、`xr1_02.png` | 机身外观参考；官网 / brochure 暂用蓝灰 AIGC 渲染，米黄版待实拍替换 |
| **场景分析** | `餐厅场景分析及拆解.pdf` | 后厨信息流 (CJ) 与物料流 (LF)、离散工位策略、Real2Sim2Real 路线 |
| **设计参考** | `未命名文件夹/cankao/` | Urtopia、TAJEZZO 等产品手册，供排版与工业设计风格借鉴 |
| **AIGC 静帧** | `素材/` | 按卖点与场景命名（1150Tops / 5GWiFi / 560mm窄机身 / 夹爪 / 封面 / 场景 / 整体 / 参数爆炸图 等） |
| **AIGC 视频** | `视频/` | Seedance 2.0 / Kling 3.0 图生视频片段，供 30s 宣传片剪辑 |
| **真机实拍** | `实拍/` | 购物袋抓取、三明治、收纳化妆品、调色宣传片等（待压缩嵌入官网） |

---

## 已完成的衍生任务

| 任务 | 产出 | 主要素材来源 |
|------|------|--------------|
| **产品手册文案** | [`XR1_产品手册_草图.md`](XR1_产品手册_草图.md) | SPEC xlsx、场景 PDF、米黄配色定义（原规格书内容） |
| **展会宣发文案** | [`XR1_产品手册_展会版.md`](XR1_产品手册_展会版.md) | 同上 + 商业卖点（原 PPT 叙事） |
| **机身标注文案** | [`XR1_机身图文标注文案.md`](XR1_机身图文标注文案.md) | SPEC xlsx，供 Figma 标注制图 |
| **AIGC 生图 Prompt** | [`XR1_视觉渲染分镜指南.md`](XR1_视觉渲染分镜指南.md) | 四大卖点分镜；驱动 `素材/` 批量出图 |
| **AIGC 视频流程** | [`XR1_AIGC视频制作流程.md`](XR1_AIGC视频制作流程.md) | 手册 → 7 段 Shot List → 30s 时间轴；驱动 `视频/` 与 `brochure/` |
| **宣传册定稿页** | `brochure/`（封面、场景对比、1150tops、窄机身、5G、夹爪、爆炸图、结尾） | AIGC 流程第二阶段关键帧 |
| **30s 视频脚本** | `未命名文件夹/餐厅视频脚本0523 update.xlsx` + [`餐厅视频脚本0523_30s优化.md`](未命名文件夹/餐厅视频脚本0523_30s优化.md) | 老板反馈重构「规划→执行」叙事；[`scripts/`](scripts/) 可重建 Excel |
| **0528 脚本迭代** | `未命名文件夹/餐厅视频脚本0528.xlsx` | 0523 版后续修订 |
| **单页官网** | [`website/`](website/) | 版式对标 1x.tech（[`ui/`](ui/)）；图片自 `brochure/` + `素材/` 压缩至 `website/public/images/` |
| **官网文档** | [`website/docs/`](website/docs/) | 图片替换指南、设计规范、品牌占位决策 |

### 素材 → 交付物流向（简图）

```text
参数/SPEC + 场景PDF + cankao参考
        ↓
产品手册 MD（草图 / 展会版 / 机身标注）
        ↓
视觉渲染分镜指南 → 素材/（AIGC 静帧）
        ↓
AIGC视频制作流程 → 视频/（图生视频）+ brochure/（定稿页）
        ↓
├── 餐厅视频脚本 xlsx（30s 展会片）
└── website/（单页官网 + public/images）
        ↑
实拍/（真机视频，待压缩替换官网产线区）
```

---

## 核心文档速查

### 场景与商业定位
- **`餐厅场景分析及拆解.pdf`**：后厨任务拆解；现阶段专注离散定点工位间容器抓取放置，未来演进 VLM/VLA。
- 商业叙事（原 PPT）：Embodied AI for B2B Kitchens，单店 500 份/日，人力节省 62%–76%，Real2Sim2Real 数据飞轮 — 详见产品手册 MD。

### 硬件规格（摘自 `参数/XR1 SPEC V0.1.xlsx`）
- 整机高 1400mm，净重 90±5kg，19 DOF，身宽 560mm
- 1150 Tops 算力，RK3576 (4+32G)，5G / Wi-Fi 5
- 单臂 7 DOF，负载 4.5kg，夹持力 150N，重复定位 ±0.5mm
- ZED 深度相机、激光雷达、超声波、胸前/双眼交互屏

### 外观定义（原米黄规格书，现见手册 MD）
- 主色：米黄 Pantone 7611U + 科技黑；磨砂塑料 + 硅胶发光双耳
- 官网 / brochure 当前使用蓝灰 AIGC 渲染，米黄实拍素材到位后切换（见 [`website/docs/brand-decisions.md`](website/docs/brand-decisions.md)）

---

## 官网本地预览

```bash
# 方式 A：项目根目录
npm install --prefix website
npm run dev

# 方式 B：进入 website
cd website && npm install && npm run dev
```

浏览器打开 `http://localhost:5173`。构建产物在 `website/dist/`。详见 [`website/README.md`](website/README.md) 与 [`website/docs/图片替换指南.md`](website/docs/图片替换指南.md)。

---

## 参考目录 (`未命名文件夹/cankao/`)

外部优秀产品手册（Urtopia 碳纤维电单车、TAJEZZO 等），用于工业设计、品牌视觉与产品手册排版参考。产品手册草图的设计说明亦指向此目录。
