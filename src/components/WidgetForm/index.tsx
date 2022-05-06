import { CloseButton } from "../CloseButton";
import bugImageUrl from '../../assets/bug.png';
import IdeaImageUrl from '../../assets/idea.png';
import thoughtImageUrl from '../../assets/thought.png';
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";


export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image:{
            source: bugImageUrl,
            alt:'Inseto'
        }
    },
    IDEA: {
        title: 'Ideia',
        image:{
            source: IdeaImageUrl,
            alt:'lampada'
        }
    },
    OTHER:{
        title: 'Outro',
        image:{
            source: thoughtImageUrl,
            alt:'nuvem'
        }
    }
}

export type FeedbackType = keyof typeof feedbackTypes


export function WidgetForm(){

    const [feedbackType,setFeedbackType] = useState<FeedbackType | null>(null)

    return (
        <div className=" bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[100vw-2rem] md:w-auto">
            <header>
                <span className="text-xl leading-6">Deixe seu Feedback</span>

                <CloseButton />
            </header>

                {!feedbackType ? (
                    <FeedbackTypeStep />
                ) : (
                    <p>Hello World</p>
                )
            
            }

            <footer className="text-xs text-neutral-400">
                Feito com ♥ por <em>Gabriel</em>
            </footer>

        </div>
    )
}