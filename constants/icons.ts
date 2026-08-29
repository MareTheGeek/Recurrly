import home from '@/assets/icons/home.png'
import wallet from '@/assets/icons/wallet.png'
import setting from '@/assets/icons/setting.png'
import add from '@/assets/icons/add.png'
import back from '@/assets/icons/back.png'
import activity from '@/assets/icons/activity.png'

export const icons = {
    home, wallet, setting, activity, add, back,
    // menu, plus, notion, dropbox, openai, adobe, medium, figma, spotify, github, claude, canva
} as const

export type IconKey = keyof typeof icons