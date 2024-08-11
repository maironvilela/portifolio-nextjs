import { CardProject } from "@/components/posts-page/card-project"
import Image from "next/image"
import Link from "next/link"

export default function ProjectsPage() {
  return (
    <div className="flex flex-col justify-center items-center space-y-3  container">
      <CardProject />
      <CardProject />
    </div>
  )
}
