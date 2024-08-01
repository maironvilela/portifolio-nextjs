import Image from "next/image";
import { FaMedal } from "react-icons/fa";

type QualificationsItemProps = {
    status: string;
    description: string;
    course: string
    workload: string

}
export const QualificationsItem = ({ status, description, course, workload }: QualificationsItemProps) => {
    return (

        <div>
            <Image src="/assets/images/medal-icon.png" width={30} height={30} alt="" />
            <div className="flex flex-col">
                <strong className="text-lg"> {course}</strong>
                <span className="text-gray-400">{status}</span>
                <span className="text-gray-500">{workload}</span>
            </div>
            <p className="pt-2 text-gray-500">{description}</p>
        </div>
    )
}