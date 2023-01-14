import { RadioButton } from 'phosphor-react'

interface LessonProps {
  title: string;
  isPending: Boolean;
  thumb: string;
}

export function Lesson(props: LessonProps) {
  return (
    <a href="" className="group">
      <div className="rounded-lg p-3 group-hover:bg-gradient-to-r from-aux-500">
        <div className="flex">
          <div className="flex items-center w-full">
            <img src={props.thumb} width='80px' className="mr-2 rounded aspect-video" />

            <strong className="text-gray-200 font-thin text-sm block">
              {props.title}
            </strong>
          </div>

          <div className="flex justify-end">
            {props.isPending ? (
              <RadioButton size={24} className="m-3 text-zinc-500" />
            )  : (
              <RadioButton size={24} weight='fill' className="m-3 text-green-400" />
            )}
          </div>
        </div>
      </div>
    </a>
  )
}
