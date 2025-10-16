import React from 'react';
import { Button, Grid } from 'antd';
import { createStyles } from 'antd-style';

const features = [
  {
    key: 'summary',
    title: '数据概述生成',
    description: '将复杂的数据看板转译成清晰的自然语言摘要，自动提炼业务重点。',
    action: '前往 DataV Board 体验',
  },
  {
    key: 'insight',
    title: '数据洞察提取',
    description: '智能识别关键趋势、指标异动与风险点，辅助快速定位问题。',
    action: '前往 DataV Mix 体验',
  },
  {
    key: 'report',
    title: '智能数据解说',
    description: '以专业语气生成图表讲解与可执行建议，让报告输出更具说服力。',
    action: '前往 DataV Note 体验',
  },
  {
    key: 'dashboard',
    title: '仪表盘自动化设计',
    description: '基于场景快速生成数据可视化模板，保持视觉一致性的同时节省制作成本。',
    action: '前往 DataV Board 体验',
  },
  {
    key: 'three-d',
    title: '三维数据探索',
    description: '借助 3D 交互深入探索时空数据形态，获得多维度的洞察体验。',
    action: '前往 DataV Cube 体验',
  },
];

const useStyle = createStyles(({ css }) => ({
  page: css`
    min-height: 100vh;
    min-height: 100svh;
    background: linear-gradient(180deg, #e5f1ff 0%, #f7faff 48%, #ffffff 100%);
    color: #0f1f3c;
  `,
  hero: css`
    margin: 0 auto;
    max-width: 1240px;
    min-height: inherit;
    padding: clamp(20px, 4vw, 48px) clamp(24px, 6vw, 88px) clamp(32px, 6vw, 72px);
    display: flex;
    flex-direction: column;
    gap: clamp(20px, 3vw, 48px);
  `,
  nav: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: clamp(12px, 2vw, 24px);
    flex-wrap: wrap;
    font-size: clamp(14px, 1vw + 0.4vh, 18px);
  `,
  navBrand: css`
    font-weight: 700;
    font-size: clamp(18px, 1.3vw + 0.6vh, 22px);
  `,
  navLinks: css`
    display: flex;
    gap: clamp(12px, 2vw, 28px);
    flex-wrap: wrap;
    a {
      color: rgba(15, 31, 60, 0.78);
      font-weight: 600;
      font-size: clamp(13px, 1.1vw, 16px);
      text-decoration: none;
      transition: color 0.2s ease;
      &:hover {
        color: #2f6bff;
      }
    }
  `,
  navActions: css`
    display: flex;
    flex-wrap: wrap;
    gap: clamp(10px, 1.4vw, 18px);
    .ant-btn {
      border-radius: 999px;
      font-size: clamp(13px, 1.15vw, 15px);
      height: clamp(32px, 3.3vw, 38px);
      padding-inline: clamp(18px, 3vw, 26px);
    }
  `,
  heroBody: css`
    display: grid;
    gap: clamp(16px, 2.4vw, 28px);
  `,
  title: css`
    margin: 0;
    font-weight: 800;
    font-size: clamp(42px, 5vw + 0.5vh, 68px);
    line-height: 1.15;
    letter-spacing: -0.01em;
  `,
  subtitle: css`
    margin: 0;
    font-weight: 600;
    color: #1c3d74;
    font-size: clamp(20px, 2.4vw, 30px);
    line-height: 1.25;
  `,
  description: css`
    margin: 0;
    color: rgba(15, 31, 60, 0.75);
    font-size: clamp(14px, 1.6vw, 18px);
    line-height: 1.6;
    max-width: min(70ch, 100%);
  `,
  ctas: css`
    display: flex;
    flex-wrap: wrap;
    gap: clamp(12px, 1.8vw, 20px);
    margin-top: clamp(8px, 1.5vw, 16px);
    .ant-btn {
      border-radius: 999px;
      font-size: clamp(14px, 1.5vw, 17px);
      height: clamp(38px, 4.4vw, 46px);
      padding-inline: clamp(20px, 3.6vw, 36px);
    }
  `,
  cards: css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(clamp(180px, 18vw, 232px), 1fr));
    gap: clamp(12px, 2.2vw, 26px);
    align-content: start;
    width: 100%;
    padding-block: clamp(4px, 1.2vw, 18px);
    @media (max-width: 768px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: clamp(12px, 3vw, 20px);
    }
    @media (max-width: 520px) {
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    }
  `,
  card: css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: clamp(12px, 1.6vw, 20px);
    padding: clamp(18px, 2vw, 26px);
    border-radius: 20px;
    border: 1px solid rgba(47, 107, 255, 0.16);
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.94) 0%, rgba(230, 240, 255, 0.94) 100%);
    box-shadow: 0 14px 32px rgba(20, 74, 156, 0.12);
    min-height: clamp(180px, 24vh, 236px);
    backdrop-filter: blur(6px);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 18px 36px rgba(20, 74, 156, 0.18);
    }
  `,
  cardHeader: css`
    display: grid;
    gap: 8px;
  `,
  cardTitle: css`
    margin: 0;
    color: #102a57;
    font-size: clamp(18px, 2vw, 22px);
    font-weight: 700;
    line-height: 1.3;
  `,
  cardDescription: css`
    margin: 0;
    color: rgba(16, 42, 87, 0.78);
    font-size: clamp(13px, 1.25vw, 15px);
    line-height: 1.5;
  `,
  cardAction: css`
    margin-top: auto;
    .ant-btn {
      width: fit-content;
      border-radius: 999px;
      font-size: clamp(13px, 1.15vw, 15px);
      height: clamp(34px, 3.6vw, 40px);
      padding-inline: clamp(18px, 3vw, 28px);
    }
  `,
  helper: css`
    margin: 0;
    color: rgba(15, 31, 60, 0.55);
    font-size: clamp(12px, 1.4vw, 14px);
  `,
  hide: css`
    display: none !important;
  `,
}));

const DataVAIPage: React.FC = () => {
  const { styles, cx } = useStyle();
  const screens = Grid.useBreakpoint();
  const showDescription = screens.lg || screens.xl || screens.xxl;

  return (
    <section className={styles.page}>
      <div className={styles.hero}>
        <header className={styles.nav}>
          <div className={styles.navBrand}>DataV·AI</div>
          <nav className={styles.navLinks} aria-label="页面导航">
            <a href="#features">功能特性</a>
            <a href="#cases">典型案例</a>
            <a href="#pricing">版本与定价</a>
          </nav>
          <div className={styles.navActions}>
            <Button type="link">登录</Button>
            <Button type="primary">立即试用</Button>
          </div>
        </header>

        <div className={styles.heroBody}>
          <h1 className={styles.title}>
            DataV·AI
            <br />
            最懂你的数据内容创作助手
          </h1>
          <h2 className={styles.subtitle}>用 AI 重新定义数据可视化的生产效率</h2>
          <p className={styles.description}>
            阿里云数据可视化团队的专业 AI 能力，全面集成在 DataV·AI
            中。通过自然语言驱动的多模态创作体验，快速生成和优化数据看板、图表解说、可视化方案与多维洞察，帮助团队在设计、分析、汇报等场景中更高效地传达数据价值。
          </p>
          <div className={styles.ctas}>
            <Button type="primary" size="large">
              立即体验
            </Button>
            <Button size="large">查看产品文档</Button>
          </div>
        </div>

        <div className={styles.cards} id="features">
          {features.map((feature) => (
            <article key={feature.key} className={styles.card}>
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>{feature.title}</h3>
                <p className={cx(styles.cardDescription, !showDescription && styles.hide)}>
                  {feature.description}
                </p>
              </div>
              <div className={styles.cardAction}>
                <Button type="primary">{feature.action}</Button>
              </div>
            </article>
          ))}
        </div>

        {!showDescription && (
          <p className={styles.helper}>
            在较小屏幕上为了保证首屏完整展示，我们隐藏了功能描述文案，可通过点击按钮进一步了解详情。
          </p>
        )}
      </div>
    </section>
  );
};

export default DataVAIPage;
