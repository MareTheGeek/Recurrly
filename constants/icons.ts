import activity from '@/assets/icons/activity.png'
import add from '@/assets/icons/add.png'
import adobe from '@/assets/icons/adobe.png'
import back from '@/assets/icons/back.png'
import figma from '@/assets/icons/figma.png'
import home from '@/assets/icons/home.png'
import setting from '@/assets/icons/setting.png'
import spotify from '@/assets/icons/spotify.png'
import wallet from '@/assets/icons/wallet.png'
import canva from '@/assets/icons/canva.png'
import claude from '@/assets/icons/claude.png'
import github from '@/assets/icons/github.png'
import notion from '@/assets/icons/notion.png'

export const icons = {
  home,
  wallet,
  setting,
  activity,
  add,
  back,
  spotify,
  figma,
  adobe,
  canva,
  claude,
  github,
  notion,
  // menu, plus, dropbox, openai, medium,
} as const

export type IconKey = keyof typeof icons
