import { Box, Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Performance from 'assets/key-feature/performance.svg';
import Partnership from 'assets/key-feature/partnership.svg';
import Subscription from 'assets/key-feature/subscription.svg';
import Support from 'assets/key-feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: '3+ Year Experience',
    title: '3+ Year Experience',
    text:
      'Over 3 years of expertise delivering unparalleled solutions and insights for your success',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Dedicated Members',
    title: 'Dedicated Members',
    text:
      'Passionate team members dedicated to exceeding expectations and achieving mutual success',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Valuable Supports',
    title: 'Valuable Supports',
    text:
      'Tailored support and guidance ensuring reliability and innovation every step of the way',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Customer Support',
    title: 'Customer Support',
    text:
      'Get your projects delivered as expected and designed to solve problems.',
  },
];

export default function KeyFeature() {
  return (
    <Box sx={{ variant: 'section.keyFeature' }} id="feature">
      <Container>
        <SectionHeader
          slogan="Whats the function"
          title="Meet the feature of product"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};
