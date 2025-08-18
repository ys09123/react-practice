import Card from './Card'
import { useRef } from 'react'

const Foreground = () => {
    const ref = useRef(null);
    const data = [
        {
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
            filesize: ".9mb",
            close: true,
            tag: {
                isOpen: true,
                tagTitle: "Download Now",
                tagColor: "green"
            }
        },

        {
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
            filesize: ".9mb",
            close: true,
            tag: {
                isOpen: true,
                tagTitle: "Download Now",
                tagColor: "zinc"
            }
        },

        {
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
            filesize: ".9mb",
            close: true,
            tag: {
                isOpen: false,
                tagTitle: "Download Now",
                tagColor: "slate"
            }
        }
    ]
  return (
    <>
        <div ref={ref} className="w-full h-full fixed top-0 left-0 z-[3] flex gap-10 flex-wrap p-5">
            {data.map((item, index) => (
                <Card data={item} reference={ref}/>
            ))}
        </div>
    </>
  )
}

export default Foreground
