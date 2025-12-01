import type { ReactElement } from "react"
import { ShareIcon } from "../Icons/ShareIcon"
import { DeleteIcon } from "../Icons/DeleteIcon"

interface CardProps {
    Logo: ReactElement,
    Heading: string,
    onClickShare?: () => void,
    onClickDelete?: () => void,
    MainContent: string,
    Tags: string,
    Date: string
}

const defaultStyles = " bg-gray-400 flex flex-col gap-2 border-red-500 w-3/10 h-[50vh] rounded-2xl"

const handleShare = () => {
    
}

const handleDelete = () => {

}


export const Card = (props: CardProps) => {
    return <div className={` Card ${defaultStyles} `}>
        <div className="Card Header flex justify-between p-2">
            <div className="left flex items-center">
                {props.Logo}
                {props.Heading}
            </div>
            <div className="right flex items-center">
                <button onClick={handleShare} className="cursor-pointer">
                    <ShareIcon />
                </button>
                <button onClick={handleDelete} className="cursor-pointer">
                    <DeleteIcon />
                </button>
            </div>
        </div>
        {/* Content */}
        <div className="Content py-4 p-2">
            {props.MainContent}
        </div>
        <div className="Tags p-2">
            {props.Tags}
        </div>
        <div className="Footer Date p-2">
            {props.Date}
        </div>
    </div>
}