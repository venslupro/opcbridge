import type { Project } from '@/types';

export const PROJECTS: Project[] = [
  {
    id: 'ai-decision',
    index: '01',
    title: {
      en: 'AI-Powered Intelligent Decision System',
      zh: 'AI 驱动的智能决策系统',
    },
    tagline: {
      en: 'Multi-source data fusion & intelligent decision engine',
      zh: '多源数据融合与智能决策引擎',
    },
    description: {
      en: 'A robust data fusion and decision intelligence platform that unifies multi-source heterogeneous data into a single operational picture, empowering decision-makers and operators with real-time, AI-driven insights and actionable recommendations.',
      zh: '一个强大的数据融合与决策智能平台，将多源异构数据统一融合为单一态势视图，通过实时 AI 洞察与可执行建议为决策者与运营人员赋能。',
    },
    features: [
      { en: 'Multi-source heterogeneous data fusion', zh: '多源异构数据融合' },
      { en: 'Real-time operational intelligence dashboard', zh: '实时运营智能驾驶舱' },
      { en: 'AI-driven scenario simulation & recommendation', zh: 'AI 驱动的情景推演与建议' },
      { en: 'Ontology-based unified data modeling', zh: '基于本体的统一数据建模' },
    ],
    media: {
      images: [
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1280&q=80&auto=format&fit=crop',
      ],
    },
    downloadLink: '/assets/downloads/ai-decision-whitepaper.pdf',
    downloadLabel: { en: 'White Paper (PDF)', zh: '白皮书 (PDF)' },
    siteLink: 'https://ontodecide.vercel.app/',
    siteLinkLabel: { en: 'Visit Project Homepage', zh: '访问项目主页' },
  },
  {
    id: 'graph-world-model',
    index: '02',
    title: {
      en: 'Graph World Model',
      zh: '图世界模型',
    },
    tagline: {
      en: 'General-purpose graph world model — the foundation of future AI',
      zh: '通用图世界模型 — 未来人工智能的基石',
    },
    description: {
      en: 'A general-purpose knowledge-graph-based solution for building graph world models — a fundamental abstraction that powers the next generation of artificial intelligence. It models entities, relations, events, and rules as a living, evolving world model, enabling generalizable reasoning, simulation, and structured decision-making across domains.',
      zh: '基于知识图谱的通用图世界模型构建方案，是支撑下一代人工智能发展的核心基础抽象。它将实体、关系、事件与规则建模为可持续演化的活世界模型，支持跨领域的泛化推理、仿真与结构化决策。',
    },
    features: [
      { en: 'General-purpose knowledge graph construction', zh: '通用知识图谱构建' },
      { en: 'Living, evolving graph world model', zh: '可演化的动态图世界模型' },
      { en: 'Graph-driven generalizable reasoning', zh: '基于图的泛化推理能力' },
      { en: 'Cross-domain what-if simulation & planning', zh: '跨领域假设推演与规划' },
    ],
    media: {
      images: [
        'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1280&q=80&auto=format&fit=crop',
      ],
    },
    downloadLink: '/assets/downloads/graph-world-model-whitepaper.pdf',
    downloadLabel: { en: 'White Paper (PDF)', zh: '白皮书 (PDF)' },
  },
  {
    id: 'space-computing',
    index: '03',
    title: {
      en: 'Space Computing Technology',
      zh: '太空计算技术',
    },
    tagline: {
      en: 'Building orbital compute power — data centers in space',
      zh: '构建在轨算力——把数据中心送上太空',
    },
    description: {
      en: 'A space computing solution that answers how to deliver compute power in orbit. Satellite constellations carrying radiation-tolerant AI accelerators are powered by near-continuous solar energy and cooled by radiating heat into deep space, then interconnected by inter-satellite laser links into a distributed orbital computing network. Data is processed where it is collected, and only insights are sent back to Earth — breaking the power, cooling, and bandwidth limits of terrestrial data centers.',
      zh: '一套回答“如何实现太空算力”的太空计算方案：在卫星星座上部署抗辐射 AI 加速芯片，利用近乎不间断的太阳能供电、向深空辐射散热，并通过星间激光链路组网，构建分布式在轨计算网络。数据在采集处就地处理，仅将结果回传地面，突破地面数据中心在能源、散热与带宽上的瓶颈。',
    },
    features: [
      {
        en: 'Radiation-tolerant on-orbit AI computing nodes',
        zh: '抗辐射加固的在轨 AI 计算节点',
      },
      {
        en: 'Solar power & deep-space radiative cooling',
        zh: '太阳能供电与深空辐射散热',
      },
      {
        en: 'Inter-satellite laser links forming a compute constellation',
        zh: '星间激光链路组网的算力星座',
      },
      {
        en: 'Space-ground collaborative scheduling & in-orbit inference',
        zh: '天地协同算力调度与在轨实时推理',
      },
    ],
    media: {
      images: [
        'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1280&q=80&auto=format&fit=crop',
      ],
    },
    downloadLink: '/assets/downloads/space-computing-whitepaper.pdf',
    downloadLabel: { en: 'White Paper (PDF)', zh: '白皮书 (PDF)' },
  },
  {
    id: 'smart-light-rail',
    index: '04',
    title: {
      en: 'Smart Light Rail Monitoring System',
      zh: '智慧轻轨监测系统',
    },
    tagline: {
      en: 'End-edge-cloud predictive maintenance for rail infrastructure',
      zh: '端边云协同的轨道交通预测性维护',
    },
    description: {
      en: 'An end-edge-cloud predictive maintenance system for railway infrastructure. Smart sensors on trains and tracks stream telemetry to edge nodes for instant anomaly detection, while the cloud correlates fleet-wide patterns to predict failures before they happen.',
      zh: '面向轨道交通基础设施的端边云协同预测性维护系统。车载与轨旁智能传感器将遥测数据实时传输至边缘节点进行异常检测，云端再关联全网数据模式，在故障发生前提前预警。',
    },
    features: [
      { en: 'End-edge-cloud collaborative architecture', zh: '端边云协同系统架构' },
      { en: 'Real-time anomaly detection at the edge', zh: '边缘侧实时异常检测' },
      { en: 'Fleet-wide predictive maintenance analytics', zh: '全网预测性维护分析' },
      { en: 'Visualized health index for tracks & vehicles', zh: '轨道与车辆健康指数可视化' },
    ],
    media: {
      images: [
        'https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=1280&q=80&auto=format&fit=crop',
      ],
    },
    downloadLink: '/assets/downloads/smart-light-rail-solution.pptx',
    downloadLabel: { en: 'Solution Deck (PPT)', zh: '解决方案 (PPT)' },
    siteLink: 'https://smartail.vercel.app/',
    siteLinkLabel: { en: 'Visit Project Homepage', zh: '访问项目主页' },
  },
];
