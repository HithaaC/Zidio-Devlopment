import { Container, Box } from 'theme-ui';
import SectionHeader from 'components/section-header';
import PostCard from 'components/post-card.js';
import ButtonGroup from 'components/button-group';
import Carousel from 'react-multi-carousel';
import PostThumb1 from 'assets/blog/1.jpg';
import PostThumb2 from 'assets/blog/2.jpg';
import PostThumb4 from 'assets/blog/4.jpg';
import PostThumb5 from 'assets/blog/5.jpg';
import PostThumb6 from 'assets/blog/6.jpg';
import PostThumb8 from 'assets/blog/8.jpg';


const data = [
  {
    id: 1,
    imgSrc: PostThumb8,
    altText: 'Marketing',
    postLink: '#',
    title: 'Graphic Design',
    authorName: 'Monotonectally synergize grants to business visualize strategic infomediaries',
  },
  {
    id: 2,
    imgSrc: PostThumb6,
    altText: 'Creative',
    postLink: '#',
    title: 'Cloud Solutions',
    authorName: 'Deliver scalable cloud solutions to enhance your business’s flexibility and operational efficiency.',
  },
  {
    id: 3,
    imgSrc: PostThumb5,
    altText: 'Startup',
    postLink: '#',
    title: 'Web Developement',
    authorName: 'Design and build responsive, high-performance websites using the latest web technologies.',
  },
  {
    id: 4,
    imgSrc: PostThumb1,
    altText: 'Digital Marketing',
    postLink: '#',
    title: 'Digital Marketing',
    authorName: 'Boost your online presence with tailored digital marketing strategies that drive engagement and growth.',
  },
  {
    id: 4,
    imgSrc: PostThumb2,
    altText: 'Creative',
    postLink: '#',
    title: '3D vector Illustration',
    authorName: 'Monotonectally synergize grants to business visualize strategic infomediaries',
  },
  {
    id: 4,
    imgSrc: PostThumb4,
    altText: 'Startup',
    postLink: '#',
    title: 'Hosting Services',
    authorName: 'Monotonectally synergize grants to business visualize strategic infomediaries',
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1310 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  laptop: {
    breakpoint: { max: 1310, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default function BlogSection() {
  return (
    <Box sx={{ variant: 'section.news' }}>
      <Container>
        <SectionHeader
          slogan="our services"
          title="Explore our products for your business solution"
        />

        <Box sx={styles.carouselWrapper}>
          <Carousel
            additionalTransfrom={0}
            arrows={false}
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="carousel-container"
            customButtonGroup={<ButtonGroup />}
            dotListClass="test"
            draggable={true}
            focusOnSelect={false}
            infinite={true}
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside
            renderDotsOutside={false}
            responsive={responsive}
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
          >
            {data.map((item) => (
              <PostCard
                key={item.id}
                src={item.imgSrc}
                alt={item.altText}
                postLink={item.postLink}
                title={item.title}
                authorName={item.authorName}
                date={item.date}
              />
            ))}
          </Carousel>
        </Box>
      </Container>
    </Box>
  );
}

const styles = {
  carouselWrapper: {
    '.carousel-container': {
      mx: -3,
    },
  },
};
