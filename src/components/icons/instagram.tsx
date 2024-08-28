import { cn } from '@/lib/utils';
import { IconProps } from './youtube';

const InstagramIcon = ({ className }: IconProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            className={cn("fill-current text-[#fcfcfc]", className)}
            id="instagram"
        >
            <g fill="none" stroke="currentColor" strokeMiterlimit="10">
                <path d="M11.5 15.5h-7a4 4 0 0 1-4-4v-7a4 4 0 0 1 4-4h7a4 4 0 0 1 4 4v7a4 4 0 0 1-4 4z"></path>
                <circle cx="8" cy="8" r="3.5"></circle>
                <circle cx="12.5" cy="3.5" r=".5"></circle>
            </g>
        </svg>
    );
};

export default InstagramIcon;
