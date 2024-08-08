import { QualificationItem } from "@/utils/data-fetch-home-page";
import Image from "next/image";
import { FaMedal } from "react-icons/fa";


export const QualificationsItem = ({ course, courseStatus, educationalInstitute, description }: QualificationItem) => {
    return (

        <div>
            <Image src="/assets/images/medal-icon.png" width={30} height={30} alt="" />
            <div className="flex flex-col">
                <strong className="text-lg"> {course}</strong>
                <span className="text-gray-400">{educationalInstitute}</span>
                <span className="text-gray-500">{courseStatus}</span>
            </div>
            <p className="pt-2 text-gray-500">{description}</p>
        </div>
    )
}