import { AiFillGithub } from 'react-icons/ai';
import avatarJpg from '@/public/avatar.jpg';

export const config: IConfig = {
  name: 'haotian',
  avatar: avatarJpg,
  contact: [
    {
      icon: AiFillGithub,
      url: 'https://www.github.com/vipdou'
    }
  ],
  navList: [
    {
      title: 'Archives',
      url: '/archives'
    },
    {
      title: 'About',
      url: '/about'
    }
  ],
  emoji: [
    '😜',
    '🤤',
    '🤪',
    '😳',
    '😍',
    '❤️',
    '🤭',
    '🥰',
    '😵‍💫',
    '😇',
    '😓',
    '🤣'
  ]
};
