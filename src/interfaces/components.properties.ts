import { StaticImageData } from 'next/image';

export interface HeaderProps {
    headerTitle: string,
    headerSubTitle: string,
    headerEl: HeaderElProps[],
}

interface HeaderElProps {
    label: string,
    route: string,
}

export interface FooterProps {
    footerTitle: string,
    footerEl?: HeaderElProps[],
}

export interface HeadingProps {
    title: string,
}

export interface SubHeadingProps {
    description: string,
}

export interface HeroProps {
    avatar: string | StaticImageData,
}

export interface ExperienceCardProps {
    id: string,
    title: string,
    desc: string,
    year: string,
    company: string
}

export interface ProjectCardProps {
    id: string
    imgSrc: string | StaticImageData,
    source_code_link: string,
    title: string,
    desc: string,
    tags: tagsProp[]
}

interface tagsProp {
    name: string,
    color: string,
}
