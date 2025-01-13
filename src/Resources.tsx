export interface CardInterface {
    id: number;
    name: string;
    isDone: boolean;
    link: string;
    description: string;
    tag: string;
    tagRight: string;
}

export interface TopBar {
    topBar: string;
    setTopBar: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

export interface Cards {
    cards: CardInterface[];
    setCards: React.Dispatch<React.SetStateAction<CardInterface[]>>;
}