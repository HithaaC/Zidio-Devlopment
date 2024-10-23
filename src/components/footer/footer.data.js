import Chat from 'assets/widget/chat.svg';
import Community from 'assets/widget/community.svg';
import Github from 'assets/widget/github.svg';

export default {
  widgets: [
    {
      id: 1,
      iconSrc: Chat,
      altText: 'Community',
      title: 'Join the Community',
      description:
        'Our team is dedicated to delivering high-quality projects, fostering professional growth, and driving technological advancement.',
    },
    {
      id: 2,
      iconSrc: Community,
      altText: 'Chat',
      title: 'Chat Communication',
      description:'support@zidio.in  +918455807965'
    },
    {
      id: 3,
      iconSrc: Github,
      altText: 'Github',
      title: 'Github Access',
      description:
        'Get in touch with us https://github.com/zidio',
    },
  ],
  menuItem: [
    {
      path: '/',
      label: 'Home',
    },
    {
      path: '/',
      label: 'About',
    },
    {
      path: '/',
      label: 'Services',
    },
    {
      path: '/',
      label: 'Contact',
    },

  ],
};
