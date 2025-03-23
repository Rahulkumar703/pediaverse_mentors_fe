import { getMonthAndYear } from '@/lib/getMonthAndYear';
import { ObservationType } from '@/types/ObservationType'

export default function Timeline({
    observations
}: {
    observations: ObservationType[]
}) {

    return (
        <ol className="relative border-s border-gray-200 mx-5">
            {
                observations && observations.map((obs, index) => {
                    return (
                        <li className="mb-10 ms-4" key={index}>
                            <div className="absolute w-3 h-3 bg-primary-main rounded-full mt-1.5 -start-1.5 border border-white"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400">{getMonthAndYear(obs?.timestamp).month + ' ' + getMonthAndYear(obs.timestamp).year}</time>
                            <h3 className="text-lg font-semibold text-gray-900 ">{obs.title}</h3>
                            <p className="mb-4 text-base font-normal text-gray-500 ">{obs.description}</p>
                            <p className="mb-1 text-sm font-normal leading-none text-gray-400 ">Dr Samuel</p>
                        </li>
                    )
                })
            }
        </ol>
    )
}
