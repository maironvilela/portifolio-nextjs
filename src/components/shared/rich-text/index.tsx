import { RichText as CMSRichText } from '@graphcms/rich-text-react-renderer'
import { ComponentProps } from 'react'

export type ReckTextProps = ComponentProps<typeof CMSRichText>

export const ReckText = ({ ...props }: ReckTextProps) => {
  return (
    <CMSRichText
      {...props}
      renderers={{
        li: ({ children }) => <li className="list-disc">{children}</li>,

      }}
    />
  )
}
