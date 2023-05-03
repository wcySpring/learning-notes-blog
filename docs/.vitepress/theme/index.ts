import DefaultTheme from 'vitepress/theme'
import { addIcons, OhVueIcon } from 'oh-vue-icons'
import {
	BiLayoutSidebarInset,
	FaChevronDown,
	FaChevronLeft,
	FaChevronRight,
	FaChevronUp,
	FaCircle,
	FaEnvelope,
	FaFacebookF,
	FaGithubAlt,
	FaLinkedinIn,
	FaListUl,
	FaMagic,
	FaMoon,
	FaPencilAlt,
	FaRegularCalendar,
	FaRegularUser,
	FaSun,
	FaTwitter,
	HiTranslate,
	RiRssFill,
	RiSearch2Line,
	RiTimerLine,
	RiWeiboFill,
	RiZhihuLine,
} from 'oh-vue-icons/icons'

addIcons(
	FaChevronDown,
	FaChevronUp,
	FaChevronLeft,
	FaChevronRight,
	FaMagic,
	FaSun,
	FaMoon,
	FaGithubAlt,
	FaLinkedinIn,
	FaFacebookF,
	FaTwitter,
	RiZhihuLine,
	RiWeiboFill,
	FaEnvelope,
	RiRssFill,
	FaCircle,
	FaPencilAlt,
	FaRegularUser,
	FaRegularCalendar,
	RiTimerLine,
	FaListUl,
	BiLayoutSidebarInset,
	HiTranslate,
	RiSearch2Line
)

import '../theme/styles/root.scss'
import '../theme/styles/index.css'
export default {
	...DefaultTheme,

	enhanceApp({ app, router, siteData }) {
		app.component('VIcon', OhVueIcon)
	},
}
