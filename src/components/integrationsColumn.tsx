import {type IntegrationsType} from '@/sections/Integrations'
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

export default function IntegrationsColumn(props:{ integrations: IntegrationsType; className?: string;  }){
    const {integrations, className} = props;
    return(
         <div className="flex flex-col gap-4 pb-4">
                        {integrations.map(integration =>(
                            <div key={integration.name} className="bg-neutral-900 border-white/10 rounded-3xl p-6">
                                <div className={twMerge("flex justify-center", className)}>
                                    <Image src={integration.icon} alt="" className="size-24"/>
                                </div>
                                <h3 className="text-3xl text-center mt-6">{integration.name}</h3>
                                <p className="text-center text-white/50 mt-2">{integration.description}</p>
                                </div>
                        ))}
                    </div>
    )
}