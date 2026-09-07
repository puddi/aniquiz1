export type Question = {
    question: string | React.ReactNode,
    answer: string | number | React.ReactNode,
    followups?: React.ReactNode[]
}

export type Category = {
    name: string,
    questions: Question[]
}

export type Config = {
    key: string,
    baseValue: number
    categories: Category[]
}

